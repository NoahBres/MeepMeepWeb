import { Path } from "roadrunnerjs/path";
import { MotionProfile } from "roadrunnerjs/profile/MotionProfile";
import { TrajectoryMarker } from "./TrajectoryMarker";

/**
 * Trajectory backed by a [Path] and a [MotionProfile].
 *
 * @param path path
 * @param profile motion profile
 */
export class Trajectory {
  constructor(
    readonly path: Path,
    readonly profile: MotionProfile,
    readonly markers: TrajectoryMarker[] = []
  ) {}

  duration() {
    return this.profile.duration();
  }

  get(time: number) {
    return this.path.get(this.profile.get(time).x);
  }

  velocity(time: number) {
    const motionState = this.profile.get(time);

    return this.path.deriv(motionState.x).times(motionState.v);
  }

  acceleration(time: number) {
    const motionState = this.profile.get(time);

    return this.path
      .secondDeriv(motionState.x)
      .times(motionState.v)
      .times(motionState.v)
      .plus(this.path.deriv(motionState.x).times(motionState.a));
  }

  start() {
    return this.path.get(0, 0);
  }

  end() {
    return this.path.get(this.path.length(), 1);
  }
}
