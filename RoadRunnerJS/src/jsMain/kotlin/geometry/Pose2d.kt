package geometry

import util.Angle
import util.epsilonEquals
import kotlin.js.JsExport
import kotlin.js.JsName

import kotlin.math.cos
import kotlin.math.sin
import kotlin.math.PI

@JsExport
data class Pose2d constructor(
    val x: Double = 0.0,
    val y: Double = 0.0,
    val heading: Double = 0.0
) {
    fun vec() = Vector2d(x, y)

    fun headingVec() = Vector2d(cos(heading), sin(heading))

    operator fun plus(other: Pose2d) =
        Pose2d(x + other.x, y + other.y, heading + other.heading)

    operator fun minus(other: Pose2d) =
        Pose2d(x - other.x, y - other.y, heading - other.heading)

    operator fun times(scalar: Double) =
        Pose2d(scalar * x, scalar * y, scalar * heading)

    operator fun div(scalar: Double) =
        Pose2d(x / scalar, y / scalar, heading / scalar)

    operator fun unaryMinus() = Pose2d(-x, -y, -heading)

    infix fun epsilonEquals(other: Pose2d) =
        x epsilonEquals other.x && y epsilonEquals other.y && heading epsilonEquals other.heading

    infix fun epsilonEqualsHeading(other: Pose2d) =
        x epsilonEquals other.x && y epsilonEquals other.y && Angle.normDelta(heading - other.heading) epsilonEquals 0.0

    override fun toString() = "($x, $y, ${heading * 180 / PI})"
}

operator fun Double.times(pose: Pose2d) = pose.times(this)

operator fun Double.div(pose: Pose2d) = pose.div(this)
