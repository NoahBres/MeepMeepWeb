import { epsilonEquals } from "roadrunnerjs/util";
import { NanoClock } from "roadrunnerjs/util";

import { PIDCoefficients } from "./PIDCoefficients";

type FeedForwardPosVelo = (position: number, velocity?: number) => number;

/**
 * PID controller with various feedforward components.
 *
 * https://github.com/acmerobotics/road-runner/blob/master/core/src/main/kotlin/com/acmerobotics/roadrunner/control/PIDFController.kt
 */
export default class PIDFController {
  private readonly pid: PIDCoefficients;
  private readonly kV: number;
  private readonly kA: number;
  private readonly kStatic: number;
  private readonly kF: FeedForwardPosVelo;
  private readonly clock: NanoClock;

  private errorSum = 0.0;
  private lastUpdateTimestamp: number | null = null;

  private inputBounded = false;
  private minInput = 0.0;
  private maxInput = 0.0;

  private outputBounded = false;
  private minOutput = 0.0;
  private maxOutput = 0.0;

  /**
   * Target position (that is, the controller setpoint).
   */
  targetPosition = 0.0;

  /**
   * Target velocity.
   */
  targetVelocity = 0.0;

  /**
   * Target acceleration.
   */
  targetAcceleration = 0.0;

  /**
   * Error computed in the last call to [update].
   */
  lastError = 0.0;

  constructor(
    pid: PIDCoefficients,
    kV: number = 0,
    kA: number = 0,
    kStatic: number = 0,
    kF: FeedForwardPosVelo = () => 0,
    clock: NanoClock = NanoClock.system()
  ) {
    this.pid = pid;
    this.kV = kV;
    this.kA = kA;
    this.kStatic = kStatic;
    this.kF = kF;
    this.clock = clock;
  }

  /**
   * Sets bound on the input of the controller. The min and max values are considered modularly-equivalent (that is,
   * the input wraps around).
   *
   * @param min minimum input
   * @param max maximum input
   */
  setInputBounds(min: number, max: number) {
    if (min < max) {
      this.inputBounded = true;
      this.minInput = min;
      this.maxInput = max;
    }
  }

  /**
   * Sets bounds on the output of the controller.
   *
   * @param min minimum output
   * @param max maximum output
   */
  setOutputBounds(min: number, max: number) {
    if (min < max) {
      this.outputBounded = true;
      this.minOutput = min;
      this.maxOutput = max;
    }
  }

  private getPositionError(measuredPosition: number): number {
    let error = this.targetPosition - measuredPosition;
    if (this.inputBounded) {
      const inputRange = this.maxInput - this.minInput;
      while (Math.abs(error) > inputRange / 2.0) {
        error -= Math.sign(error) * inputRange;
      }
    }
    return error;
  }

  /**
   * Run a single iteration of the controller.
   *
   * @param measuredPosition measured position (feedback)
   * @param measuredVelocity measured velocity
   */
  update(measuredPosition: number, measuredVelocity?: number): number {
    const currentTimestamp = this.clock.seconds();
    const error = this.getPositionError(measuredPosition);

    if (this.lastUpdateTimestamp === null) {
      this.lastError = error;
      this.lastUpdateTimestamp = currentTimestamp;

      return 0.0;
    } else {
      const dt = currentTimestamp - (this.lastUpdateTimestamp ?? 0);
      this.errorSum += 0.5 * (error + this.lastError) * dt;
      const errorDeriv = (error - this.lastError) / dt;

      this.lastError = error;
      this.lastUpdateTimestamp = currentTimestamp;

      const kDInput =
        measuredVelocity !== undefined
          ? this.targetVelocity - measuredVelocity
          : errorDeriv;

      // note: we'd like to refactor this with Kinematics.calculateMotorFeedforward() but kF complicates the
      // determination of the sign of kStatic
      const baseOutput =
        this.pid.kP * error +
        this.pid.kI * this.errorSum +
        this.pid.kD * kDInput +
        this.kV * this.targetVelocity +
        this.kA * this.targetAcceleration +
        this.kF(measuredPosition, measuredVelocity);
      const output = epsilonEquals(baseOutput, 0.0)
        ? 0.0
        : baseOutput + Math.sign(baseOutput) * this.kStatic;

      if (this.outputBounded) {
        return Math.max(this.minOutput, Math.min(output, this.maxOutput));
      } else {
        return output;
      }
    }
  }

  /**
   * Reset the controller's integral sum.
   */
  reset() {
    this.errorSum = 0.0;
    this.lastError = 0.0;
    this.lastUpdateTimestamp = null;
  }
}
