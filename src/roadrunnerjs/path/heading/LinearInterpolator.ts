import { norm } from "roadrunnerjs/util";
import { HeadingInterpolator } from "./HeadingInterpolator";

/**
 * Linear heading interpolator for time-optimal transitions between poses.
 *
 * @param startHeading start heading
 * @param angle angle to sweep through (can be greater than a revolution)
 */
class LinearInterpolator extends HeadingInterpolator {
  constructor(
    private readonly startHeading: number,
    private readonly angle: number
  ) {
    super();
  }

  internalGet(s: number, t: number): number {
    return norm(this.startHeading + (s / this.curve.length()) * this.angle);
  }

  internalDeriv(s: number, t: number) {
    return this.angle / this.curve.length();
  }

  internalSecondDeriv(s: number, t: number) {
    return 0;
  }
}
