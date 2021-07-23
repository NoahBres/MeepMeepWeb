import { Pose2d } from "roadrunnerjs/geometry";
import { TrajectoryVelocityConstraint } from "./TrajectoryVelocityConstraint";
/**
 * Constraint limiting angular velocity.
 */
export class AngularVelocityConstraint implements TrajectoryVelocityConstraint {
  constructor(private readonly maxAngularVel: number) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): number {
    const omega0 = baseRobotVel.heading;
    if (Math.abs(omega0) >= this.maxAngularVel) {
      throw new Error("Unsatisfiable Constraint");
    }

    return Math.max(
      (this.maxAngularVel - omega0) / deriv.heading,
      (-this.maxAngularVel - omega0) / deriv.heading
    );
  }
}
