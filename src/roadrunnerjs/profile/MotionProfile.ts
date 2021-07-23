import { MotionState } from "./MotionState";
import { MotionSegment } from "./MotionSegment";
import { MotionProfileBuilder } from "./MotionProfileBuilder";

/**
 * Trapezoidal motion profile composed of motion segments.
 *
 * @param segments profile motion segments
 */
export class MotionProfile {
  constructor(public readonly segments: MotionSegment[]) {}

  /**
   * Returns the [MotionState] at time [t].
   */
  get(t: number): MotionState {
    let remainingTime = Math.max(0, Math.min(t, this.duration()));

    for (const segment of this.segments) {
      if (remainingTime <= segment.dt) return segment.get(remainingTime);

      remainingTime -= segment.dt;
    }

    if (this.segments.length === 0) return new MotionState(0, 0);

    return this.segments[this.segments.length - 1].end();
  }

  /**
   * Returns the duration of the motion profile.
   */
  duration() {
    return this.segments.reduce((acc, curr) => acc + curr.dt, 0);
  }

  /**
   * Returns a reversed version of the motion profile.
   */
  reversed() {
    const segments = [...this.segments.map((segment) => segment.reversed())];
    segments.reverse();

    return new MotionProfile(segments);
  }

  /**
   * Returns a flipped version of the motion profile.
   */
  flipped() {
    return new MotionProfile(this.segments.map((segment) => segment.flipped()));
  }

  /**
   * Returns the start [MotionState].
   */
  start() {
    return this.get(0);
  }

  /**
   * Returns the end [MotionState].
   */
  end() {
    return this.get(this.duration());
  }

  /**
   * Returns a new motion profile with [other] concatenated.
   */
  plus(other: MotionProfile) {
    const builder = new MotionProfileBuilder(this.start());
    builder.appendProfile(this);
    builder.appendProfile(other);
    return builder.build();
  }
}
