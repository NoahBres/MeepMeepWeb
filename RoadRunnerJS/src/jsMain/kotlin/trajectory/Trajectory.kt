package trajectory

import geometry.Pose2d
import path.Path
import profile.MotionProfile
import kotlin.js.JsExport

/**
 * Trajectory backed by a [Path] and a [MotionProfile].
 *
 * @param path path
 * @param profile motion profile
 */
@JsExport
class Trajectory constructor(
    val path: Path,
    val profile: MotionProfile,
    val markers: Array<TrajectoryMarker> = emptyArray()
) {
    fun duration() = profile.duration()

    operator fun get(time: Double) = path[profile[time].x]

    fun velocity(time: Double): Pose2d {
        val motionState = profile[time]
        return path.deriv(motionState.x) * motionState.v
    }

    fun acceleration(time: Double): Pose2d {
        val motionState = profile[time]
        return path.secondDeriv(motionState.x) * motionState.v * motionState.v +
            path.deriv(motionState.x) * motionState.a
    }

    fun start() = path[0.0, 0.0]

    fun end() = path[path.length(), 1.0]
}
