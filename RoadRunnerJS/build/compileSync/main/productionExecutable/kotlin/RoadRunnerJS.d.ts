type Nullable<T> = T | null | undefined
export namespace geometry {
    class Pose2d {
        constructor(x: number, y: number, heading: number);
        readonly x: number;
        readonly y: number;
        readonly heading: number;
        vec(): geometry.Vector2d;
        headingVec(): geometry.Vector2d;
        plus(other: geometry.Pose2d): geometry.Pose2d;
        minus(other: geometry.Pose2d): geometry.Pose2d;
        times(scalar: number): geometry.Pose2d;
        div(scalar: number): geometry.Pose2d;
        unaryMinus(): geometry.Pose2d;
        epsilonEquals(other: geometry.Pose2d): boolean;
        epsilonEqualsHeading(other: geometry.Pose2d): boolean;
        toString(): string;
        component1(): number;
        component2(): number;
        component3(): number;
        copy(x: number, y: number, heading: number): geometry.Pose2d;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace geometry {
    class Vector2d {
        constructor(x: number, y: number);
        readonly x: number;
        readonly y: number;
        readonly Companion: {
            polar(r: number, theta: number): geometry.Vector2d;
        };
        norm(): number;
        angle(): number;
        angleBetween(other: geometry.Vector2d): number;
        plus(other: geometry.Vector2d): geometry.Vector2d;
        minus(other: geometry.Vector2d): geometry.Vector2d;
        times(scalar: number): geometry.Vector2d;
        div(scalar: number): geometry.Vector2d;
        unaryMinus(): geometry.Vector2d;
        dot(other: geometry.Vector2d): number;
        distTo(other: geometry.Vector2d): number;
        projectOnto(other: geometry.Vector2d): geometry.Vector2d;
        rotated(angle: number): geometry.Vector2d;
        epsilonEquals(other: geometry.Vector2d): boolean;
        toString(): string;
        component1(): number;
        component2(): number;
        copy(x: number, y: number): geometry.Vector2d;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace path {
    abstract class ParametricCurve {
        constructor();
        get(s: number, t: number): geometry.Vector2d;
        deriv(s: number, t: number): geometry.Vector2d;
        secondDeriv(s: number, t: number): geometry.Vector2d;
        thirdDeriv(s: number, t: number): geometry.Vector2d;
        start(): geometry.Vector2d;
        startDeriv(): geometry.Vector2d;
        startSecondDeriv(): geometry.Vector2d;
        startThirdDeriv(): geometry.Vector2d;
        end(): geometry.Vector2d;
        endDeriv(): geometry.Vector2d;
        endSecondDeriv(): geometry.Vector2d;
        endThirdDeriv(): geometry.Vector2d;
        tangentAngle(s: number, t: number): number;
        tangentAngleDeriv(s: number, t: number): number;
        tangentAngleSecondDeriv(s: number, t: number): number;
        abstract length(): number;
    }
}
export namespace path {
    class Path {
        constructor(segments: Array<path.PathSegment>);
        readonly segments: Array<path.PathSegment>;
        length(): number;
        segment(s: number): kotlin.Pair<path.PathSegment, number>;
        get(s: number, t: number): geometry.Pose2d;
        getSingleParam(s: number): geometry.Pose2d;
        deriv(s: number, t: number): geometry.Pose2d;
        secondDeriv(s: number, t: number): geometry.Pose2d;
        fastProject(queryPoint: geometry.Vector2d, projectGuess: number): number;
        project(queryPoint: geometry.Vector2d, ds: number): number;
        start(): geometry.Pose2d;
        startDeriv(): geometry.Pose2d;
        startSecondDeriv(): geometry.Pose2d;
        end(): geometry.Pose2d;
        endDeriv(): geometry.Pose2d;
        endSecondDeriv(): geometry.Pose2d;
    }
}
export namespace path {
    class PathSegment {
        constructor(curve: path.ParametricCurve, interpolator: path.heading.HeadingInterpolator);
        readonly curve: path.ParametricCurve;
        readonly interpolator: path.heading.HeadingInterpolator;
        length(): number;
        get(s: number, t: number): geometry.Pose2d;
        deriv(s: number, t: number): geometry.Pose2d;
        secondDeriv(s: number, t: number): geometry.Pose2d;
        tangentAngle(s: number, t: number): number;
        reparam(s: number): number;
        start(): geometry.Pose2d;
        startDeriv(): geometry.Pose2d;
        startSecondDeriv(): geometry.Pose2d;
        startTangentAngle(): number;
        end(): geometry.Pose2d;
        endDeriv(): geometry.Pose2d;
        endSecondDeriv(): geometry.Pose2d;
        endTangentAngle(): number;
    }
}
export namespace path.heading {
    abstract class HeadingInterpolator {
        constructor();
        init(curve: path.ParametricCurve): void;
        get(s: number, t: number): number;
        deriv(s: number, t: number): number;
        secondDeriv(s: number, t: number): number;
        start(): number;
        startDeriv(): number;
        startSecondDeriv(): number;
        end(): number;
        endDeriv(): number;
        endSecondDeriv(): number;
    }
}
export namespace profile {
    class MotionProfile {
        constructor(segments: Array<profile.MotionSegment>);
        get(t: number): profile.MotionState;
        duration(): number;
        reversed(): profile.MotionProfile;
        flipped(): profile.MotionProfile;
        start(): profile.MotionState;
        end(): profile.MotionState;
        plus(other: profile.MotionProfile): profile.MotionProfile;
    }
}
export namespace profile {
    const MotionProfileGenerator: {
        generateSimpleMotionProfile(start: profile.MotionState, goal: profile.MotionState, maxVel: number, maxAccel: number, maxJerk: number, overshoot: boolean): profile.MotionProfile;
        generateMotionProfile(start: profile.MotionState, goal: profile.MotionState, velocityConstraint: profile.VelocityConstraint, accelerationConstraint: profile.AccelerationConstraint, resolution: number): profile.MotionProfile;
    };
}
export namespace profile {
    class MotionSegment {
        constructor(start: profile.MotionState, dt: number);
        readonly start: profile.MotionState;
        readonly dt: number;
        get(t: number): profile.MotionState;
        end(): profile.MotionState;
        reversed(): profile.MotionSegment;
        flipped(): profile.MotionSegment;
        toString(): string;
    }
}
export namespace profile {
    class MotionState {
        constructor(x: number, v: number, a: number, j: number);
        readonly x: number;
        readonly v: number;
        readonly a: number;
        readonly j: number;
        get(t: number): profile.MotionState;
        flipped(): profile.MotionState;
    }
}
export namespace trajectory {
    class DisplacementMarker {
        constructor(producer: trajectory.DisplacementProducer, callback: trajectory.MarkerCallback);
        readonly producer: trajectory.DisplacementProducer;
        readonly callback: trajectory.MarkerCallback;
        component1(): trajectory.DisplacementProducer;
        component2(): trajectory.MarkerCallback;
        copy(producer: trajectory.DisplacementProducer, callback: trajectory.MarkerCallback): trajectory.DisplacementMarker;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace trajectory {
    class MarkerCallback {
        constructor();
        onMarkerReached(): void;
    }
}
export namespace trajectory {
    class SpatialMarker {
        constructor(point: geometry.Vector2d, callback: trajectory.MarkerCallback);
        readonly point: geometry.Vector2d;
        readonly callback: trajectory.MarkerCallback;
        component1(): geometry.Vector2d;
        component2(): trajectory.MarkerCallback;
        copy(point: geometry.Vector2d, callback: trajectory.MarkerCallback): trajectory.SpatialMarker;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace trajectory {
    class TemporalMarker {
        constructor(producer: trajectory.TimeProducer, callback: trajectory.MarkerCallback);
        readonly producer: trajectory.TimeProducer;
        readonly callback: trajectory.MarkerCallback;
        component1(): trajectory.TimeProducer;
        component2(): trajectory.MarkerCallback;
        copy(producer: trajectory.TimeProducer, callback: trajectory.MarkerCallback): trajectory.TemporalMarker;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace trajectory {
    class Trajectory {
        constructor(path: path.Path, profile: profile.MotionProfile, markers: Array<trajectory.TrajectoryMarker>);
        readonly path: path.Path;
        readonly profile: profile.MotionProfile;
        readonly markers: Array<trajectory.TrajectoryMarker>;
        duration(): number;
        get(time: number): geometry.Pose2d;
        velocity(time: number): geometry.Pose2d;
        acceleration(time: number): geometry.Pose2d;
        start(): geometry.Pose2d;
        end(): geometry.Pose2d;
    }
}
export namespace trajectory {
    class TrajectoryBuilder {
        constructor(startPose: Nullable<geometry.Pose2d>, startTangent: Nullable<number>, trajectory: Nullable<trajectory.Trajectory>, t: Nullable<number>, baseVelConstraint: trajectory.constraints.TrajectoryVelocityConstraint, baseAccelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint, start: profile.MotionState, resolution: number);
        lineTo(endPosition: geometry.Vector2d, velConstraintOverride: trajectory.constraints.TrajectoryVelocityConstraint, accelConstraintOverride: trajectory.constraints.TrajectoryAccelerationConstraint): trajectory.TrajectoryBuilder;
        lineToConstantHeading(endPosition: geometry.Vector2d, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        lineToLinearHeading(endPose: geometry.Pose2d, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        lineToSplineHeading(endPose: geometry.Pose2d, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        strafeTo(endPosition: geometry.Vector2d, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        forward(distance: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        back(distance: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        strafeLeft(distance: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        strafeRight(distance: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        splineTo(endPosition: geometry.Vector2d, endTangent: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        splineToConstantHeading(endPosition: geometry.Vector2d, endTangent: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        splineToLinearHeading(endPose: geometry.Pose2d, endTangent: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        splineToSplineHeading(endPose: geometry.Pose2d, endTangent: number, velConstraintOverride: Nullable<trajectory.constraints.TrajectoryVelocityConstraint>, accelConstraintOverride: Nullable<trajectory.constraints.TrajectoryAccelerationConstraint>): trajectory.TrajectoryBuilder;
        addTemporalMarker(time: number, callback: trajectory.MarkerCallback): trajectory.TrajectoryBuilder;
        addSpatialMarker(point: geometry.Vector2d, callback: trajectory.MarkerCallback): trajectory.TrajectoryBuilder;
        build(): trajectory.Trajectory;
        buildTrajectory(path: path.Path, temporalMarkers: Array<trajectory.TemporalMarker>, displacementMarkers: Array<trajectory.DisplacementMarker>, spatialMarkers: Array<trajectory.SpatialMarker>): trajectory.Trajectory;
    }
}
export namespace trajectory {
    class TrajectoryMarker {
        constructor(time: number, callback: trajectory.MarkerCallback);
        readonly time: number;
        readonly callback: trajectory.MarkerCallback;
        component1(): number;
        component2(): trajectory.MarkerCallback;
        copy(time: number, callback: trajectory.MarkerCallback): trajectory.TrajectoryMarker;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace trajectory.constraints {
    class AngularVelocityConstraint extends trajectory.constraints.TrajectoryVelocityConstraint {
        constructor(maxAngularVel: number);
        get(s: number, pose: geometry.Pose2d, deriv: geometry.Pose2d, baseRobotVel: geometry.Pose2d): number;
    }
}
export namespace trajectory.constraints {
    class MecanumVelocityConstraint extends trajectory.constraints.TrajectoryVelocityConstraint {
        constructor(maxWheelVel: number, trackWidth: number, wheelBase: number, lateralMultiplier: number);
        get(s: number, pose: geometry.Pose2d, deriv: geometry.Pose2d, baseRobotVel: geometry.Pose2d): number;
    }
}
export namespace trajectory.constraints {
    class MinVelocityConstraint extends trajectory.constraints.TrajectoryVelocityConstraint {
        constructor(constraints: Array<trajectory.constraints.TrajectoryVelocityConstraint>);
        get(s: number, pose: geometry.Pose2d, deriv: geometry.Pose2d, baseRobotVel: geometry.Pose2d): number;
    }
}
export namespace trajectory.constraints {
    class ProfileAccelerationConstraint extends trajectory.constraints.TrajectoryAccelerationConstraint {
        constructor(maxProfileAccel: number);
        get(s: number, pose: geometry.Pose2d, deriv: geometry.Pose2d, baseRobotVel: geometry.Pose2d): number;
    }
}
export namespace trajectory.constraints {
    class TrajectoryAccelerationConstraint {
        constructor();
        get(s: number, pose: geometry.Pose2d, deriv: geometry.Pose2d, baseRobotVel: geometry.Pose2d): number;
    }
}
export namespace trajectory.constraints {
    class TrajectoryVelocityConstraint {
        constructor();
        get(s: number, pose: geometry.Pose2d, deriv: geometry.Pose2d, baseRobotVel: geometry.Pose2d): number;
    }
}
export namespace util {
    const Angle: {
        norm(angle: number): number;
        normDelta(angleDelta: number): number;
    };
}