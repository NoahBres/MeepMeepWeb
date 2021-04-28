package trajectory.constraints

import geometry.Pose2d
import kotlin.js.JsExport

/**
 * Motion profile acceleration constraint.
 */
@JsExport
open class TrajectoryAccelerationConstraint {

    /**
     * Returns the maximum profile acceleration.
     *
     * @param s path displacement
     * @param pose pose
     * @param deriv pose derivative
     * @param baseRobotVel additive base velocity
     */
    open operator fun get(s: Double, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): Double { return 0.0 }
}
