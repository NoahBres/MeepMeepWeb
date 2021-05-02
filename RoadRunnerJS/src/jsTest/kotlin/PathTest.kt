import TestUtil.assertDerivEquals
import path.Path
import path.PathSegment
import path.QuinticSpline
import util.DoubleProgression
import kotlin.test.Test
import kotlin.test.assertTrue

class PathTest {
    @Test
    fun testPathDerivatives() {
        val splineSegment = Path(
            listOf(
                PathSegment(
                    QuinticSpline(
                        QuinticSpline.Knot(0.0, 0.0, 20.0, 40.0),
                        QuinticSpline.Knot(45.0, 35.0, 60.0, 10.0)
                    )
                )
            ).toTypedArray()
        )

        val resolution = 1000
        val s = DoubleProgression.fromClosedInterval(0.0, splineSegment.length(), resolution)
        val ds = s.step

        val x = s.map { splineSegment[it].x }
        val dx = s.map { splineSegment.deriv(it).x }
        val d2x = s.map { splineSegment.secondDeriv(it).x }

        val y = s.map { splineSegment[it].y }
        val dy = s.map { splineSegment.deriv(it).y }
        val d2y = s.map { splineSegment.secondDeriv(it).y }

        val heading = s.map { splineSegment[it].heading }
        val headingDeriv = s.map { splineSegment.deriv(it).heading }
        val headingSecondDeriv = s.map { splineSegment.secondDeriv(it).heading }

        assertTrue(assertDerivEquals(x, dx, ds, 0.01))
        assertTrue(assertDerivEquals(dx, d2x, ds, 0.01))

        assertTrue(assertDerivEquals(y, dy, ds, 0.01))
        assertTrue(assertDerivEquals(dy, d2y, ds, 0.01))

        assertTrue(assertDerivEquals(heading, headingDeriv, ds, 0.01))
        assertTrue(assertDerivEquals(headingDeriv, headingSecondDeriv, ds, 0.01))
    }
}