import { epsilonEquals, norm, normDelta } from "roadrunnerjs/util";
import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { Path } from "./Path";
import { PathSegment } from "./PathSegment";
import { LineSegment } from "./LineSegment";
import { Knot, QuinticSpline } from "./QuinticSpline";
import { ParametricCurve } from "./ParametricCurve";
import {
  ConstantInterpolator,
  LinearInterpolator,
  SplineInterpolator,
  TangentInterpolator,
} from "./heading";

/**
 * Exception thrown by [PathBuilder].
 */
abstract class PathBuilderException extends Error {}

/**
 * Exception thrown when [PathBuilder] methods are chained illegally. This commonly arises when switching from
 * non-tangent interpolation back to tangent interpolation and when splicing paths.
 */
class PathContinuityViolationException extends PathBuilderException {}

/**
 * Exception thrown when empty path segments are requested.
 */
class EmptyPathSegmentException extends PathBuilderException {}

type PathBuilderConstructor1 = {
  startPose: Pose2d;
  startTangent: number;
};

type PathBuilderConstructor2 = {
  startPose: Pose2d;
  reversed: boolean;
};

type PathBuilderConstructor3 = {
  path: Path;
  s: number;
};

/**
 * Easy-to-use builder for creating [Path] instances.
 *
 * @param startPose start pose
 * @param startTangent start tangent
 * @param path previous path
 * @param s displacement in previous path
 */
export class PathBuilder {
  private currentPose: Pose2d | null = null;
  private currentTangent: number | null = null;

  private path: Path | null = null;
  private s: number | null = null;

  private segments: PathSegment[] = [];

  constructor(
    parameter:
      | PathBuilderConstructor1
      | PathBuilderConstructor2
      | PathBuilderConstructor3
  ) {
    if ("startPose" in parameter && parameter.startPose !== undefined) {
      this.currentPose = parameter.startPose;

      if ("startTangent" in parameter && parameter.startTangent !== undefined) {
        this.currentTangent = parameter.startTangent;
      } else if ("reversed" in parameter && parameter.reversed !== undefined) {
        this.currentTangent = norm(
          parameter.startPose.heading + (parameter.reversed ? Math.PI : 0)
        );
      }
    } else if ("path" in parameter && "s" in parameter) {
      this.path = parameter.path;
      this.s = parameter.s;
    }
  }

  makeLine(end: Vector2d): LineSegment {
    const start =
      this.currentPose === null
        ? this.path?.get(this.s ?? 0)
        : this.currentPose;

    if (start?.vec().epsilonEquals(end)) {
      throw new EmptyPathSegmentException();
    }

    return new LineSegment(start?.vec() ?? new Vector2d(0, 0), end);
  }

  makeSpline(endPosition: Vector2d, endTangent: number): QuinticSpline {
    const startPose =
      this.currentPose === null
        ? this.path?.get(this.s ?? 0)
        : this.currentPose;

    if (startPose?.vec().epsilonEquals(endPosition)) {
      throw new EmptyPathSegmentException();
    }

    const derivMag = startPose?.vec().distTo(endPosition);
    let startWaypoint: Knot;
    let endWaypoint: Knot;

    if (this.currentPose === null) {
      const startDeriv = this.path?.internalDeriv(this.s ?? 0).vec();
      const startSecondDeriv = this.path
        ?.internalSecondDeriv(this.s ?? 0)
        .vec();

      startWaypoint = new Knot({
        pos: startPose?.vec() ?? new Vector2d(0, 0),
        deriv: startDeriv,
        secondDeriv: startSecondDeriv,
      });
      endWaypoint = new Knot({
        pos: endPosition,
        deriv: Vector2d.polar(derivMag ?? 0, endTangent),
      });
    } else {
      startWaypoint = new Knot({
        pos: startPose?.vec() ?? new Vector2d(0, 0),
        deriv: Vector2d.polar(derivMag ?? 0, this.currentTangent ?? 0),
      });
      endWaypoint = new Knot({
        pos: endPosition,
        deriv: Vector2d.polar(derivMag ?? 0, endTangent),
      });
    }

    return new QuinticSpline(startWaypoint, endWaypoint);
  }

  makeTangentInterpolator(curve: ParametricCurve): TangentInterpolator {
    if (this.currentPose === null) {
      const prevInterpolator = this.path?.segment(this.s ?? 0)[0].interpolator;
      if (!(prevInterpolator instanceof TangentInterpolator)) {
        throw new PathContinuityViolationException();
      }

      return new TangentInterpolator(prevInterpolator.offset);
    }

    const startHeading = curve.tangentAngle(0.0, 0.0);

    const interpolator = new TangentInterpolator(
      this.currentPose.heading - startHeading
    );
    interpolator.init(curve);

    return interpolator;
  }

  makeConstantInterpolator(): ConstantInterpolator {
    if (this.currentPose === null) {
      throw new PathContinuityViolationException();
    }

    const currentHeading = this.currentPose.heading;

    return new ConstantInterpolator(currentHeading);
  }

  makeLinearInterpolator(endHeading: number): LinearInterpolator {
    if (this.currentPose === null) {
      throw new PathContinuityViolationException();
    }
    const startHeading = this.currentPose.heading;

    return new LinearInterpolator(
      startHeading,
      normDelta(endHeading - startHeading)
    );
  }

  makeSplineInterpolator(endHeading: number): SplineInterpolator {
    if (this.currentPose === null && this.path !== null) {
      return new SplineInterpolator(
        this.path.get(this.s ?? 0).heading,
        endHeading,
        this.path.deriv(this.s ?? 0).heading,
        this.path.secondDeriv(this.s ?? 0).heading,
        undefined,
        undefined
      );
    } else {
      return new SplineInterpolator(this.currentPose?.heading ?? 0, endHeading);
    }
  }

  addSegment(segment: PathSegment): PathBuilder {
    if (this.segments.length > 0) {
      const lastSegment = this.segments[this.segments.length - 1];

      if (
        !(
          lastSegment.end().epsilonEqualsHeading(segment.start()) &&
          lastSegment.endDeriv().epsilonEquals(segment.startDeriv()) &&
          lastSegment
            .endSecondDeriv()
            .vec()
            .epsilonEquals(segment.startSecondDeriv().vec())
        )
      ) {
        throw new PathContinuityViolationException();
      }
    } else if (this.currentPose === null) {
      if (
        !(
          this.path?.get(this.s ?? 0).epsilonEqualsHeading(segment.start()) &&
          this.path.deriv(this.s ?? 0).epsilonEquals(segment.startDeriv()) &&
          this.path
            .secondDeriv(this.s ?? 0)
            .vec()
            .epsilonEquals(segment.startSecondDeriv().vec())
        )
      ) {
        throw new PathContinuityViolationException();
      }
    }

    this.currentPose = segment.end();
    this.currentTangent = segment.endTangentAngle();

    this.segments.push(segment);

    return this;
  }

  /**
   * Adds a line segment with tangent heading interpolation.
   *
   * @param endPosition end position
   */
  lineTo(endPosition: Vector2d): PathBuilder {
    const line = this.makeLine(endPosition);
    const interpolator = this.makeTangentInterpolator(line);

    this.addSegment(new PathSegment(line, interpolator));

    return this;
  }

  /**
   * Adds a line segment with constant heading interpolation.
   *
   * @param endPosition end position
   */
  lineToConstantHeading(endPosition: Vector2d) {
    return this.addSegment(
      new PathSegment(
        this.makeLine(endPosition),
        this.makeConstantInterpolator()
      )
    );
  }

  /**
   * Adds a strafe segment (i.e., a line segment with constant heading interpolation).
   *
   * @param endPosition end position
   */
  strafeTo(endPosition: Vector2d) {
    return this.lineToConstantHeading(endPosition);
  }

  /**
   * Adds a line segment with linear heading interpolation.
   *
   * @param endPose end pose
   */
  lineToLinearHeading(endPose: Pose2d) {
    return this.addSegment(
      new PathSegment(
        this.makeLine(endPose.vec()),
        this.makeLinearInterpolator(endPose.heading)
      )
    );
  }

  /**
   * Adds a line segment with spline heading interpolation.
   *
   * @param endPose end pose
   */
  lineToSplineHeading(endPose: Pose2d) {
    return this.addSegment(
      new PathSegment(
        this.makeLine(endPose.vec()),
        this.makeSplineInterpolator(endPose.heading)
      )
    );
  }

  /**
   * Adds a line straight forward.
   *
   * @param distance distance to travel forward
   */
  forward(distance: number): PathBuilder {
    const start =
      this.currentPose === null
        ? this.path?.get(this.s ?? 0)
        : this.currentPose;

    return this.lineTo(
      (start?.vec() ?? new Vector2d(0, 0)).plus(
        Vector2d.polar(distance, start?.heading ?? 0)
      )
    );
  }

  /**
   * Adds a line straight backward.
   *
   * @param distance distance to travel backward
   */
  back(distance: number): PathBuilder {
    this.forward(-distance);
    return this;
  }

  /**
   * Adds a segment that strafes left in the robot reference frame.
   *
   * @param distance distance to strafe left
   */
  strafeLeft(distance: number): PathBuilder {
    const start =
      this.currentPose === null
        ? this.path?.get(this.s ?? 0)
        : this.currentPose;

    return this.strafeTo(
      (start?.vec() ?? new Vector2d(0, 0)).plus(
        Vector2d.polar(distance, (start?.heading ?? 0) + Math.PI / 2)
      )
    );
  }

  /**
   * Adds a segment that strafes right in the robot reference frame.
   *
   * @param distance distance to strafe right
   */
  strafeRight(distance: number): PathBuilder {
    return this.strafeLeft(-distance);
  }

  /**
   * Adds a spline segment with tangent heading interpolation.
   *
   * @param endPosition end position
   * @param endTangent end tangent
   */
  splineTo(endPosition: Vector2d, endTangent: number): PathBuilder {
    const spline = this.makeSpline(endPosition, endTangent);
    const interpolator = this.makeTangentInterpolator(spline);

    return this.addSegment(new PathSegment(spline, interpolator));
  }

  /**
   * Adds a spline segment with constant heading interpolation.
   *
   * @param endPosition end position
   * @param endTangent end tangent
   */
  splineToConstantHeading(endPosition: Vector2d, endTangent: number) {
    return this.addSegment(
      new PathSegment(
        this.makeSpline(endPosition, endTangent),
        this.makeConstantInterpolator()
      )
    );
  }

  /**
   * Adds a spline segment with linear heading interpolation.
   *
   * @param endPose end pose
   * @param endTangent end tangent
   */
  splineToLinearHeading(endPose: Pose2d, endTangent: number) {
    return this.addSegment(
      new PathSegment(
        this.makeSpline(endPose.vec(), endTangent),
        this.makeLinearInterpolator(endPose.heading)
      )
    );
  }

  /**
   * Adds a spline segment with spline heading interpolation.
   *
   * @param endPose end pose
   * @param endTangent end tangent
   */
  splineToSplineHeading(endPose: Pose2d, endTangent: number) {
    return this.addSegment(
      new PathSegment(
        this.makeSpline(endPose.vec(), endTangent),
        this.makeSplineInterpolator(endPose.heading)
      )
    );
  }

  /**
   * Constructs the [Path] instance.
   */
  build(): Path {
    return new Path(this.segments);
  }
}
