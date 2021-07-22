import { norm } from "roadrunnerjs/util";
import { HeadingInterpolator } from "./HeadingInterpolator";

export class TangentInterpolator extends HeadingInterpolator {
  constructor(private readonly offset: number = 0) {
    super();
  }

  internalGet(s: number, t: number) {
    return norm(this.offset + this.curve.tangentAngle(s, t));
  }

  internalDeriv(s: number, t: number) {
    return this.curve.tangentAngleDeriv(s, t);
  }

  internalSecondDeriv(s: number, t: number) {
    return this.curve.tangentAngleSecondDeriv(s, t);
  }
}
