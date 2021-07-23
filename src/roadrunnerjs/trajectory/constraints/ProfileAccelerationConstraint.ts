import { Pose2d } from "roadrunnerjs/geometry";
import { TrajectoryAccelerationConstraint } from "./TrajectoryAccelerationConstraint";
/**
 * Constraint limiting profile acceleration.
 */
export class ProfileAccelerationConstraint
  implements TrajectoryAccelerationConstraint
{
  constructor(private readonly maxProfileAccel: number) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d) {
    return this.maxProfileAccel;
  }
}
