import { Pose2d } from "roadrunnerjs/geometry";
import { Kinematics, MecanumKinematics } from "roadrunnerjs/kinematics";
import { TrajectoryVelocityConstraint } from "./TrajectoryVelocityConstraint";
/**
 * Mecanum-specific drive constraints that also limit maximum wheel velocities.
 *
 * @param maxWheelVel maximum wheel velocity
 * @param trackWidth track width
 * @param wheelBase wheel base
 * @param lateralMultiplier lateral multiplier
 */
export class MecanumVelocityConstraint implements TrajectoryVelocityConstraint {
  constructor(
    private readonly maxWheelVel: number,
    private readonly trackWidth: number,
    private readonly wheelBase: number = trackWidth,
    private readonly lateralMultiplier: number = 1
  ) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): number {
    const wheel0 = MecanumKinematics.robotToWheelVelocities(
      baseRobotVel,
      this.trackWidth,
      this.wheelBase,
      this.lateralMultiplier
    );

    if (Math.max(...wheel0.map((e) => Math.abs(e))) >= this.maxWheelVel) {
      throw new Error("Unsatisfiable Constraint");
    }

    const robotDeriv = Kinematics.fieldToRobotVelocity(pose, deriv);

    const wheel = MecanumKinematics.robotToWheelVelocities(
      robotDeriv,
      this.trackWidth,
      this.wheelBase,
      this.lateralMultiplier
    );

    return Math.min(
      ...wheel0.map((e, i) => {
        return Math.max(
          (this.maxWheelVel - e) / wheel[i],
          (-this.maxWheelVel - e) / wheel[i]
        );
      })
    );
  }
}
