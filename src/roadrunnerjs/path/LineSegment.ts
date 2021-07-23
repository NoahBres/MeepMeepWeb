import { Vector2d } from "roadrunnerjs/geometry";
import { ParametricCurve } from "./ParametricCurve";

/**
 * Parametric representation of a line.
 *
 * @param start start vector
 * @param end end vector
 */
export class LineSegment extends ParametricCurve {
  private readonly diff: Vector2d;

  constructor(
    private readonly startVec: Vector2d,
    private readonly endVec: Vector2d
  ) {
    super();

    this.diff = endVec.minus(startVec);
  }

  length() {
    return this.diff.norm();
  }

  internalGet(t: number) {
    return this.startVec.plus(this.diff.times(t));
  }

  internalDeriv(t: number) {
    return this.diff;
  }

  internalSecondDeriv(t: number) {
    return new Vector2d(0.0, 0.0);
  }

  internalThirdDeriv(t: number) {
    return new Vector2d(0.0, 0.0);
  }

  reparam(s: number) {
    return s / this.length();
  }

  paramDeriv(t: number) {
    return 1.0 / this.length();
  }

  paramSecondDeriv(t: number) {
    return 0.0;
  }

  paramThirdDeriv(t: number) {
    return 0.0;
  }

  toString() {
    return `(${this.startVec.x}+${this.diff.x}*t,${this.startVec.y}+${this.diff.y}*t)`;
  }
}
