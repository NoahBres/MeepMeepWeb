/**
 * Kinematic state of a motion profile at any given time.
 */
export class MotionState {
  constructor(
    public readonly x: number,
    public readonly v: number,
    public readonly a: number = 0,
    public readonly j: number = 0
  ) {}

  /**
   * Returns the [MotionState] at time [t].
   */
  get(t: number) {
    return new MotionState(
      this.x + this.v * t + (this.a / 2) * t * t + (this.j / 6) * t * t * t,
      this.v + this.a * t + (this.j / 2) * t * t,
      this.a + this.j * t,
      this.j
    );
  }

  /**
   * Returns a flipped (negated) version of the state.
   */
  flipped() {
    return new MotionState(-this.x, -this.v, -this.a, -this.j);
  }

  toString() {
    return `(x=${this.x.toFixed(3)}, v=${this.v.toFixed(3)}, a=${this.a.toFixed(
      3
    )}, j=${this.j.toFixed(3)})`;
  }

  zeroPosition() {
    return new MotionState(0, this.v, this.a, this.j);
  }
}
