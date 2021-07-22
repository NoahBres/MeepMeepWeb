import { norm } from "roadrunnerjs/util";
import { HeadingInterpolator } from "./HeadingInterpolator";

/**
 * Constant heading interpolator used for arbitrary holonomic translations.
 *
 * @param heading heading to maintain
 */
export class ConstantInterpolator extends HeadingInterpolator {
  constructor(private readonly heading: number) {
    super();
  }

  internalGet(s: number, t: number) {
    return norm(this.heading);
  }

  internalDeriv(s: number, t: number) {
    return 0;
  }

  internalSecondDeriv(s: number, t: number) {
    return 0;
  }
}
