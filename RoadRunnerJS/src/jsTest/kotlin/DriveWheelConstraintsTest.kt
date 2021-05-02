import geometry.Pose2d
import geometry.Vector2d
import kinematics.Kinematics
import kinematics.MecanumKinematics
import kinematics.SwerveKinematics
import kinematics.TankKinematics
import profile.MotionState
import trajectory.TrajectoryBuilder
import trajectory.constraints.*
import util.DoubleProgression
import kotlin.math.PI
import kotlin.math.abs
import kotlin.random.Random
import kotlin.test.Test
import kotlin.test.assertTrue

private val ACCEL_CONSTRAINT = ProfileAccelerationConstraint(25.0)
private const val MAX_WHEEL_VEL = 10.0
private const val TRACK_WIDTH = 5.0

class DriveWheelConstraintsTest {
//    private fun testWheelVelocityLimiting(
//        velConstraint: TrajectoryVelocityConstraint,
//        robotToWheelVelocities: (vel: Pose2d) -> List<Double>
//    ) {
//        val trajectory = TrajectoryBuilder(
//            Pose2d(0.0, 0.0, 0.0),
//            0.0,
//            null,
//            0.0,
//            velConstraint,
//            ACCEL_CONSTRAINT,
//            MotionState(0.0, 0.0, 0.0),
//            0.25
//        )
//            .splineTo(Vector2d(15.0, 15.0), PI, velConstraint, ACCEL_CONSTRAINT)
//            .splineTo(Vector2d(5.0, 35.0), PI / 3, velConstraint, ACCEL_CONSTRAINT)
//            .build()
//        val t = DoubleProgression.fromClosedInterval(0.0, trajectory.duration(), 10_000)
//        val maxWheelVelMag = t.map { time ->
//            val pose = trajectory[time]
//            val poseVel = trajectory.velocity(time)
//            val robotVel = Kinematics.fieldToRobotVelocity(pose, poseVel)
//            robotToWheelVelocities(robotVel)
//                .map(::abs)
//                .maxOrNull() ?: 0.0
//        }.maxOrNull() ?: 0.0
//        assertTrue(maxWheelVelMag < MAX_WHEEL_VEL + 0.1)
//    }
//
//    @Test
//    fun testTankWheelVelocityLimiting() {
//        val velConstraint = TankVelocityConstraint(MAX_WHEEL_VEL, TRACK_WIDTH)
//
//        testWheelVelocityLimiting(velConstraint) {
//            TankKinematics.robotToWheelVelocities(it, TRACK_WIDTH)
//        }
//    }
//
//    @Test
//    fun testTankWheelVelocityLimitingReversed() {
//        val velConstraint = TankVelocityConstraint(MAX_WHEEL_VEL, TRACK_WIDTH)
//
//        testWheelVelocityLimiting(velConstraint) {
//            TankKinematics.robotToWheelVelocities(it, TRACK_WIDTH)
//        }
//    }
//
//    @Test
//    fun testMecanumWheelVelocityLimiting() {
//        val velConstraint = MecanumVelocityConstraint(MAX_WHEEL_VEL, TRACK_WIDTH)
//
//        testWheelVelocityLimiting(velConstraint) {
//            MecanumKinematics.robotToWheelVelocities(it, TRACK_WIDTH)
//        }
//    }
//
//    @Test
//    fun testSwerveWheelVelocityLimiting() {
//        val velConstraint = SwerveVelocityConstraint(MAX_WHEEL_VEL, TRACK_WIDTH)
//
//        testWheelVelocityLimiting(velConstraint) {
//            SwerveKinematics.robotToWheelVelocities(it, TRACK_WIDTH)
//        }
//    }
//
//    @Test
//    fun testBaseVelocity() {
//        val velConstraint = TankVelocityConstraint(MAX_WHEEL_VEL, TRACK_WIDTH)
//        repeat(100) {
//            val deriv = Pose2d(5.0 * (Random.nextDouble() - 0.5), 0.0, 0.5 * (Random.nextDouble() - 0.5))
//            val baseVel = Pose2d(10.0 * (Random.nextDouble() - 0.5), 0.0, 1.0 * (Random.nextDouble() - 0.5))
//            val maxScalarVel = velConstraint[0.0, Pose2d(), deriv, baseVel]
//            val maxVel = baseVel + deriv * maxScalarVel
//            val maxWheelVel = TankKinematics.robotToWheelVelocities(maxVel, TRACK_WIDTH).maxOf(::abs)
//            assertTrue(maxWheelVel < MAX_WHEEL_VEL + 0.1)
//        }
//    }
}