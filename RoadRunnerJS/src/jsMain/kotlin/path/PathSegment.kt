package path

import geometry.Pose2d
import path.heading.HeadingInterpolator
import path.heading.TangentInterpolator
import kotlin.js.JsExport

/**
 * Path segment composed of a parametric curve and heading interpolator.
 *
 * @param curve parametric curve
 * @param interpolator heading interpolator
 */
@JsExport
class PathSegment constructor(
    val curve: ParametricCurve,
    val interpolator: HeadingInterpolator = TangentInterpolator()
) {
    init {
        interpolator.init(curve)
    }

    fun length() = curve.length()

    operator fun get(s: Double, t: Double = reparam(s)) = Pose2d(curve[s, t].x, curve[s, t].y, interpolator[s, t])

    fun deriv(s: Double, t: Double = reparam(s)) = Pose2d(curve.deriv(s, t).x, curve.deriv(s, t).y, interpolator.deriv(s, t))

    fun secondDeriv(s: Double, t: Double = reparam(s)) =
        Pose2d(curve.secondDeriv(s, t).x,curve.secondDeriv(s, t).y, interpolator.secondDeriv(s, t))

    fun tangentAngle(s: Double, t: Double = reparam(s)) = curve.tangentAngle(s, t)

    internal fun internalDeriv(s: Double, t: Double = reparam(s)) =
        Pose2d(curve.internalDeriv(t).x, curve.internalDeriv(t).y, interpolator.internalDeriv(s, t))

    internal fun internalSecondDeriv(s: Double, t: Double = reparam(s)) =
        Pose2d(curve.internalSecondDeriv(t).x, curve.internalSecondDeriv(t).y, interpolator.internalDeriv(s, t))

    fun reparam(s: Double) = curve.reparam(s)

    /**
     * Returns the start pose.
     */
    fun start() = get(0.0)

    /**
     * Returns the start pose derivative.
     */
    fun startDeriv() = deriv(0.0)

    /**
     * Returns the start pose second derivative.
     */
    fun startSecondDeriv() = secondDeriv(0.0)

    /**
     * Returns the start tangent angle.
     */
    fun startTangentAngle() = tangentAngle(0.0)

    internal fun startInternalDeriv() = internalDeriv(0.0)

    internal fun startInternalSecondDeriv() = internalSecondDeriv(0.0)

    /**
     * Returns the end pose.
     */
    fun end() = get(length())

    /**
     * Returns the end pose derivative.
     */
    fun endDeriv() = deriv(length())

    /**
     * Returns the end pose second derivative.
     */
    fun endSecondDeriv() = secondDeriv(length())

    /**
     * Returns the end tangent angle.
     */
    fun endTangentAngle() = tangentAngle(length())

    internal fun endInternalDeriv() = internalDeriv(length())

    internal fun endInternalSecondDeriv() = internalSecondDeriv(length())
}
