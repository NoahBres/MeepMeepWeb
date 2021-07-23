import { Vector2d } from "roadrunnerjs/geometry";

/**
 * Parametric curve with two components (x and y). These curves are reparameterized from an internal parameter (t) to
 * the arc length parameter (s).
 */
export abstract class ParametricCurve {
  /**
   * Returns the vector [s] units along the curve.
   */
  get(s: number, t: number = this.reparam(s)) {
    return this.internalGet(t);
  }

  /**
   * Returns the derivative [s] units along the curve.
   */
  deriv(s: number, t: number = this.reparam(s)) {
    return this.internalDeriv(t).times(this.paramDeriv(t));
  }

  /**
   * Returns the second derivative [s] units along the curve.
   */
  secondDeriv(s: number, t: number = this.reparam(s)) {
    const deriv = this.internalDeriv(t);
    const secondDeriv = this.internalSecondDeriv(t);

    const paramDeriv = this.paramDeriv(t);
    const paramSecondDeriv = this.paramSecondDeriv(t);

    return secondDeriv
      .times(paramDeriv)
      .times(paramDeriv)
      .plus(deriv.times(paramSecondDeriv).times(paramDeriv));
  }

  /**
   * Returns the third derivative [s] units along the curve.
   */
  thirdDeriv(s: number, t: number = this.reparam(s)) {
    const deriv = this.internalDeriv(t);
    const secondDeriv = this.internalSecondDeriv(t);
    const thirdDeriv = this.internalThirdDeriv(t);

    const paramDeriv = this.paramDeriv(t);
    const paramSecondDeriv = this.paramSecondDeriv(t);
    const paramThirdDeriv = this.paramThirdDeriv(t);

    return thirdDeriv
      .times(paramDeriv)
      .times(paramDeriv)
      .times(paramDeriv)
      .plus(secondDeriv.times(paramSecondDeriv).times(paramDeriv).times(3.0))
      .plus(deriv.times(paramThirdDeriv));
  }

  /**
   * Returns the start vector.
   */
  start() {
    return this.get(0, 0);
  }

  /**
   * Returns the start derivative.
   */
  startDeriv() {
    return this.deriv(0, 0);
  }

  /**
   * Returns the start second derivative.
   */
  startSecondDeriv() {
    return this.secondDeriv(0, 0);
  }

  /**
   * Returns the start third derivative.
   */
  startThirdDeriv() {
    return this.thirdDeriv(0, 0);
  }

  /**
   * Returns the end vector.
   */
  end() {
    return this.get(this.length(), 1);
  }

  /**
   * Returns the end derivative.
   */
  endDeriv() {
    return this.deriv(this.length(), 1);
  }

  /**
   * Returns the end second derivative.
   */
  endSecondDeriv() {
    return this.secondDeriv(this.length(), 1);
  }

  /**
   * Returns the end third derivative.
   */
  endThirdDeriv() {
    return this.thirdDeriv(this.length(), 1);
  }

  /**
   * Returns the angle of the tangent line [s] units along the curve.
   */
  tangentAngle(s: number, t: number = this.reparam(s)) {
    return this.deriv(s, t).angle();
  }

  /**
   * Returns the derivative of the tangent angle [s] units along the curve.
   */
  tangentAngleDeriv(s: number, t: number = this.reparam(s)) {
    const deriv = this.deriv(s, t);
    const secondDeriv = this.secondDeriv(s, t);

    return deriv.x * secondDeriv.y - deriv.y * secondDeriv.x;
  }

  /**
   * Returns the second derivative of the tangent angle [s] units along the curve.
   */
  tangentAngleSecondDeriv(s: number, t: number = this.reparam(s)) {
    const deriv = this.deriv(s, t);
    const thirdDeriv = this.thirdDeriv(s, t);

    return deriv.x * thirdDeriv.y - deriv.y * thirdDeriv.x;
  }

  /**
   * Returns the length of the curve.
   */
  abstract length(): number;

  abstract reparam(s: number): number;

  abstract internalGet(t: number): Vector2d;
  abstract internalDeriv(t: number): Vector2d;
  abstract internalSecondDeriv(t: number): Vector2d;
  abstract internalThirdDeriv(t: number): Vector2d;

  abstract paramDeriv(t: number): number;
  abstract paramSecondDeriv(t: number): number;
  abstract paramThirdDeriv(t: number): number;
}
