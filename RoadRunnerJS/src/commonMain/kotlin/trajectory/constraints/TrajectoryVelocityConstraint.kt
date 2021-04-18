package trajectory.constraints

import geometry.Pose2d
import kotlin.js.JsExport

/**
 * Motion profile velocity constraint.
 */
@JsExport
open class TrajectoryVelocityConstraint {

    /**
     * Returns the maximum profile velocity.
     *
     * @param s path displacement
     * @param pose pose
     * @param deriv pose derivative
     * @param baseRobotVel additive base velocity
     */
    open operator fun get(s: Double, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): Double { return 0.0 }
}
