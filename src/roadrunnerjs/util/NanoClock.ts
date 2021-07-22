/**
 * Clock interface with nanosecond precision and no guarantee about its origin (that is, this is only suited for
 * measuring relative/elapsed time).
 *
 * https://github.com/acmerobotics/road-runner/blob/master/core/src/main/kotlin/com/acmerobotics/roadrunner/util/NanoClock.kt
 */
export abstract class NanoClock {
  /**
   * Returns a [NanoClock] backed by [Date.now].
   */
  static system() {
    return new SystemClock();
  }

  /**
   * Returns the number of seconds since an arbitrary (yet consistent) origin.
   */
  abstract seconds(): number;
}

class SystemClock extends NanoClock {
  seconds() {
    return Date.now() / 1000;
  }
}
