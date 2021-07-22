import { MotionState } from "./../profile/MotionState";
import { norm } from "roadrunnerjs/util";
import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { BaseTrajectoryBuilder } from "./BaseTrajectoryBuilder";
import { TrajectoryAccelerationConstraint } from "./constraints";
import { TrajectoryVelocityConstraint } from "./constraints/TrajectoryVelocityConstraint";
import { Trajectory } from "./Trajectory";
import { Path } from "roadrunnerjs/path";
import { TemporalMarker } from "./TemporalMarker";
import { DisplacementMarker } from "./DisplacementMarker";
import { SpatialMarker } from "./SpatialMarker";
import { generateTrajectory } from "./TrajectoryGenerator";

type IntervalVelocityConstraint = {
  start: number;
  end: number;
  constraint: TrajectoryVelocityConstraint;
};

class PiecewiseVelocityConstraint implements TrajectoryVelocityConstraint {
  constructor(
    private readonly baseConstraint: TrajectoryVelocityConstraint,
    private readonly constraintOverrides: IntervalVelocityConstraint[]
  ) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): number {
    for (const interval of this.constraintOverrides) {
      const { start, end, constraint } = interval;

      if (s > start && s < end) {
        return constraint.get(s, pose, deriv, baseRobotVel);
      }
    }
    return this.baseConstraint.get(s, pose, deriv, baseRobotVel);
  }
}

type IntervalAccelerationConstraint = {
  start: number;
  end: number;
  constraint: TrajectoryAccelerationConstraint;
};

class PiecewiseAccelerationConstraint
  implements TrajectoryAccelerationConstraint
{
  constructor(
    private readonly baseConstraint: TrajectoryAccelerationConstraint,
    private readonly constraintOverrides: IntervalAccelerationConstraint[]
  ) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): number {
    for (const interval of this.constraintOverrides) {
      const { start, end, constraint } = interval;

      if (s > start && s < end) {
        return constraint.get(s, pose, deriv, baseRobotVel);
      }
    }
    return this.baseConstraint.get(s, pose, deriv, baseRobotVel);
  }
}

/**
 * Create a builder from a start pose and motion state. This is the recommended constructor for creating
 * trajectories from rest.
 */
type TrajectoryBuilderConstructor1 = {
  startPose: Pose2d;
  startTangent: number;
  baseVelConstraint: TrajectoryVelocityConstraint;
  baseAccelConstraint: TrajectoryAccelerationConstraint;
  resolution?: number;
};

type TrajectoryBuilderConstructor2 = {
  startPose: Pose2d;
  reversed: boolean;
  baseVelConstraint: TrajectoryVelocityConstraint;
  baseAccelConstraint: TrajectoryAccelerationConstraint;
  resolution?: number;
};

/**
 * Create a builder from an active trajectory. This is useful for interrupting a live trajectory and smoothly
 * transitioning to a new one.
 */
type TrajectoryBuilderConstructor3 = {
  trajectory: Trajectory;
  t: number;
  baseVelConstraint: TrajectoryVelocityConstraint;
  baseAccelConstraint: TrajectoryAccelerationConstraint;
  resolution?: number;
};

/**
 * Builder for trajectories with *dynamic* constraints.
 */
export class TrajectoryBuilder extends BaseTrajectoryBuilder<TrajectoryBuilder> {
  private readonly baseVelConstraint: TrajectoryVelocityConstraint;
  private readonly baseAccelConstraint: TrajectoryAccelerationConstraint;
  private readonly start: MotionState;
  private readonly resolution: number;

  private readonly velConstraintOverrides: IntervalVelocityConstraint[] = [];
  private readonly accelConstraintOverrides: IntervalAccelerationConstraint[] =
    [];

  constructor(
    p:
      | TrajectoryBuilderConstructor1
      | TrajectoryBuilderConstructor2
      | TrajectoryBuilderConstructor3
  ) {
    if ("startPose" in p) {
      if ("startTangent" in p) {
        super(p.startPose, p.startTangent, undefined, undefined);
      } else {
        super(
          p.startPose,
          norm(p.startPose.heading + (p.reversed ? Math.PI : 0)),
          undefined,
          undefined
        );
      }

      this.start = new MotionState(0, 0, 0);
    } else {
      super(undefined, undefined, p.trajectory, p.t);

      this.start = p.trajectory.profile.get(p.t).zeroPosition();
    }

    this.baseVelConstraint = p.baseVelConstraint;
    this.baseAccelConstraint = p.baseAccelConstraint;

    this.resolution = p.resolution ?? 0.25;
  }

  addSegment(
    add: () => void,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ): TrajectoryBuilder {
    const start = this.pathBuilder.build().length();

    add();

    const end = this.pathBuilder.build().length();

    if (velConstraintOverride != null) {
      this.velConstraintOverrides.push({
        start,
        end,
        constraint: velConstraintOverride,
      });
    }

    if (accelConstraintOverride != null) {
      this.accelConstraintOverrides.push({
        start,
        end,
        constraint: accelConstraintOverride,
      });
    }

    return this;
  }

  /**
   * Adds a line segment with tangent heading interpolation.
   *
   * @param endPosition end position
   * @param constraintsOverride segment-specific constraints
   */
  lineTo(
    endPosition: Vector2d,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.lineTo(endPosition),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a line segment with constant heading interpolation.
   *
   * @param endPosition end position
   * @param constraintsOverride segment-specific constraints
   */
  lineToConstantHeading(
    endPosition: Vector2d,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.lineToConstantHeading(endPosition),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a line segment with linear heading interpolation.
   *
   * @param endPose end pose
   * @param constraintsOverride segment-specific constraints
   */
  lineToLinearHeading(
    endPose: Pose2d,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.lineToLinearHeading(endPose),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a line segment with spline heading interpolation.
   *
   * @param endPose end pose
   * @param constraintsOverride segment-specific constraints
   */
  lineToSplineHeading(
    endPose: Pose2d,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.lineToSplineHeading(endPose),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a strafe path segment.
   *
   * @param endPosition end position
   * @param constraintsOverride segment-specific constraints
   */
  strafeTo(
    endPosition: Vector2d,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.strafeTo(endPosition),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a line straight forward.
   *
   * @param distance distance to travel forward
   * @param constraintsOverride segment-specific constraints
   */
  forward(
    distance: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.forward(distance),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a line straight backward.
   *
   * @param distance distance to travel backward
   * @param constraintsOverride segment-specific constraints
   */
  back(
    distance: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.back(distance),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a segment that strafes left in the robot reference frame.
   *
   * @param distance distance to strafe left
   * @param constraintsOverride segment-specific constraints
   */
  strafeLeft(
    distance: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.strafeLeft(distance),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a segment that strafes right in the robot reference frame.
   *
   * @param distance distance to strafe right
   * @param constraintsOverride segment-specific constraints
   */
  strafeRight(
    distance: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.strafeRight(distance),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a spline segment with tangent heading interpolation.
   *
   * @param endPosition end position
   * @param endTangent end tangent
   * @param constraintsOverride segment-specific constraints
   */
  splineTo(
    endPosition: Vector2d,
    endTangent: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.splineTo(endPosition, endTangent),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a spline segment with constant heading interpolation.
   *
   * @param endPosition end position
   * @param endTangent end tangent
   * @param constraintsOverride segment-specific constraints
   */
  splineToConstantHeading(
    endPosition: Vector2d,
    endTangent: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.splineToConstantHeading(endPosition, endTangent),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a spline segment with linear heading interpolation.
   *
   * @param endPose end pose
   * @param endTangent end tangent
   * @param constraintsOverride segment-specific constraints
   */
  splineToLinearHeading(
    endPose: Pose2d,
    endTangent: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.splineToLinearHeading(endPose, endTangent),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  /**
   * Adds a spline segment with spline heading interpolation.
   *
   * @param endPose end pose
   * @param constraintsOverride segment-specific constraints
   */
  splineToSplineHeading(
    endPose: Pose2d,
    endTangent: number,
    velConstraintOverride?: TrajectoryVelocityConstraint,
    accelConstraintOverride?: TrajectoryAccelerationConstraint
  ) {
    return this.addSegment(
      () => super.splineToSplineHeading(endPose, endTangent),
      velConstraintOverride,
      accelConstraintOverride
    );
  }

  buildTrajectory(
    path: Path,
    temporalMarkers: TemporalMarker[],
    displacementMarkers: DisplacementMarker[],
    spatialMarkers: SpatialMarker[]
  ): Trajectory {
    const goal = new MotionState(path.length(), 0.0, 0.0);
    return generateTrajectory(
      path,
      new PiecewiseVelocityConstraint(
        this.baseVelConstraint,
        this.velConstraintOverrides
      ),
      new PiecewiseAccelerationConstraint(
        this.baseAccelConstraint,
        this.accelConstraintOverrides
      ),
      this.start,
      goal,
      temporalMarkers,
      displacementMarkers,
      spatialMarkers,
      this.resolution
    );
  }
}
