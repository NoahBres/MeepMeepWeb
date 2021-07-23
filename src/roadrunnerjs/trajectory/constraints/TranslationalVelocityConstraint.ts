import { Pose2d } from "roadrunnerjs/geometry";
import { Kinematics } from "roadrunnerjs/kinematics";
import { TrajectoryVelocityConstraint } from "./TrajectoryVelocityConstraint";

/**
 * Constraint limiting translational velocity.
 */
export class TranslationalVelocityConstraint
  implements TrajectoryVelocityConstraint
{
  constructor(private readonly maxTranslationalVel: number) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): number {
    const v0 = baseRobotVel.vec().norm();
    if (v0 >= this.maxTranslationalVel) {
      throw new Error("Unsatisfiable Constraint");
    }

    const robotDeriv = Kinematics.fieldToRobotVelocity(pose, deriv);
    const b = baseRobotVel.vec().dot(robotDeriv.vec());
    return (
      Math.sqrt(
        b * b - v0 * v0 + this.maxTranslationalVel * this.maxTranslationalVel
      ) - b
    );
  }
}
