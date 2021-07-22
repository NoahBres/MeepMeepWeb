import { lusolve } from "mathjs";

const COEFF_MATRIX = [
  [0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
  [0.0, 0.0, 0.0, 0.0, 1.0, 0.0],
  [0.0, 0.0, 0.0, 2.0, 0.0, 0.0],
  [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
  [5.0, 4.0, 3.0, 2.0, 1.0, 0.0],
  [20.0, 12.0, 6.0, 2.0, 0.0, 0.0],
];

/**
 * Quintic polynomial interpolated according to the provided derivatives.
 *
 * @param start start value
 * @param startDeriv start derivative
 * @param startSecondDeriv start second derivative
 * @param end end value
 * @param endDeriv end derivative
 * @param endSecondDeriv end second derivative
 */
export class QuinticPolynomial {
  private readonly a: number;
  private readonly b: number;
  private readonly c: number;
  private readonly d: number;
  private readonly e: number;
  private readonly f: number;

  constructor(
    start: number,
    startDeriv: number,
    startSecondDeriv: number,
    end: number,
    endDeriv: number,
    endSecondDeriv: number
  ) {
    const target = [
      start,
      startDeriv,
      startSecondDeriv,
      end,
      endDeriv,
      endSecondDeriv,
    ];

    const coeff = lusolve(COEFF_MATRIX, target) as number[][];

    this.a = coeff[0][0];
    this.b = coeff[1][0];
    this.c = coeff[2][0];
    this.d = coeff[3][0];
    this.e = coeff[4][0];
    this.f = coeff[5][0];
  }

  /**
   * Returns the value of the polynomial at [t].
   */
  get(t: number) {
    return (
      (this.a * t + this.b) * (t * t * t * t) +
      this.c * (t * t * t) +
      this.d * (t * t) +
      this.e * t +
      this.f
    );
  }

  /**
   * Returns the derivative of the polynomial at [t].
   */
  deriv(t: number) {
    return (
      (5 * this.a * t + 4 * this.b) * (t * t * t) +
      (3 * this.c * t + 2 * this.d) * t +
      this.e
    );
  }

  /**
   * Returns the second derivative of the polynomial at [t].
   */
  secondDeriv(t: number) {
    return (
      (20 * this.a * t + 12 * this.b) * (t * t) + 6 * this.c * t + 2 * this.d
    );
  }

  /**
   * Returns the third derivative of the polynomial at [t].
   */
  thirdDeriv(t: number) {
    return (60 * this.a * t + 24 * this.b) * t + 6 * this.c;
  }

  toString() {
    return `${this.a.toFixed(5)}*t^5+${this.b.toFixed(5)}*t^4+${this.c.toFixed(
      5
    )}*t^3+${this.d.toFixed(5)}*t^2+${this.e.toFixed(5)}*t+${this.d.toFixed(
      5
    )}`;
  }
}
