package trajectory.constraints

import geometry.Pose2d
import kotlin.js.JsExport

/**
 * Composite constraint representing the minimum of its constituent velocity constraints.
 */
@JsExport
class MinVelocityConstraint(
    private val constraints: Array<TrajectoryVelocityConstraint>
) : TrajectoryVelocityConstraint() {
    override fun get(s: Double, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d) =
        constraints.minOf { it[s, pose, deriv, baseRobotVel] }
}