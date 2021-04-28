package trajectory

import geometry.Pose2d
import geometry.Vector2d
import path.Path
import path.PathBuilder
import profile.MotionState
import trajectory.constraints.TrajectoryAccelerationConstraint
import trajectory.constraints.TrajectoryVelocityConstraint
import kotlin.js.JsExport
import kotlin.js.console

private fun MotionState.zeroPosition() = MotionState(0.0, v, a, j)

private data class IntervalVelocityConstraint(
    val start: Double,
    val end: Double,
    val constraint: TrajectoryVelocityConstraint
)

private class PiecewiseVelocityConstraint(
    private val baseConstraint: TrajectoryVelocityConstraint,
    private val constraintOverrides: List<IntervalVelocityConstraint>
) : TrajectoryVelocityConstraint() {
    override fun get(s: Double, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): Double {
        for (interval in constraintOverrides) {
            val (start, end, constraint) = interval
            if (s in start..end) {
                return constraint[s, pose, deriv, baseRobotVel]
            }
        }
        return baseConstraint[s, pose, deriv, baseRobotVel]
    }
}

private data class IntervalAccelerationConstraint(
    val start: Double,
    val end: Double,
    val constraint: TrajectoryAccelerationConstraint
)

private class PiecewiseAccelerationConstraint(
    private val baseConstraint: TrajectoryAccelerationConstraint,
    private val constraintOverrides: List<IntervalAccelerationConstraint>
) : TrajectoryAccelerationConstraint() {
    override fun get(s: Double, pose: Pose2d, deriv: Pose2d, baseRobotVel: Pose2d): Double {
        for (interval in constraintOverrides) {
            val (start, end, constraint) = interval
            if (s in start..end) {
                return constraint[s, pose, deriv, baseRobotVel]
            }
        }
        return baseConstraint[s, pose, deriv, baseRobotVel]
    }
}

/**
 * Builder for trajectories with *dynamic* constraints.
 */
@JsExport
class TrajectoryBuilder constructor(
    startPose: Pose2d?,
    startTangent: Double?,
    trajectory: Trajectory?,
    t: Double?,
    private val baseVelConstraint: TrajectoryVelocityConstraint,
    private val baseAccelConstraint: TrajectoryAccelerationConstraint,
    private val start: MotionState,
    private val resolution: Double
) {
    private var pathBuilder: PathBuilder = if (startPose == null) {
        PathBuilder(trajectory!!.path, trajectory.profile[t!!].x)
    } else {
        PathBuilder(startPose, startTangent!!)
    }

    private val temporalMarkers = mutableListOf<TemporalMarker>()
    private val displacementMarkers = mutableListOf<DisplacementMarker>()
    private val spatialMarkers = mutableListOf<SpatialMarker>()

    /**
     * Create a builder from a start pose and motion state. This is the recommended constructor for creating
     * trajectories from rest.
     */
//    @JsName("TrajectoryBuilderConstructor2")
//    constructor(
//        startPose: Pose2d,
//        startTangent: Double = startPose.heading,
//        baseVelConstraint: TrajectoryVelocityConstraint,
//        baseAccelConstraint: TrajectoryAccelerationConstraint,
//        resolution: Double = 0.25
//    ) : this(
//        startPose,
//        startTangent,
//        null,
//        null,
//        baseVelConstraint,
//        baseAccelConstraint,
//        MotionState(0.0, 0.0, 0.0),
//        resolution
//    )
//
//    @JsName("TrajectoryBuilderConstructor3")
//    constructor(
//        startPose: Pose2d,
//        reversed: Boolean,
//        baseVelConstraint: TrajectoryVelocityConstraint,
//        baseAccelConstraint: TrajectoryAccelerationConstraint,
//        resolution: Double = 0.25
//    ) : this(
//        startPose,
//        Angle.norm(startPose.heading + if (reversed) PI else 0.0),
//        baseVelConstraint,
//        baseAccelConstraint,
//        resolution
//    )
//
//    /**
//     * Create a builder from an active trajectory. This is useful for interrupting a live trajectory and smoothly
//     * transitioning to a new one.
//     */
//    @JsName("TrajectoryBuilderConstructor4")
//    constructor(
//        trajectory: Trajectory,
//        t: Double,
//        baseVelConstraint: TrajectoryVelocityConstraint,
//        baseAccelConstraint: TrajectoryAccelerationConstraint,
//        resolution: Double = 0.25
//    ) : this(
//        null,
//        null,
//        trajectory,
//        t,
//        baseVelConstraint,
//        baseAccelConstraint,
//        trajectory.profile[t].zeroPosition(),
//        resolution
//    )

    private val velConstraintOverrides = mutableListOf<IntervalVelocityConstraint>()
    private val accelConstraintOverrides = mutableListOf<IntervalAccelerationConstraint>()

    private fun addSegment(
        add: () -> Unit,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ): TrajectoryBuilder {
        val start = pathBuilder.build().length()

        add()

        val end = pathBuilder.build().length()

        if (velConstraintOverride != null) {
            velConstraintOverrides.add(IntervalVelocityConstraint(start, end, velConstraintOverride))
        }

        if (accelConstraintOverride != null) {
            accelConstraintOverrides.add(IntervalAccelerationConstraint(start, end, accelConstraintOverride))
        }

        return this
    }

    /**
     * Adds a line segment with tangent heading interpolation.
     *
     * @param endPosition end position
     * @param constraintsOverride segment-specific constraints
     */
    fun lineTo(
        endPosition: Vector2d,
        velConstraintOverride: TrajectoryVelocityConstraint,
        accelConstraintOverride: TrajectoryAccelerationConstraint
    ) =
        addSegment({ pathBuilder.lineTo(endPosition) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a line segment with constant heading interpolation.
     *
     * @param endPosition end position
     * @param constraintsOverride segment-specific constraints
     */
    fun lineToConstantHeading(
        endPosition: Vector2d,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.lineToConstantHeading(endPosition) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a line segment with linear heading interpolation.
     *
     * @param endPose end pose
     * @param constraintsOverride segment-specific constraints
     */
    fun lineToLinearHeading(
        endPose: Pose2d,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.lineToLinearHeading(endPose) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a line segment with spline heading interpolation.
     *
     * @param endPose end pose
     * @param constraintsOverride segment-specific constraints
     */
    fun lineToSplineHeading(
        endPose: Pose2d,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.lineToSplineHeading(endPose) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a strafe path segment.
     *
     * @param endPosition end position
     * @param constraintsOverride segment-specific constraints
     */
    fun strafeTo(
        endPosition: Vector2d,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.strafeTo(endPosition) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a line straight forward.
     *
     * @param distance distance to travel forward
     * @param constraintsOverride segment-specific constraints
     */
    fun forward(
        distance: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.forward(distance) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a line straight backward.
     *
     * @param distance distance to travel backward
     * @param constraintsOverride segment-specific constraints
     */
    fun back(
        distance: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.back(distance) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a segment that strafes left in the robot reference frame.
     *
     * @param distance distance to strafe left
     * @param constraintsOverride segment-specific constraints
     */
    fun strafeLeft(
        distance: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.strafeLeft(distance) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a segment that strafes right in the robot reference frame.
     *
     * @param distance distance to strafe right
     * @param constraintsOverride segment-specific constraints
     */
    fun strafeRight(
        distance: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.strafeRight(distance) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a spline segment with tangent heading interpolation.
     *
     * @param endPosition end position
     * @param endTangent end tangent
     * @param constraintsOverride segment-specific constraints
     */
    fun splineTo(
        endPosition: Vector2d,
        endTangent: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment({ pathBuilder.splineTo(endPosition, endTangent) }, velConstraintOverride, accelConstraintOverride)

    /**
     * Adds a spline segment with constant heading interpolation.
     *
     * @param endPosition end position
     * @param endTangent end tangent
     * @param constraintsOverride segment-specific constraints
     */
    fun splineToConstantHeading(
        endPosition: Vector2d,
        endTangent: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment(
            { pathBuilder.splineToConstantHeading(endPosition, endTangent) },
            velConstraintOverride,
            accelConstraintOverride
        )

    /**
     * Adds a spline segment with linear heading interpolation.
     *
     * @param endPose end pose
     * @param endTangent end tangent
     * @param constraintsOverride segment-specific constraints
     */
    fun splineToLinearHeading(
        endPose: Pose2d,
        endTangent: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment(
            { pathBuilder.splineToLinearHeading(endPose, endTangent) },
            velConstraintOverride,
            accelConstraintOverride
        )

    /**
     * Adds a spline segment with spline heading interpolation.
     *
     * @param endPose end pose
     * @param constraintsOverride segment-specific constraints
     */
    fun splineToSplineHeading(
        endPose: Pose2d,
        endTangent: Double,
        velConstraintOverride: TrajectoryVelocityConstraint?,
        accelConstraintOverride: TrajectoryAccelerationConstraint?
    ) =
        addSegment(
            { pathBuilder.splineToSplineHeading(endPose, endTangent) },
            velConstraintOverride,
            accelConstraintOverride
        )


    /**
     * Adds a marker to the trajectory at [time].
     */
    fun addTemporalMarker(time: Double, callback: MarkerCallback) =
        addTemporalMarker(0.0, time, callback)

    /**
     * Adds a marker to the trajectory at [scale] * trajectory duration + [offset].
     */
    private fun addTemporalMarker(scale: Double, offset: Double, callback: MarkerCallback) =
        addTemporalMarker({ scale * it + offset }, callback)

    /**
     * Adds a marker to the trajectory at [time] evaluated with the trajectory duration.
     */
    private fun addTemporalMarker(time: (Double) -> Double, callback: MarkerCallback): TrajectoryBuilder {
        temporalMarkers.add(TemporalMarker(time, callback))

        return this
    }

    /**
     * Adds a marker that will be triggered at the closest trajectory point to [point].
     */
    fun addSpatialMarker(point: Vector2d, callback: MarkerCallback): TrajectoryBuilder {
        spatialMarkers.add(SpatialMarker(point, callback))

        return this
    }

    /**
     * Adds a marker at the current position of the trajectory.
     */
    private fun addDisplacementMarker(callback: MarkerCallback) =
        addDisplacementMarker(pathBuilder.build().length(), callback)

    /**
     * Adds a marker to the trajectory at [displacement].
     */
    private fun addDisplacementMarker(displacement: Double, callback: MarkerCallback) =
        addDisplacementMarker(0.0, displacement, callback)

    /**
     * Adds a marker to the trajectory at [scale] * path length + [offset].
     */
    private fun addDisplacementMarker(scale: Double, offset: Double, callback: MarkerCallback) =
        addDisplacementMarker({ scale * it + offset }, callback)

    /**
     * Adds a marker to the trajectory at [displacement] evaluated with path length.
     */
    private fun addDisplacementMarker(displacement: (Double) -> Double, callback: MarkerCallback): TrajectoryBuilder {
        displacementMarkers.add(DisplacementMarker(displacement, callback))

        return this
    }


    fun build() = buildTrajectory(
        pathBuilder.build(),
        temporalMarkers.toTypedArray(),
        displacementMarkers.toTypedArray(),
        spatialMarkers.toTypedArray()
    )

    fun buildTrajectory(
        path: Path,
        temporalMarkers: Array<TemporalMarker>,
        displacementMarkers: Array<DisplacementMarker>,
        spatialMarkers: Array<SpatialMarker>
    ): Trajectory {
        val goal = MotionState(path.length(), 0.0, 0.0)
        return TrajectoryGenerator.generateTrajectory(
            path,
            PiecewiseVelocityConstraint(baseVelConstraint, velConstraintOverrides),
            PiecewiseAccelerationConstraint(baseAccelConstraint, accelConstraintOverrides),
            start,
            goal,
            temporalMarkers.toList(),
            displacementMarkers.toList(),
            spatialMarkers.toList(),
            resolution
        )
    }
}
