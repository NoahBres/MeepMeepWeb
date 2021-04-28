package trajectory.constraints

import geometry.Pose2d
import kinematics.Kinematics
import kinematics.MecanumKinematics
import kotlin.js.JsExport
import kotlin.math.abs
import kotlin.math.max

/**
 * Mecanum-specific drive constraints that also limit maximum wheel velocities.
 *
 * @param maxWheelVel maximum wheel velocity
 * @param trackWidth track width
 * @param wheelBase wheel base
 * @param lateralMultiplier lateral multiplier
 */
@JsExport
open class MecanumVelocityConstraint constructor(
    private val maxWheelVel: Double,
    private val trackWidth: Double,
    private val wheelBase: Double = trackWidth,
    private val lateralMultiplier: Double = 1.0
) : TrajectoryVelocityConstraint() {
    override fun get(s: Double, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): Double {
        val wheel0 = MecanumKinematics.robotToWheelVelocities(baseRobotVel, trackWidth, wheelBase, lateralMultiplier)
        if (wheel0.maxOf(::abs) >= maxWheelVel) {
            throw UnsatisfiableConstraint()
        }

        val robotDeriv = Kinematics.fieldToRobotVelocity(pose, deriv)

        val wheel = MecanumKinematics.robotToWheelVelocities(robotDeriv, trackWidth, wheelBase, lateralMultiplier)
        return wheel0.zip(wheel).minOf {
            max(
                (maxWheelVel - it.first) / it.second,
                (-maxWheelVel - it.first) / it.second
            )
        }
    }
}