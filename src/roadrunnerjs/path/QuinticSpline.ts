import { QuinticPolynomial } from "./QuinticPolynomial";
import { Vector2d } from "roadrunnerjs/geometry";
import { ParametricCurve } from "./ParametricCurve";
import { epsilonEquals } from "roadrunnerjs/util";

type KnotConstructor1 = {
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  d2x?: number;
  d2y?: number;
};

type KnotConstructor2 = {
  pos: Vector2d;
  deriv?: Vector2d;
  secondDeriv?: Vector2d;
};

/**
 * Class for representing the end points of interpolated quintic splines.
 *
 * @param x x position
 * @param y y position
 * @param dx x derivative
 * @param dy y derivative
 * @param d2x x second derivative
 * @param d2y y second derivative
 */
export class Knot {
  readonly x: number;
  readonly y: number;
  readonly dx: number;
  readonly dy: number;
  readonly d2x: number;
  readonly d2y: number;

  constructor(parameter: KnotConstructor1 | KnotConstructor2) {
    if ("x" in parameter) {
      this.x = parameter.x;
      this.y = parameter.y;
      this.dx = parameter.dx ?? 0;
      this.dy = parameter.dy ?? 0;
      this.d2x = parameter.d2x ?? 0;
      this.d2y = parameter.d2y ?? 0;
    } else {
      const derivVec = parameter.deriv ?? new Vector2d(0, 0);
      const secondDerivVec = parameter.secondDeriv ?? new Vector2d(0, 0);

      this.x = parameter.pos.x;
      this.y = parameter.pos.y;
      this.dx = derivVec.x;
      this.dy = derivVec.y;
      this.d2x = secondDerivVec.x;
      this.d2y = secondDerivVec.y;
    }
  }

  pos() {
    return new Vector2d(this.x, this.y);
  }

  deriv() {
    return new Vector2d(this.dx, this.dy);
  }

  secondDeriv() {
    return new Vector2d(this.d2x, this.d2y);
  }
}

/**
 * Combination of two quintic polynomials into a 2D quintic spline. See
 * [this short paper](https://github.com/acmerobotics/road-runner/blob/master/doc/pdf/Quintic_Splines_for_FTC.pdf) for
 * some motivation and implementation details.
 *
 * @param start start waypoint
 * @param end end waypoint
 * @param maxDeltaK maximum change in curvature between arc length param segments
 * @param maxSegmentLength maximum length of a single param segment
 * @param maxDepth maximum stack depth
 */
export class QuinticSpline extends ParametricCurve {
  /**
   * X polynomial (i.e., x(t))
   */
  private readonly x: QuinticPolynomial;

  /**
   * Y polynomial (i.e., y(t))
   */
  private readonly y: QuinticPolynomial;

  private _length = 0;
  private readonly sSamples: number[] = [];
  private readonly tSamples: number[] = [];

  constructor(
    start: Knot,
    end: Knot,
    private readonly maxDeltaK: number = 0.01,
    private readonly maxSegmentLength: number = 0.25,
    private readonly maxDepth: number = 30
  ) {
    super();

    this.x = new QuinticPolynomial(
      start.x,
      start.dx,
      start.d2x,
      end.x,
      end.dx,
      end.d2x
    );
    this.y = new QuinticPolynomial(
      start.y,
      start.dy,
      start.d2y,
      end.y,
      end.dy,
      end.d2y
    );

    this.parameterize(0, 1);
  }

  private approxLength(v1: Vector2d, v2: Vector2d, v3: Vector2d) {
    const w1 = v2.minus(v1).times(2.0);
    const w2 = v2.minus(v3).times(2.0);
    const det = w1.x * w2.y - w2.x * w1.y;
    const chord = v1.distTo(v3);

    if (epsilonEquals(det, 0.0)) {
      return chord;
    } else {
      const x1 = v1.x * v1.x + v1.y * v1.y;
      const x2 = v2.x * v2.x + v2.y * v2.y;
      const x3 = v3.x * v3.x + v3.y * v3.y;

      const y1 = x2 - x1;
      const y2 = x2 - x3;

      const origin = new Vector2d(
        y1 * w2.y - y2 * w1.y,
        y2 * w1.x - y1 * w2.x
      ).div(det);
      const radius = origin.distTo(v1);
      return 2.0 * radius * Math.asin(chord / (2.0 * radius));
    }
  }

  private internalCurvature(t: number) {
    const deriv = this.internalDeriv(t);
    const derivNorm = deriv.norm();
    const secondDeriv = this.internalSecondDeriv(t);
    return (
      Math.abs(secondDeriv.x * deriv.y - deriv.x * secondDeriv.y) /
      (derivNorm * derivNorm * derivNorm)
    );
  }

  private parameterize(
    tLo: number,
    tHi: number,
    vLo: Vector2d = this.internalGet(tLo),
    vHi: Vector2d = this.internalGet(tHi),
    depth: number = 0
  ) {
    const tMid = 0.5 * (tLo + tHi);
    const vMid = this.internalGet(tMid);

    const deltaK = Math.abs(
      this.internalCurvature(tLo) - this.internalCurvature(tHi)
    );
    const segmentLength = this.approxLength(vLo, vMid, vHi);

    if (
      depth < this.maxDepth &&
      (deltaK > this.maxDeltaK || segmentLength > this.maxSegmentLength)
    ) {
      this.parameterize(tLo, tMid, vLo, vMid, depth + 1);
      this.parameterize(tMid, tHi, vMid, vHi, depth + 1);
    } else {
      this._length += segmentLength;
      this.sSamples.push(this._length);
      this.tSamples.push(tHi);
    }
  }

  internalGet(t: number) {
    return new Vector2d(this.x.get(t), this.y.get(t));
  }

  internalDeriv(t: number) {
    return new Vector2d(this.x.deriv(t), this.y.deriv(t));
  }

  internalSecondDeriv(t: number) {
    return new Vector2d(this.x.secondDeriv(t), this.y.secondDeriv(t));
  }

  internalThirdDeriv(t: number) {
    return new Vector2d(this.x.thirdDeriv(t), this.y.thirdDeriv(t));
  }

  interp(s: number, sLo: number, sHi: number, tLo: number, tHi: number) {
    return tLo + ((s - sLo) * (tHi - tLo)) / (sHi - sLo);
  }

  reparam(s: number): number {
    if (s <= 0.0) return 0.0;
    if (s >= this._length) return 1.0;

    var lo = 0;
    var hi = this.sSamples.length;

    while (lo <= hi) {
      const mid = (hi + lo) / 2;

      if (s < this.sSamples[mid]) {
        hi = mid - 1;
      } else if (s > this.sSamples[mid]) {
        lo = mid + 1;
      } else {
        return this.tSamples[mid];
      }
    }

    return this.interp(
      s,
      this.sSamples[lo],
      this.sSamples[hi],
      this.tSamples[lo],
      this.tSamples[hi]
    );
  }

  paramDeriv(t: number): number {
    const deriv = this.internalDeriv(t);
    return 1.0 / Math.sqrt(deriv.x * deriv.x + deriv.y * deriv.y);
  }

  paramSecondDeriv(t: number): number {
    const deriv = this.internalDeriv(t);
    const secondDeriv = this.internalSecondDeriv(t);
    const numerator = -(deriv.x * secondDeriv.x + deriv.y * secondDeriv.y);
    const denominator = deriv.x * deriv.x + deriv.y * deriv.y;
    return numerator / (denominator * denominator);
  }

  paramThirdDeriv(t: number): number {
    const deriv = this.internalDeriv(t);
    const secondDeriv = this.internalSecondDeriv(t);
    const thirdDeriv = this.internalThirdDeriv(t);

    const firstNumeratorSqrt =
      2.0 * (deriv.x * secondDeriv.x + deriv.y * secondDeriv.y);
    const secondNumerator =
      secondDeriv.x * secondDeriv.x +
      secondDeriv.y * secondDeriv.y +
      deriv.x * thirdDeriv.x +
      deriv.y * thirdDeriv.y;

    const denominator = deriv.x * deriv.x + deriv.y * deriv.y;
    return (
      (firstNumeratorSqrt * firstNumeratorSqrt) / Math.pow(denominator, 3.5) -
      secondNumerator / Math.pow(denominator, 2.5)
    );
  }

  length() {
    return this._length;
  }

  toString() {
    return `(${this.x},${this.y})`;
  }
}
