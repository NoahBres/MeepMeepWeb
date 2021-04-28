package trajectory.constraints

import geometry.Pose2d
import kotlin.js.JsExport

/**
 * Constraint limiting profile acceleration.
 */
@JsExport
class ProfileAccelerationConstraint(
    private val maxProfileAccel: Double
) : TrajectoryAccelerationConstraint() {
    override fun get(s: Double, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d) = maxProfileAccel
}