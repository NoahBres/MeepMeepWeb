import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { Path, PathBuilder } from "roadrunnerjs/path";
import { DisplacementMarker } from "./DisplacementMarker";
import { SpatialMarker } from "./SpatialMarker";
import { TemporalMarker } from "./TemporalMarker";
import { Trajectory } from "./Trajectory";

/**
 * Easy-to-use builder for creating [Trajectory] instances.
 *
 * @param startPose start pose
 * @param trajectory initial trajectory (for splicing)
 * @param t time index in previous trajectory to begin new trajectory
 */
export abstract class BaseTrajectoryBuilder<
  T extends BaseTrajectoryBuilder<T>
> {
  protected pathBuilder: PathBuilder;

  private readonly temporalMarkers: TemporalMarker[] = [];
  private readonly displacementMarkers: DisplacementMarker[] = [];
  private readonly spatialMarkers: SpatialMarker[] = [];

  protected constructor(
    startPose?: Pose2d,
    startTangent?: number,
    trajectory?: Trajectory,
    t?: number
  ) {
    if (startPose === undefined && trajectory) {
      this.pathBuilder = new PathBuilder({
        path: trajectory.path,
        s: trajectory.profile.get(t ?? 0).x,
      });
    } else {
      this.pathBuilder = new PathBuilder({
        startPose: startPose ?? new Pose2d(),
        startTangent: startTangent ?? 0,
      });
    }
  }

  /**
   * Adds a line segment with tangent heading interpolation.
   *
   * @param endPosition end position
   */
  lineTo(endPosition: Vector2d) {
    this.pathBuilder.lineTo(endPosition);

    return this as unknown as T;
  }

  /**
   * Adds a line segment with constant heading interpolation.
   *
   * @param endPosition end position
   */
  lineToConstantHeading(endPosition: Vector2d) {
    this.pathBuilder.lineToConstantHeading(endPosition);

    return this as unknown as T;
  }

  /**
   * Adds a line segment with linear heading interpolation.
   *
   * @param endPose end pose
   */
  lineToLinearHeading(endPose: Pose2d) {
    this.pathBuilder.lineToLinearHeading(endPose);

    return this as unknown as T;
  }

  /**
   * Adds a line segment with spline heading interpolation.
   *
   * @param endPose end pose
   */
  lineToSplineHeading(endPose: Pose2d) {
    this.pathBuilder.lineToSplineHeading(endPose);

    return this as unknown as T;
  }

  /**
   * Adds a strafe path segment.
   *
   * @param endPosition end position
   */
  strafeTo(endPosition: Vector2d) {
    this.pathBuilder.strafeTo(endPosition);

    return this as unknown as T;
  }

  /**
   * Adds a line straight forward.
   *
   * @param distance distance to travel forward
   */
  forward(distance: number) {
    this.pathBuilder.forward(distance);

    return this as unknown as T;
  }

  /**
   * Adds a line straight backward.
   *
   * @param distance distance to travel backward
   */
  back(distance: number) {
    this.pathBuilder.back(distance);

    return this as unknown as T;
  }

  /**
   * Adds a segment that strafes left in the robot reference frame.
   *
   * @param distance distance to strafe left
   */
  strafeLeft(distance: number) {
    this.pathBuilder.strafeLeft(distance);

    return this as unknown as T;
  }
  /**
   * Adds a segment that strafes right in the robot reference frame.
   *
   * @param distance distance to strafe right
   */
  strafeRight(distance: number) {
    this.pathBuilder.strafeRight(distance);

    return this as unknown as T;
  }

  /**
   * Adds a spline segment with tangent heading interpolation.
   *
   * @param endPosition end position
   * @param endTangent end tangent
   */
  splineTo(endPosition: Vector2d, endTangent: number) {
    this.pathBuilder.splineTo(endPosition, endTangent);

    return this as unknown as T;
  }

  /**
   * Adds a spline segment with constant heading interpolation.
   *
   * @param endPosition end position
   * @param endTangent end tangent
   */
  splineToConstantHeading(endPosition: Vector2d, endTangent: number) {
    this.pathBuilder.splineToConstantHeading(endPosition, endTangent);

    return this as unknown as T;
  }

  /**
   * Adds a spline segment with linear heading interpolation.
   *
   * @param endPose end pose
   * @param endTangent end tangent
   */
  splineToLinearHeading(endPose: Pose2d, endTangent: number) {
    this.pathBuilder.splineToLinearHeading(endPose, endTangent);

    return this as unknown as T;
  }

  /**
   * Adds a spline segment with spline heading interpolation.
   *
   * @param endPose end pose
   * @param endTangent end tangent
   */
  splineToSplineHeading(endPose: Pose2d, endTangent: number) {
    this.pathBuilder.splineToSplineHeading(endPose, endTangent);

    return this as unknown as T;
  }

  /**
   * Adds a marker to the trajectory at [time] evaluated with the trajectory duration.
   */
  addTemporalMarker(time: number, callback: () => void) {
    this.temporalMarkers.push({ producer: () => time, callback });

    return this as unknown as T;
  }

  /**
   * Adds a marker that will be triggered at the closest trajectory point to [point].
   */
  addSpatialMarker(point: Vector2d, callback: () => void) {
    this.spatialMarkers.push({ point, callback });

    return this as unknown as T;
  }

  /**
   * Adds a marker to the trajectory at [displacement] evaluated with path length.
   */
  addDisplacementMarker(
    displacement: number | (() => void),
    callback?: () => void
  ) {
    if (typeof displacement === "number" && callback) {
      this.displacementMarkers.push({ producer: () => displacement, callback });
    } else if (typeof displacement === "function") {
      this.displacementMarkers.push({
        producer: () => this.pathBuilder.build().length(),
        callback: displacement,
      });
    }

    return this as unknown as T;
  }

  /**
   * Constructs the [Trajectory] instance.
   */
  build() {
    return this.buildTrajectory(
      this.pathBuilder.build(),
      this.temporalMarkers,
      this.displacementMarkers,
      this.spatialMarkers
    );
  }

  /**
   * Build a trajectory from [path].
   */
  protected abstract buildTrajectory(
    path: Path,
    temporalMarkers: TemporalMarker[],
    displacementMarkers: DisplacementMarker[],
    spatialMarkers: SpatialMarker[]
  ): Trajectory;
}
