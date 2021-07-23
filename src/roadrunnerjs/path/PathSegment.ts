import { Pose2d } from "roadrunnerjs/geometry";
import { HeadingInterpolator, TangentInterpolator } from "./heading";
import { ParametricCurve } from "./ParametricCurve";

/**
 * Path segment composed of a parametric curve and heading interpolator.
 *
 * @param curve parametric curve
 * @param interpolator heading interpolator
 */
export class PathSegment {
  constructor(
    readonly curve: ParametricCurve,
    readonly interpolator: HeadingInterpolator = new TangentInterpolator()
  ) {
    interpolator.init(curve);
  }

  length() {
    return this.curve.length();
  }

  get(s: number, t: number = this.reparam(s)) {
    return new Pose2d({
      pos: this.curve.get(s, t),
      heading: this.interpolator.get(s, t),
    });
  }

  deriv(s: number, t: number = this.reparam(s)) {
    return new Pose2d({
      pos: this.curve.deriv(s, t),
      heading: this.interpolator.deriv(s, t),
    });
  }

  secondDeriv(s: number, t: number = this.reparam(s)) {
    return new Pose2d({
      pos: this.curve.secondDeriv(s, t),
      heading: this.interpolator.secondDeriv(s, t),
    });
  }

  tangentAngle(s: number, t: number = this.reparam(s)) {
    return this.curve.tangentAngle(s, t);
  }

  internalDeriv(s: number, t: number = this.reparam(s)) {
    return new Pose2d({
      pos: this.curve.internalDeriv(t),
      heading: this.interpolator.internalDeriv(s, t),
    });
  }

  internalSecondDeriv(s: number, t: number = this.reparam(s)) {
    return new Pose2d({
      pos: this.curve.internalSecondDeriv(t),
      heading: this.interpolator.internalDeriv(s, t),
    });
  }

  reparam(s: number) {
    return this.curve.reparam(s);
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
   * Returns the start tangent angle.
   */
  startTangentAngle() {
    return this.tangentAngle(0.0);
  }

  startInternalDeriv() {
    return this.internalDeriv(0.0);
  }

  startInternalSecondDeriv() {
    return this.internalSecondDeriv(0.0);
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

  /**
   * Returns the end tangent angle.
   */
  endTangentAngle() {
    return this.tangentAngle(this.length());
  }
  endInternalDeriv() {
    return this.internalDeriv(this.length());
  }

  endInternalSecondDeriv() {
    return this.internalSecondDeriv(this.length());
  }
}
