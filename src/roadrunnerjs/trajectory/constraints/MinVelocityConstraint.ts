import { Pose2d } from "roadrunnerjs/geometry";
import { TrajectoryVelocityConstraint } from "./TrajectoryVelocityConstraint";
/**
 * Composite constraint representing the minimum of its constituent velocity constraints.
 */
export class MinVelocityConstraint implements TrajectoryVelocityConstraint {
  constructor(private readonly constraints: TrajectoryVelocityConstraint[]) {}

  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d) {
    return Math.min(
      ...this.constraints.map((e) => e.get(s, pose, deriv, baseRobotVel))
    );
  }
}
