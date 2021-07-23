import { Pose2d } from "roadrunnerjs/geometry";

/**
 * Motion profile velocity constraint.
 */
export interface TrajectoryVelocityConstraint {
  /**
   * Returns the maximum profile velocity.
   *
   * @param s path displacement
   * @param pose pose
   * @param deriv pose derivative
   * @param baseRobotVel additive base velocity
   */
  get(s: number, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): number;
}
