import { norm, normDelta } from "roadrunnerjs/util";

import { ParametricCurve } from "../ParametricCurve";
import { QuinticPolynomial } from "../QuinticPolynomial";
import { HeadingInterpolator } from "./HeadingInterpolator";
import { TangentInterpolator } from "./TangentInterpolator";

/**
 * Spline heading interpolator for transitioning smoothly between headings without violating continuity (and hence
 * allowing for integration into longer profiles).
 *
 * @param startHeading start heading
 * @param endHeading end heading
 * @param startHeadingDeriv start heading deriv (advanced)
 * @param startHeadingSecondDeriv start heading second deriv (advanced)
 * @param endHeadingDeriv start heading deriv (advanced)
 * @param endHeadingSecondDeriv start heading second deriv (advanced)
 */
export class SplineInterpolator extends HeadingInterpolator {
  private readonly tangentInterpolator = new TangentInterpolator();
  private headingSpline!: QuinticPolynomial;

  constructor(
    private readonly startHeading: number,
    private readonly endHeading: number,
    private readonly startHeadingDeriv?: number,
    private readonly startHeadingSecondDeriv?: number,
    private readonly endHeadingDeriv?: number,
    private readonly endHeadingSecondDeriv?: number
  ) {
    super();
  }

  init(curve: ParametricCurve) {
    super.init(curve);

    this.tangentInterpolator.init(this.curve);

    const len = this.curve.length();

    const headingDelta = normDelta(this.endHeading - this.startHeading);

    this.headingSpline = new QuinticPolynomial(
      0,
      (this.startHeadingDeriv ?? this.curve.tangentAngleDeriv(0, 0)) * len,
      (this.startHeadingSecondDeriv ??
        this.curve.tangentAngleSecondDeriv(0, 0)) *
        len *
        len,
      headingDelta,
      (this.endHeadingDeriv ?? this.curve.tangentAngleDeriv(len, 0)) * len,
      (this.endHeadingSecondDeriv ??
        this.curve.tangentAngleSecondDeriv(len, 0)) *
        len *
        len
    );
  }

  internalGet(s: number, t: number) {
    return norm(
      this.startHeading + this.headingSpline.get(s / this.curve.length())
    );
  }

  internalDeriv(s: number, t: number) {
    const len = this.curve.length();
    return this.headingSpline.deriv(s / len) / len;
  }

  internalSecondDeriv(s: number, t: number) {
    const len = this.curve.length();
    return this.headingSpline.secondDeriv(s / len) / (len * len);
  }
}
