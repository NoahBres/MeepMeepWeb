import { epsilonEquals } from "roadrunnerjs/util";
import { MotionProfile } from "./MotionProfile";
import { MotionSegment } from "./MotionSegment";
import { MotionState } from "./MotionState";
/**
 * Easy-to-use builder for creating motion profiles.
 *
 * @param start start motion state
 */
export class MotionProfileBuilder {
  private currentState: MotionState;
  private readonly segments: MotionSegment[] = [];

  constructor(start: MotionState) {
    this.currentState = start;
  }

  /**
   * Appends a constant-jerk control for the provided duration.
   */
  appendJerkControl(jerk: number, dt: number): MotionProfileBuilder {
    const segment = new MotionSegment(
      new MotionState(
        this.currentState.x,
        this.currentState.v,
        this.currentState.a,
        jerk
      ),
      dt
    );
    this.segments.push(segment);

    this.currentState = segment.end();

    return this;
  }

  /**
   * Appends a constant-acceleration control for the provided duration.
   */
  appendAccelerationControl(accel: number, dt: number): MotionProfileBuilder {
    const segment = new MotionSegment(
      new MotionState(this.currentState.x, this.currentState.v, accel),
      dt
    );
    this.segments.push(segment);

    this.currentState = segment.end();
    return this;
  }

  /**
   * Appends a [MotionProfile] to the current queue of control actions.
   */
  appendProfile(profile: MotionProfile): MotionProfileBuilder {
    for (const segment of profile.segments) {
      if (epsilonEquals(segment.start.j, 0)) {
        // constant acceleration
        this.appendAccelerationControl(segment.start.a, segment.dt);
      } else {
        // constant jerk
        this.appendJerkControl(segment.start.j, segment.dt);
      }
    }

    return this;
  }

  /**
   * Constructs and returns the [MotionProfile] instance.
   */
  build() {
    return new MotionProfile(this.segments);
  }
}
