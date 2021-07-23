import { Pose2d } from "roadrunnerjs/geometry";
import { TrajectoryAccelerationConstraint } from "./TrajectoryAccelerationConstraint";
/**
 * Composite constraint representing the minimum of its constituent acceleration constraints.
 */
export class MinAccelerationConstraint
  implements TrajectoryAccelerationConstraint
{
  constructor(
    private readonly constraints: TrajectoryAccelerationConstraint[]
  ) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d) {
    return Math.min(
      ...this.constraints.map((e) => e.get(s, pose, deriv, baseRobotVel))
    );
  }
}
