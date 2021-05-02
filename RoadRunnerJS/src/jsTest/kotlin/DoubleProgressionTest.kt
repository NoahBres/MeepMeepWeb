import util.DoubleProgression
import util.EPSILON
import kotlin.math.abs
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class DoubleProgressionTest {
    @Test
    fun testNormalSplit() {
        val prog = DoubleProgression(0.0, 0.1, 10)

        val (firstHalf, secondHalf) = prog.split(0.25)
        assertEquals(3, firstHalf.progressionSize)
        assertEquals(7, secondHalf.progressionSize)
    }

    @Test
    fun testLowSplit() {
        val prog = DoubleProgression(0.0, 0.1, 10)

        val (firstHalf, secondHalf) = prog.split(-0.45)
        assertEquals(0, firstHalf.progressionSize)
        assertEquals(10, secondHalf.progressionSize)
    }

    @Test
    fun testHighSplit() {
        val prog = DoubleProgression(0.0, 0.1, 10)

        val (firstHalf, secondHalf) = prog.split(1.5)
        assertEquals(10, firstHalf.progressionSize)
        assertEquals(0, secondHalf.progressionSize)
    }

    @Test
    fun testIndexing() {
        val prog = DoubleProgression(0.0, 0.1, 10)

        assertEquals(2, prog.floorIndex(0.25))
        assertEquals(3, prog.ceilIndex(0.25))
        assertEquals(true, prog.contains(0.25))
        assertEquals(false, prog.contains(-0.55))
    }

    @Test
    fun testIterator() {
        val prog = DoubleProgression(0.0, 0.1, 10)

        assertTrue(abs(0.9 - prog.last()) < EPSILON)
    }

    @Test
    fun testClosedIntervalConstruction() {
        val prog = DoubleProgression.fromClosedInterval(0.0, 1.0, 11)

        assertTrue(abs(0.0 - prog.first()) < EPSILON)
        assertTrue(abs(1.0 - prog.last()) < EPSILON)
    }
}