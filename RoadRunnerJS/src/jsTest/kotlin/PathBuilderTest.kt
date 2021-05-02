import geometry.Pose2d
import geometry.Vector2d
import path.PathBuilder
import path.PathBuilderException
import kotlin.math.PI
import kotlin.test.Test
import kotlin.test.assertEquals

class PathBuilderTest {
    private fun throwsPathBuilderException(generatePath: () -> Unit): Boolean {
        return try {
            generatePath()
            false
        } catch (e: PathBuilderException) {
            true
        } catch (t: Throwable) {
            false
        }
    }

    @Test
    fun testTangentReversal() {
        assertEquals(true, throwsPathBuilderException {
            PathBuilder(Pose2d())
                .lineTo(Vector2d(10.0, 0.0))
                .lineTo(Vector2d(-10.0, 0.0))
                .build()
        })
    }

    @Test
    fun testImproperHeadingInterpSeq() {
        assertEquals(true, throwsPathBuilderException {
            PathBuilder(Pose2d())
                .lineToLinearHeading(Pose2d(10.0, 0.0, PI / 2))
                .lineToLinearHeading(Pose2d(-10.0, 0.0, 0.0))
                .build()
        })
    }

    @Test
    fun testNoContinuityException() {
        assertEquals(false, throwsPathBuilderException {
            PathBuilder(Pose2d())
                .splineTo(Vector2d(10.0, 10.0), 0.0)
                .splineTo(Vector2d(20.0, 20.0), 0.0)
        })
    }
}