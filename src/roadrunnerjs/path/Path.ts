import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { DoubleProgression, epsilonEquals } from "roadrunnerjs/util";
import { PathSegment } from "./PathSegment";

/**
 * Path composed of a list of parametric curves and heading interpolators.
 *
 * @param segments list of path segments
 */
export class Path {
  readonly segments: PathSegment[];

  constructor(segments: PathSegment[] | PathSegment) {
    if (Array.isArray(segments)) {
      this.segments = segments;
    } else {
      this.segments = [segments];
    }
  }

  /**
   * Returns the length of the path.
   */
  length() {
    return this.segments.reduce((acc, segment) => acc + segment.length(), 0);
  }

  segment(s: number): [PathSegment, number] {
    if (s <= 0) {
      return [this.segments[0], 0];
    }

    let remainingDisplacement = s;
    this.segments.forEach((segment) => {
      if (remainingDisplacement <= segment.length()) {
        return [segment, remainingDisplacement];
      }

      remainingDisplacement -= segment.length();
    });

    return [
      this.segments[this.segments.length - 1],
      s - this.segments[this.segments.length - 1].length(),
    ];
  }

  /**
   * Returns the pose [s] units along the path.
   */
  get(s: number, t: number = this.reparam(s)): Pose2d {
    const [segment, remainingDisplacement] = this.segment(s);
    return segment.get(remainingDisplacement, t);
  }

  /**
   * Returns the pose derivative [s] units along the path.
   */
  deriv(s: number, t: number = this.reparam(s)): Pose2d {
    const [segment, remainingDisplacement] = this.segment(s);
    return segment.deriv(remainingDisplacement, t);
  }

  /**
   * Returns the pose second derivative [s] units along the path.
   */
  secondDeriv(s: number, t: number = this.reparam(s)): Pose2d {
    const [segment, remainingDisplacement] = this.segment(s);
    return segment.secondDeriv(remainingDisplacement, t);
  }

  internalDeriv(s: number, t: number = this.reparam(s)): Pose2d {
    const [segment, remainingDisplacement] = this.segment(s);
    return segment.internalDeriv(remainingDisplacement, t);
  }

  internalSecondDeriv(s: number, t: number = this.reparam(s)): Pose2d {
    const [segment, remainingDisplacement] = this.segment(s);
    return segment.internalSecondDeriv(remainingDisplacement, t);
  }

  reparam(s: number) {
    const [segment, remainingDisplacement] = this.segment(s);
    return segment.reparam(remainingDisplacement);
  }

  /**
   * Project [queryPoint] onto the current path using the iterative method described
   * [here](http://www.geometrie.tugraz.at/wallner/sproj.pdf).
   *
   * @param queryPoint query queryPoint
   * @param projectGuess guess for the projected queryPoint's s along the path
   */
  fastProject(
    queryPoint: Vector2d,
    projectGuess: number = this.length() / 2.0
  ): number {
    // we use the first-order method (since we already compute the arc length param
    let s = projectGuess;

    for (let i = 0; i < 200; i++) {
      const t = this.reparam(s);
      const pathPoint = this.get(s, t).vec();
      const deriv = this.deriv(s, t).vec();

      const ds = queryPoint.minus(pathPoint).dot(deriv);

      if (epsilonEquals(ds, 0.0)) {
        break;
      }

      s += ds;

      if (s <= 0.0) {
        break;
      }

      if (s >= this.length()) {
        break;
      }
    }

    return Math.max(0.0, Math.min(s, this.length()));
  }

  /**
   * Project [queryPoint] onto the current path by applying [fastProject] with various
   * guesses along the path.
   *
   * @param queryPoint query queryPoint
   * @param ds spacing between guesses
   */
  project(queryPoint: Vector2d, ds: number = 0.25): number {
    const samples = Math.round(this.length() / ds);

    const guesses = DoubleProgression.fromClosedInterval(
      0.0,
      this.length(),
      samples
    );

    const results = guesses.map((guess) => this.fastProject(queryPoint, guess));

    if (results.length === 0) return 0;
    else
      return Math.min(
        ...results.map((e) => this.get(e).vec().distTo(queryPoint))
      );
  }

  /**
   * Returns the start pose.
   */
  start() {
    return this.get(0.0);
  }

  /**
   * Returns the start pose derivative.
   */
  startDeriv() {
    return this.deriv(0.0);
  }

  /**
   * Returns the start pose second derivative.
   */
  startSecondDeriv() {
    return this.secondDeriv(0.0);
  }

  /**
   * Returns the end pose.
   */
  end() {
    return this.get(this.length());
  }
  /**
   * Returns the end pose derivative.
   */
  endDeriv() {
    return this.deriv(this.length());
  }
  /**
   * Returns the end pose second derivative.
   */
  endSecondDeriv() {
    return this.secondDeriv(this.length());
  }
}
