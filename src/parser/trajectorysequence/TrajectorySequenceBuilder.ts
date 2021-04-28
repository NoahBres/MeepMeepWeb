import { trajectory, geometry, util, profile, path } from "roadrunnerjs";
import {
  SequenceSegment,
  TrajectorySegment,
  TurnSegment,
  WaitSegment,
} from "./SequenceSegment";
import { TrajectorySequence } from "./TrajectorySequence";
import { toRadians } from "../../util";

export class TrajectorySequenceBuilder {
  [key: string]: any;

  private readonly resolution = 0.25;

  private readonly baseVelConstraint: trajectory.constraints.TrajectoryVelocityConstraint;
  private readonly baseAccelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint;

  private currentVelConstraint: trajectory.constraints.TrajectoryVelocityConstraint;
  private currentAccelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint;

  private readonly baseTurnConstraintMaxAngVel: number;
  private readonly baseTurnConstraintMaxAngAccel: number;

  private currentTurnConstraintMaxAngVel: number;
  private currentTurnConstraintMaxAngAccel: number;

  private sequenceSegments: SequenceSegment[];

  private readonly temporalMarkers: trajectory.TemporalMarker[];
  private readonly displacementMarkers: trajectory.DisplacementMarker[];
  private readonly spatialMarkers: trajectory.SpatialMarker[];

  private lastPose: geometry.Pose2d;

  private tangentOffset: number;

  private setAbsoluteTangent: boolean;
  private absoluteTangent: number;

  private currentTrajectoryBuilder: trajectory.TrajectoryBuilder | null;

  private currentDuration: number;
  private currentDisplacement: number;

  private lastDurationTraj: number;
  private lastDisplacementTraj: number;

  constructor(
    startPose: geometry.Pose2d,
    startTangent: number | null,
    baseVelConstraint: trajectory.constraints.TrajectoryVelocityConstraint,
    baseAccelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint,
    baseTurnConstraintMaxAngVel: number,
    baseTurnConstraintMaxAngAccel: number
  ) {
    this.baseVelConstraint = baseVelConstraint;
    this.baseAccelConstraint = baseAccelConstraint;

    this.currentVelConstraint = baseVelConstraint;
    this.currentAccelConstraint = baseAccelConstraint;

    this.baseTurnConstraintMaxAngVel = baseTurnConstraintMaxAngVel;
    this.baseTurnConstraintMaxAngAccel = baseTurnConstraintMaxAngAccel;

    this.currentTurnConstraintMaxAngVel = baseTurnConstraintMaxAngVel;
    this.currentTurnConstraintMaxAngAccel = baseTurnConstraintMaxAngAccel;

    this.sequenceSegments = [];

    this.temporalMarkers = [];
    this.displacementMarkers = [];
    this.spatialMarkers = [];

    this.lastPose = startPose;

    this.tangentOffset = 0.0;

    this.setAbsoluteTangent = startTangent != null;
    this.absoluteTangent = startTangent != null ? startTangent : 0.0;

    this.currentTrajectoryBuilder = null;

    this.currentDuration = 0.0;
    this.currentDisplacement = 0.0;

    this.lastDurationTraj = 0.0;
    this.lastDisplacementTraj = 0.0;
  }

  lineTo(endPosition: geometry.Vector2d): TrajectorySequenceBuilder {
    return this.addPath(() =>
      this.currentTrajectoryBuilder?.lineTo(
        endPosition,
        this.currentVelConstraint,
        this.currentAccelConstraint
      )
    );
  }

  lineToConstantHeading(
    endPosition: geometry.Vector2d
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.lineToConstantHeading(
        endPosition,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  lineToLinearHeading(endPose: geometry.Pose2d): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.lineToLinearHeading(
        endPose,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  lineToSplineHeading(endPose: geometry.Pose2d): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.lineToSplineHeading(
        endPose,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  strafeTo(endPosition: geometry.Vector2d): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.strafeTo(
        endPosition,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  forward(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.forward(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  back(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.back(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  strafeLeft(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.strafeLeft(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  strafeRight(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.strafeRight(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineTo(
    endPosition: geometry.Vector2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineTo(
        endPosition,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineToConstantHeading(
    endPosition: geometry.Vector2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineToConstantHeading(
        endPosition,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineToLinearHeading(
    endPose: geometry.Pose2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineToLinearHeading(
        endPose,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineToSplineHeading(
    endPose: geometry.Pose2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineToSplineHeading(
        endPose,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  private addPath(callback: () => void): TrajectorySequenceBuilder {
    if (this.currentTrajectoryBuilder === null) this.newPath();
    if (this.currentTrajectoryBuilder === null) return this;

    try {
      callback();
    } catch (e) {
      if (e.name === "PathContinuityViolationException") {
        this.newPath();
        callback();
      } else {
        throw e;
      }
    }

    const builtTraj: trajectory.Trajectory = this.currentTrajectoryBuilder.build();

    const durationDifference = builtTraj.duration() - this.lastDurationTraj;
    const displacementDifference =
      builtTraj.path.length() - this.lastDisplacementTraj;

    this.lastPose = builtTraj.end();
    this.currentDuration += durationDifference;
    this.currentDisplacement += displacementDifference;

    this.lastDurationTraj = builtTraj.duration();
    this.lastDisplacementTraj = builtTraj.path.length();

    return this;
  }

  setTangent(tangent: number): TrajectorySequenceBuilder {
    this.setAbsoluteTangent = true;
    this.absoluteTangent = tangent;

    this.pushPath();

    return this;
  }

  private setTangentOffset(offset: number): TrajectorySequenceBuilder {
    this.setAbsoluteTangent = false;

    this.tangentOffset = offset;
    this.pushPath();

    return this;
  }

  setReversed(reversed: boolean): TrajectorySequenceBuilder {
    return reversed
      ? this.setTangentOffset(toRadians(180.0))
      : this.setTangentOffset(0.0);
  }

  setConstraints(
    velConstraint: trajectory.constraints.TrajectoryVelocityConstraint,
    accelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint
  ): TrajectorySequenceBuilder {
    this.currentVelConstraint = velConstraint;
    this.currentAccelConstraint = accelConstraint;

    return this;
  }

  resetConstraints(): TrajectorySequenceBuilder {
    this.currentVelConstraint = this.baseVelConstraint;
    this.currentAccelConstraint = this.baseAccelConstraint;

    return this;
  }

  setVelConstraint(
    velConstraint: trajectory.constraints.TrajectoryVelocityConstraint
  ): TrajectorySequenceBuilder {
    console.log(velConstraint);
    this.currentVelConstraint = velConstraint;

    return this;
  }

  resetVelConstraint(): TrajectorySequenceBuilder {
    this.currentVelConstraint = this.baseVelConstraint;

    return this;
  }

  setAccelConstraint(
    accelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint
  ): TrajectorySequenceBuilder {
    this.currentAccelConstraint = accelConstraint;

    return this;
  }

  resetAccelConstraint(): TrajectorySequenceBuilder {
    this.currentAccelConstraint = this.baseAccelConstraint;

    return this;
  }

  setTurnConstraint(
    maxAngVel: number,
    maxAngAccel: number
  ): TrajectorySequenceBuilder {
    this.currentTurnConstraintMaxAngVel = maxAngVel;
    this.currentTurnConstraintMaxAngAccel = maxAngAccel;

    return this;
  }

  resetTurnConstraint(): TrajectorySequenceBuilder {
    this.currentTurnConstraintMaxAngVel = this.baseTurnConstraintMaxAngVel;
    this.currentTurnConstraintMaxAngAccel = this.baseTurnConstraintMaxAngAccel;

    return this;
  }

  turn(
    angle: number,
    maxAngVel: number = this.currentTurnConstraintMaxAngVel,
    maxAngAccel: number = this.currentTurnConstraintMaxAngAccel
  ): TrajectorySequenceBuilder {
    this.pushPath();

    const turnProfile = profile.MotionProfileGenerator.generateSimpleMotionProfile(
      new profile.MotionState(this.lastPose.heading, 0.0, 0.0, 0.0),
      new profile.MotionState(this.lastPose.heading + angle, 0.0, 0.0, 0.0),
      maxAngVel,
      maxAngAccel,
      0,
      false
    );

    this.sequenceSegments.push(
      new TurnSegment(this.lastPose, angle, turnProfile, [])
    );

    this.lastPose = new geometry.Pose2d(
      this.lastPose.x,
      this.lastPose.y,
      util.Angle.norm(this.lastPose.heading + angle)
    );

    this.currentDuration += turnProfile.duration();

    return this;
  }

  waitSeconds(seconds: number): TrajectorySequenceBuilder {
    this.pushPath();
    this.sequenceSegments.push(new WaitSegment(this.lastPose, seconds, []));

    this.currentDuration += seconds;
    return this;
  }

  addTrajectory(trajectory: trajectory.Trajectory) {
    this.pushPath();

    this.sequenceSegments.push(new TrajectorySegment(trajectory));
    return this;
  }

  private pushPath() {
    if (this.currentTrajectoryBuilder !== null) {
      const builtTraj: trajectory.Trajectory = this.currentTrajectoryBuilder.build();
      this.sequenceSegments.push(new TrajectorySegment(builtTraj));
    }

    this.currentTrajectoryBuilder = null;
  }

  private newPath() {
    if (this.currentTrajectoryBuilder != null) this.pushPath();

    this.lastDurationTraj = 0.0;
    this.lastDisplacementTraj = 0.0;

    const tangent = this.setAbsoluteTangent
      ? this.absoluteTangent
      : util.Angle.norm(this.lastPose.heading + this.tangentOffset);

    this.currentTrajectoryBuilder = new trajectory.TrajectoryBuilder(
      this.lastPose,
      tangent,
      null,
      null,
      this.currentVelConstraint,
      this.currentAccelConstraint,
      new profile.MotionState(0, 0, 0, 0),
      this.resolution
    );
  }

  // TODO Finish this
  build() {
    this.pushPath();

    const globalMarkers: trajectory.TrajectoryMarker[] = this.convertMarkersToGlobal(
      this.sequenceSegments,
      this.temporalMarkers,
      this.displacementMarkers,
      this.spatialMarkers
    );

    return new TrajectorySequence(
      this.projectGlobalMarkersToLocalSegments(
        globalMarkers,
        this.sequenceSegments
      )
    );
  }

  convertMarkersToGlobal(
    sequenceSegments: SequenceSegment[],
    temporalMarkers: trajectory.TemporalMarker[],
    displacementMarkers: trajectory.DisplacementMarker[],
    spatialMarkers: trajectory.SpatialMarker[]
  ): trajectory.TrajectoryMarker[] {
    const trajectoryMarkers: trajectory.TrajectoryMarker[] = [
      ...temporalMarkers.map(
        (e) =>
          new trajectory.TrajectoryMarker(
            e.producer.produce(this.currentDuration),
            e.callback
          )
      ),
      ...displacementMarkers.map(
        (e) =>
          new trajectory.TrajectoryMarker(
            this.displacementToTime(
              this.sequenceSegments,
              e.producer.produce(this.currentDisplacement)
            ),
            e.callback
          )
      ),
      ...spatialMarkers.map(
        (e) =>
          new trajectory.TrajectoryMarker(
            this.pointToTime(this.sequenceSegments, e.point),
            e.callback
          )
      ),
    ];

    return trajectoryMarkers;
  }

  private projectGlobalMarkersToLocalSegments(
    markers: trajectory.TrajectoryMarker[],
    sequenceSegments: SequenceSegment[]
  ): SequenceSegment[] {
    if (sequenceSegments.length === 0) return [];

    const totalSequenceDuration = sequenceSegments.reduce(
      (acc, curr) => acc + curr.duration,
      0
    );

    markers.forEach((marker) => {
      let segment: SequenceSegment | null = null;
      let segmentIndex = 0;
      let segmentOffsetTime = 0;

      let currentTime = 0;
      for (let i = 0; i < sequenceSegments.length; i++) {
        const seg = sequenceSegments[i];

        const markerTime = Math.min(marker.time, totalSequenceDuration);

        if (currentTime + seg.duration >= markerTime) {
          segment = seg;
          segmentIndex = i;
          segmentOffsetTime = markerTime - currentTime;

          break;
        } else {
          currentTime += seg.duration;
        }
      }

      let newSegment: SequenceSegment | null = null;

      if (segment instanceof WaitSegment) {
        const newMarkers: trajectory.TrajectoryMarker[] = segment.markers;
        newMarkers.push(
          new trajectory.TrajectoryMarker(segmentOffsetTime, marker.callback)
        );

        newSegment = new WaitSegment(
          segment.startPose,
          segment.duration,
          segment.markers
        );
      } else if (segment instanceof TurnSegment) {
        const newMarkers: trajectory.TrajectoryMarker[] = segment.markers;
        newMarkers.push(
          new trajectory.TrajectoryMarker(segmentOffsetTime, marker.callback)
        );

        newSegment = new TurnSegment(
          segment.startPose,
          segment.totalRotation,
          segment.motionProfile,
          segment.markers
        );
      } else if (segment instanceof TrajectorySegment) {
        const newMarkers: trajectory.TrajectoryMarker[] =
          segment.trajectory.markers;
        newMarkers.push(
          new trajectory.TrajectoryMarker(segmentOffsetTime, marker.callback)
        );

        newSegment = new TrajectorySegment(
          new trajectory.Trajectory(
            segment.trajectory.path,
            segment.trajectory.profile,
            newMarkers
          )
        );
      }

      sequenceSegments[segmentIndex] = newSegment as SequenceSegment;
    });

    return sequenceSegments;
  }

  // // Taken from Road Runner's TrajectoryGenerator.displacementToTime() since it's private
  // // note: this assumes that the profile position is monotonic increasing
  private motionProfileDisplacementToTime(
    profile: profile.MotionProfile,
    s: number
  ) {
    let tLo = 0.0;
    let tHi = profile.duration();
    while (!(Math.abs(tLo - tHi) < 1e-6)) {
      const tMid = 0.5 * (tLo + tHi);
      if (profile.get(tMid).x > s) {
        tHi = tMid;
      } else {
        tLo = tMid;
      }
    }
    return 0.5 * (tLo + tHi);
  }

  private displacementToTime(sequenceSegments: SequenceSegment[], s: number) {
    let currentTime = 0.0;
    let currentDisplacement = 0.0;

    sequenceSegments.forEach((segment) => {
      if (segment instanceof TrajectorySegment) {
        const segmentLength = segment.trajectory.path.length();

        if (currentDisplacement + segmentLength > s) {
          const target = s - currentDisplacement;
          const timeInSegment = this.motionProfileDisplacementToTime(
            segment.trajectory.profile,
            target
          );

          return currentTime + timeInSegment;
        } else {
          currentDisplacement += segmentLength;
          currentTime += segment.trajectory.duration();
        }
      } else {
        currentTime += segment.duration;
      }
    });

    return 0.0;
  }

  private pointToTime(
    sequenceSegments: SequenceSegment[],
    point: geometry.Vector2d
  ) {
    type ComparingPoints = {
      distanceToPoint: number;
      totalDisplacement: number;
      thisPathDisplacement: number;
    };

    const projectedPoints: ComparingPoints[] = [];

    sequenceSegments.forEach((segment) => {
      if (segment instanceof TrajectorySegment) {
        const displacement = segment.trajectory.path.project(point, 0.25);
        const projectedPoint = segment.trajectory.path
          .getSingleParam(displacement)
          .vec();
        const distanceToPoint = point.minus(projectedPoint).norm();

        let totalDisplacement = 0.0;

        projectedPoints.forEach(
          (e) => (totalDisplacement += e.totalDisplacement)
        );

        totalDisplacement += displacement;

        projectedPoints.push({
          distanceToPoint,
          totalDisplacement: displacement,
          thisPathDisplacement: totalDisplacement,
        });
      }
    });

    let closestPoint: ComparingPoints | null = null;

    for (const comparingPoint of projectedPoints) {
      if (closestPoint === null) {
        closestPoint = comparingPoint;
        continue;
      }

      if (comparingPoint.distanceToPoint < closestPoint.distanceToPoint)
        closestPoint = comparingPoint;
    }

    return this.displacementToTime(
      sequenceSegments,
      closestPoint?.thisPathDisplacement ?? 0
    );
  }
}
