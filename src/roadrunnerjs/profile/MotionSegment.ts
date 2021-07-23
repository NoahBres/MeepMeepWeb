import { MotionState } from "./MotionState";

/**
 * Segment of a motion profile with constant acceleration.
 *
 * @param start start motion state
 * @param dt time delta
 */
export class MotionSegment {
  constructor(public readonly start: MotionState, public readonly dt: number) {}

  /**
   * Returns the [MotionState] at time [t].
   */
  get(t: number) {
    return this.start.get(t);
  }

  /**
   * Returns the [MotionState] at the end of the segment (time [dt]).
   */
  end() {
    return this.start.get(this.dt);
  }

  /**
   * Returns a reversed version of the segment. Note: it isn't possible to reverse a segment completely so this
   * method only guarantees that the start and end velocities will be swapped.
   */
  reversed(): MotionSegment {
    const end = this.end();
    const state = new MotionState(end.x, end.v, -end.a, end.j);
    return new MotionSegment(state, this.dt);
  }

  /**
   * Returns a flipped (negated) version of the segment.
   */
  flipped() {
    return new MotionSegment(this.start.flipped(), this.dt);
  }

  toString() {
    return `(${this.start}, ${this.dt})`;
  }
}
