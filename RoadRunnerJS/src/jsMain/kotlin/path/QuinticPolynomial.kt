package path

import commons.math4.linear.Array2DRowRealMatrix
import commons.math4.linear.LUDecomposition

@Suppress("TopLevelPropertyNaming")
private val COEFF_MATRIX = commons.math4.linear.Array2DRowRealMatrix(
    arrayOf(
        doubleArrayOf(0.0, 0.0, 0.0, 0.0, 0.0, 1.0),
        doubleArrayOf(0.0, 0.0, 0.0, 0.0, 1.0, 0.0),
        doubleArrayOf(0.0, 0.0, 0.0, 2.0, 0.0, 0.0),
        doubleArrayOf(1.0, 1.0, 1.0, 1.0, 1.0, 1.0),
        doubleArrayOf(5.0, 4.0, 3.0, 2.0, 1.0, 0.0),
        doubleArrayOf(20.0, 12.0, 6.0, 2.0, 0.0, 0.0)
    )
)

/**
 * Quintic polynomial interpolated according to the provided derivatives.
 *
 * @param start start value
 * @param startDeriv start derivative
 * @param startSecondDeriv start second derivative
 * @param end end value
 * @param endDeriv end derivative
 * @param endSecondDeriv end second derivative
 */
class QuinticPolynomial(
    start: Double,
    startDeriv: Double,
    startSecondDeriv: Double,
    end: Double,
    endDeriv: Double,
    endSecondDeriv: Double
) {
    val a: Double
    val b: Double
    val c: Double
    val d: Double
    val e: Double
    val f: Double

    init {
        val target =
            commons.math4.linear.Array2DRowRealMatrix(
                arrayOf(
                    doubleArrayOf(
                        start,
                        startDeriv,
                        startSecondDeriv,
                        end,
                        endDeriv,
                        endSecondDeriv
                    )
                )
            ).transpose()

        val solver = LUDecomposition(COEFF_MATRIX).solver
        val coeff = solver.solve(target)

        a = coeff.getEntry(0, 0)
        b = coeff.getEntry(1, 0)
        c = coeff.getEntry(2, 0)
        d = coeff.getEntry(3, 0)
        e = coeff.getEntry(4, 0)
        f = coeff.getEntry(5, 0)
    }

    /**
     * Returns the value of the polynomial at [t].
     */
    operator fun get(t: Double) = (a * t + b) * (t * t * t * t) + c * (t * t * t) + d * (t * t) + e * t + f

    /**
     * Returns the derivative of the polynomial at [t].
     */
    fun deriv(t: Double) = (5 * a * t + 4 * b) * (t * t * t) + (3 * c * t + 2 * d) * t + e

    /**
     * Returns the second derivative of the polynomial at [t].
     */
    fun secondDeriv(t: Double) = (20 * a * t + 12 * b) * (t * t) + 6 * c * t + 2 * d

    /**
     * Returns the third derivative of the polynomial at [t].
     */
    fun thirdDeriv(t: Double) = (60 * a * t + 24 * b) * t + 6 * c
}
