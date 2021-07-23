import { ParametricCurve } from "../ParametricCurve";

/**
 * Interpolator for specifying the heading for holonomic paths.
 */
export abstract class HeadingInterpolator {
  /**
   * Base parametric curve
   */
  protected curve!: ParametricCurve;

  /**
   * Initialize the interpolator with a [curve].
   *
   *  @param curve parametric curve
   */
  init(curve: ParametricCurve) {
    this.curve = curve;
  }

  /**
   * Returns the heading at the specified [s].
   */
  get(s: number, t: number = this.curve.reparam(s)) {
    return this.internalGet(s, t);
  }

  /**
   * Returns the heading derivative at the specified [s].
   */
  deriv(s: number, t: number = this.curve.reparam(s)) {
    return this.internalDeriv(s, t);
  }

  /**
   * Returns the heading second derivative at the specified [s].
   */
  secondDeriv(s: number, t: number = this.curve.reparam(s)) {
    return this.internalSecondDeriv(s, t);
  }

  /**
   * Returns the start heading.
   */
  start() {
    return this.get(0, 0);
  }

  /**
   * Returns the start heading derivative.
   */
  startDeriv() {
    return this.deriv(0, 0);
  }

  /**
   * Returns the start heading second derivative.
   */
  startSecondDeriv() {
    return this.secondDeriv(0, 0);
  }

  /**
   * Returns the end heading.
   */
  end() {
    return this.get(this.curve.length(), 1);
  }

  /**
   * Returns the end heading derivative.
   */
  endDeriv() {
    return this.deriv(this.curve.length(), 1);
  }

  /**
   * Returns the end heading second derivative.
   */
  endSecondDeriv() {
    return this.secondDeriv(this.curve.length(), 1);
  }

  abstract internalGet(s: number, t: number): number;
  abstract internalDeriv(s: number, t: number): number;
  abstract internalSecondDeriv(s: number, t: number): number;
}
