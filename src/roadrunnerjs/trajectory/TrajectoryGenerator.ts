import { epsilonEquals } from "roadrunnerjs/util";
import { Path } from "roadrunnerjs/path";
import {
  generateMotionProfile,
  generateSimpleMotionProfile,
} from "roadrunnerjs/profile/MotionProfileGenerator";
import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { MotionProfile } from "roadrunnerjs/profile/MotionProfile";

import { DisplacementMarker } from "./DisplacementMarker";
import { TrajectoryAccelerationConstraint } from "./constraints/TrajectoryAccelerationConstraint";
import { MotionState } from "./../profile/MotionState";
import { TrajectoryVelocityConstraint } from "./constraints/TrajectoryVelocityConstraint";
import { TemporalMarker } from "./TemporalMarker";
import { SpatialMarker } from "./SpatialMarker";
import { TrajectoryMarker } from "./TrajectoryMarker";
import { Trajectory } from "./Trajectory";
/**
 * Trajectory generator for creating trajectories with dynamic and static constraints from paths.
 */
function generateProfile(
  path: Path,
  velocityConstraint: TrajectoryVelocityConstraint,
  accelerationConstraint: TrajectoryAccelerationConstraint,
  start: MotionState,
  goal: MotionState,
  resolution: number
) {
  return generateMotionProfile(
    start,
    goal,
    {
      get: (s) => {
        const t = path.reparam(s);
        return velocityConstraint.get(
          s,
          path.get(s, t),
          path.deriv(s, t),
          new Pose2d({ x: 0, y: 0, heading: 0 })
        );
      },
    },
    {
      get: (s) => {
        const t = path.reparam(s);
        return accelerationConstraint.get(
          s,
          path.get(s, t),
          path.deriv(s, t),
          new Pose2d({ x: 0, y: 0, heading: 0 })
        );
      },
    },
    resolution
  );
}

function generateSimpleProfile(
  maxProfileVel: number,
  maxProfileAccel: number,
  maxProfileJerk: number,
  start: MotionState,
  goal: MotionState
) {
  return generateSimpleMotionProfile(
    start,
    goal,
    maxProfileVel,
    maxProfileAccel,
    maxProfileJerk
  );
}

// note: this assumes that the profile position is monotonic increasing private fun displacementToTime(profile: MotionProfile, s: Double): Double {
function displacementToTime(profile: MotionProfile, s: number) {
  let tLo = 0.0;
  let tHi = profile.duration();
  while (!epsilonEquals(tLo, tHi)) {
    const tMid = 0.5 * (tLo + tHi);
    if (profile.get(tMid).x > s) {
      tHi = tMid;
    } else {
      tLo = tMid;
    }
  }
  return 0.5 * (tLo + tHi);
}

function pointToTime(path: Path, profile: MotionProfile, point: Vector2d) {
  return displacementToTime(profile, path.project(point));
}

function convertMarkers(
  path: Path,
  profile: MotionProfile,
  temporalMarkers: TemporalMarker[],
  displacementMarkers: DisplacementMarker[],
  spatialMarkers: SpatialMarker[]
): TrajectoryMarker[] {
  return [
    ...temporalMarkers.map(({ producer, callback }) => ({
      time: producer(profile.duration()),
      callback,
    })),
    ...displacementMarkers.map(({ producer, callback }) => ({
      time: displacementToTime(profile, producer(path.length())),
      callback,
    })),
    ...spatialMarkers.map(({ point, callback }) => ({
      time: pointToTime(path, profile, point),
      callback,
    })),
  ];
}

/**
 * Generate a dynamic constraint trajectory.
 * @param path path
 * @param velocityConstraints trajectory velocity constraints
 * @param accelerationConstraints trajectory acceleration constraints
 * @param start start motion state
 * @param goal goal motion state
 * @param temporalMarkers temporal markers
 * @param spatialMarkers spatial markers
 * @param resolution dynamic profile sampling resolution
 */
export function generateTrajectory(
  path: Path,
  velocityConstraint: TrajectoryVelocityConstraint,
  accelerationConstraint: TrajectoryAccelerationConstraint,
  start: MotionState = new MotionState(0.0, 0.0, 0.0),
  goal: MotionState = new MotionState(path.length(), 0.0, 0.0),
  temporalMarkers: TemporalMarker[] = [],
  displacementMarkers: DisplacementMarker[] = [],
  spatialMarkers: SpatialMarker[] = [],
  resolution: number = 0.25
) {
  const profile = generateProfile(
    path,
    velocityConstraint,
    accelerationConstraint,
    start,
    goal,
    resolution
  );
  const markers = convertMarkers(
    path,
    profile,
    temporalMarkers,
    displacementMarkers,
    spatialMarkers
  );
  return new Trajectory(path, profile, markers);
}

/**
 * Generate a simple constraint trajectory.
 * @param path path
 * @param maxProfileVel maximum velocity
 * @param maxProfileAccel maximum acceleration
 * @param maxProfileJerk maximum jerk
 * @param start start motion state
 * @param goal goal motion state
 * @param temporalMarkers temporal markers
 * @param spatialMarkers spatial markers
 */
export function generateSimpleTrajectory(
  path: Path,
  maxProfileVel: number,
  maxProfileAccel: number,
  maxProfileJerk: number,
  start: MotionState = new MotionState(0.0, 0.0, 0.0, 0.0),
  goal: MotionState = new MotionState(path.length(), 0.0, 0.0, 0.0),
  temporalMarkers: TemporalMarker[] = [],
  displacementMarkers: DisplacementMarker[] = [],
  spatialMarkers: SpatialMarker[] = []
) {
  const profile = generateSimpleProfile(
    maxProfileVel,
    maxProfileAccel,
    maxProfileJerk,
    start,
    goal
  );
  const markers = convertMarkers(
    path,
    profile,
    temporalMarkers,
    displacementMarkers,
    spatialMarkers
  );
  return new Trajectory(path, profile, markers);
}
