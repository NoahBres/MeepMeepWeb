import { epsilonEquals, insert } from "roadrunnerjs/util";
import { DoubleProgression, solveQuadratic } from "roadrunnerjs/util";
import { AccelerationConstraint } from "./AccelerationConstraint";
import { MotionProfile } from "./MotionProfile";
import { MotionProfileBuilder } from "./MotionProfileBuilder";
import { MotionSegment } from "./MotionSegment";
import { MotionState } from "./MotionState";
import { VelocityConstraint } from "./VelocityConstraint";

type EvaluatedConstraint = {
  maxVel: number;
  maxAccel: number;
};

/**
 * Generates a simple motion profile with constant [maxVel], [maxAccel], and [maxJerk]. If [maxJerk] is zero, an
 * acceleration-limited profile will be generated instead of a jerk-limited one. If constraints can't be obeyed,
 * there are two possible fallbacks: If [overshoot] is true, then two profiles will be concatenated (the first one
 * overshoots the goal and the second one reverses back to reach the goal). Otherwise, the highest order constraint
 * (e.g., max jerk for jerk-limited profiles) is repeatedly violated until the goal is achieved.
 *
 * @param start start motion state
 * @param goal goal motion state
 * @param maxVel maximum velocity
 * @param maxAccel maximum acceleration
 * @param maxJerk maximum jerk
 * @param overshoot if true overshoot otherwise violate constraints (see description above)
 */
export function generateSimpleMotionProfile(
  start: MotionState,
  goal: MotionState,
  maxVel: number,
  maxAccel: number,
  maxJerk: number = 0,
  overshoot: boolean = false
): MotionProfile {
  // ensure the goal is always after the start; plan the flipped profile otherwise
  if (goal.x < start.x) {
    return generateSimpleMotionProfile(
      start.flipped(),
      goal.flipped(),
      maxVel,
      maxAccel,
      maxJerk
    ).flipped();
  }

  if (epsilonEquals(maxJerk, 0)) {
    // acceleration-limited profile (trapezoidal)
    const requiredAccel =
      (goal.v * goal.v - start.v * start.v) / (2 * (goal.x - start.x));

    const accelProfile = generateAccelProfile(start, maxVel, maxAccel);
    const decelProfile = generateAccelProfile(
      new MotionState(goal.x, goal.v, -goal.a, goal.j),
      maxVel,
      maxAccel,
      maxJerk
    ).reversed();

    const noCoastProfile = accelProfile.plus(decelProfile);
    const remainingDistance = goal.x - noCoastProfile.end().x;

    if (remainingDistance >= 0) {
      // normal 3-segment profile works
      const deltaT2 = remainingDistance / maxVel;

      return new MotionProfileBuilder(start)
        .appendProfile(accelProfile)
        .appendAccelerationControl(0.0, deltaT2)
        .appendProfile(decelProfile)
        .build();
    } else if (Math.abs(requiredAccel) > maxAccel) {
      if (overshoot) {
        // TODO: is this most efficient? (do we care?)
        return noCoastProfile.plus(
          generateSimpleMotionProfile(
            noCoastProfile.end(),
            goal,
            maxVel,
            maxAccel,
            0,
            true
          )
        );
      } else {
        // single segment profile
        const dt = (goal.v - start.v) / requiredAccel;
        return new MotionProfileBuilder(start)
          .appendAccelerationControl(requiredAccel, dt)
          .build();
      }
    } else if (start.v > maxVel && goal.v > maxVel) {
      // decel, accel
      const roots = solveQuadratic(
        -maxAccel,
        2 * start.v,
        (goal.v * goal.v - start.v * start.v) / (2 * maxAccel) -
          goal.x +
          start.x
      );
      const deltaT1 = Math.min(...roots.filter((e) => e >= 0));
      const deltaT3 = Math.abs(start.v - goal.v) / maxAccel + deltaT1;

      return new MotionProfileBuilder(start)
        .appendAccelerationControl(-maxAccel, deltaT1)
        .appendAccelerationControl(maxAccel, deltaT3)
        .build();
    } else {
      // accel, decel
      const roots = solveQuadratic(
        maxAccel,
        2 * start.v,
        (start.v * start.v - goal.v * goal.v) / (2 * maxAccel) -
          goal.x +
          start.x
      );
      const deltaT1 = Math.min(...roots.filter((e) => e >= 0));
      const deltaT3 = Math.abs(start.v - goal.v) / maxAccel + deltaT1;

      return new MotionProfileBuilder(start)
        .appendAccelerationControl(maxAccel, deltaT1)
        .appendAccelerationControl(-maxAccel, deltaT3)
        .build();
    }
  } else {
    // jerk-limited profile (S-curve)
    const accelerationProfile = generateAccelProfile(
      start,
      maxVel,
      maxAccel,
      maxJerk
    );
    // we leverage symmetry here; deceleration profiles are just reversed acceleration ones with the goal
    // acceleration flipped
    const decelerationProfile = generateAccelProfile(
      new MotionState(goal.x, goal.v, -goal.a, goal.j),
      maxVel,
      maxAccel,
      maxJerk
    ).reversed();

    const noCoastProfile = accelerationProfile.plus(decelerationProfile);
    const remainingDistance = goal.x - noCoastProfile.end().x;

    if (remainingDistance >= 0) {
      // we just need to add a coast segment of appropriate duration
      const deltaT4 = remainingDistance / maxVel;

      return new MotionProfileBuilder(start)
        .appendProfile(accelerationProfile)
        .appendJerkControl(0.0, deltaT4)
        .appendProfile(decelerationProfile)
        .build();
    } else {
      // the profile never reaches maxV
      // thus, we need to compute the peak velocity (0 < peak vel < max vel)
      // we *could* construct a large polynomial expression (i.e., a nasty cubic) and solve it using Cardano's
      // method, some kind of inclusion method like modified Anderson-Bjorck-King, or a host of other methods
      // (see https://link.springer.com/content/pdf/bbm%3A978-3-642-05175-3%2F1.pdf for modified ABK)
      // instead, however, we conduct a binary search as it's sufficiently performant for this use case,
      // requires less code, and is overall significantly more comprehensible

      let upperBound = maxVel;
      let lowerBound = 0.0;
      let iterations = 0;
      while (iterations < 1000) {
        const peakVel = (upperBound + lowerBound) / 2;

        const searchAccelProfile = generateAccelProfile(
          start,
          peakVel,
          maxAccel,
          maxJerk
        );
        const searchDecelProfile = generateAccelProfile(
          goal,
          peakVel,
          maxAccel,
          maxJerk
        ).reversed();

        const searchProfile = searchAccelProfile.plus(searchDecelProfile);

        const error = goal.x - searchProfile.end().x;

        if (epsilonEquals(error, 0.0)) {
          return searchProfile;
        }

        if (error > 0.0) {
          // we undershot so shift the lower bound up
          lowerBound = peakVel;
        } else {
          // we overshot so shift the upper bound down
          upperBound = peakVel;
        }

        iterations++;
      }

      // constraints are not satisfiable
      if (overshoot) {
        return noCoastProfile.plus(
          generateSimpleMotionProfile(
            noCoastProfile.end(),
            goal,
            maxVel,
            maxAccel,
            maxJerk,
            (overshoot = true)
          )
        );
      } else {
        // violate max jerk first
        return generateSimpleMotionProfile(
          start,
          goal,
          maxVel,
          maxAccel,
          0,
          false
        );
      }
    }
  }
}

export function generateAccelProfile(
  start: MotionState,
  maxVel: number,
  maxAccel: number,
  maxJerk: number = 0
): MotionProfile {
  if (epsilonEquals(maxJerk, 0)) {
    // acceleration-limited
    const deltaT1 = Math.abs(start.v - maxVel) / maxAccel;
    const builder = new MotionProfileBuilder(start);
    if (start.v > maxVel) {
      // we need to decelerate
      builder.appendAccelerationControl(-maxAccel, deltaT1);
    } else {
      builder.appendAccelerationControl(maxAccel, deltaT1);
    }

    return builder.build();
  } else {
    // jerk-limited
    // compute the duration and velocity of the first segment
    let deltaT1 = 0;
    let deltaV1 = 0;

    if (start.a > maxAccel) {
      // slow down and see where we are
      deltaT1 = (start.a - maxAccel) / maxJerk;
      deltaV1 = start.a * deltaT1 - 0.5 * maxJerk * deltaT1 * deltaT1;
    } else {
      // otherwise accelerate
      deltaT1 = (maxAccel - start.a) / maxJerk;
      deltaV1 = start.a * deltaT1 + 0.5 * maxJerk * deltaT1 * deltaT1;
    }

    // compute the duration and velocity of the third segment
    const deltaT3 = maxAccel / maxJerk;
    const deltaV3 = maxAccel * deltaT3 - 0.5 * maxJerk * deltaT3 * deltaT3;

    // compute the velocity change required in the second segment
    const deltaV2 = maxVel - start.v - deltaV1 - deltaV3;

    if (deltaV2 < 0.0) {
      // there is no constant acceleration phase
      // the second case checks if we're going to exceed max vel
      if (
        start.a > maxAccel ||
        start.v - maxVel > (start.a * start.a) / (2 * maxJerk)
      ) {
        // problem: we need to cut down on our acceleration but we can't cut our initial decel
        // solution: we'll lengthen our initial decel to -max accel and similarly with our final accel
        // if this results in an over correction, decel instead to a good accel
        const newDeltaT1 = (start.a + maxAccel) / maxJerk;
        const newDeltaV1 =
          start.a * newDeltaT1 - 0.5 * maxJerk * newDeltaT1 * newDeltaT1;

        const newDeltaV2 = maxVel - start.v - newDeltaV1 + deltaV3;

        if (newDeltaV2 > 0.0) {
          // we decelerated too much
          const roots = solveQuadratic(
            -maxJerk,
            2 * start.a,
            start.v - maxVel - (start.a * start.a) / (2 * maxJerk)
          );
          const finalDeltaT1 = Math.min(...roots.filter((x) => x >= 0));
          const finalDeltaT3 = finalDeltaT1 - start.a / maxJerk;

          return new MotionProfileBuilder(start)
            .appendJerkControl(-maxJerk, finalDeltaT1)
            .appendJerkControl(maxJerk, finalDeltaT3)
            .build();
        } else {
          // we're almost good
          const newDeltaT2 = newDeltaV2 / -maxAccel;

          return new MotionProfileBuilder(start)
            .appendJerkControl(-maxJerk, newDeltaT1)
            .appendJerkControl(0.0, newDeltaT2)
            .appendJerkControl(maxJerk, deltaT3)
            .build();
        }
      } else {
        // cut out the constant accel phase and find a shorter delta t1 and delta t3
        const roots = solveQuadratic(
          maxJerk,
          2 * start.a,
          start.v - maxVel + (start.a * start.a) / (2 * maxJerk)
        );
        const newDeltaT1 = Math.min(...roots.filter((x) => x >= 0));
        const newDeltaT3 = newDeltaT1 + start.a / maxJerk;

        return new MotionProfileBuilder(start)
          .appendJerkControl(maxJerk, newDeltaT1)
          .appendJerkControl(-maxJerk, newDeltaT3)
          .build();
      }
    } else {
      // there is a constant acceleration phase
      const deltaT2 = deltaV2 / maxAccel;

      const builder = new MotionProfileBuilder(start);
      if (start.a > maxAccel) {
        builder.appendJerkControl(-maxJerk, deltaT1);
      } else {
        builder.appendJerkControl(maxJerk, deltaT1);
      }

      return builder
        .appendJerkControl(0.0, deltaT2)
        .appendJerkControl(-maxJerk, deltaT3)
        .build();
    }
  }
}

/**
 * Generates a motion profile with dynamic maximum velocity and acceleration. Uses the algorithm described in
 * section 3.2 of [Sprunk2008.pdf](http://www2.informatik.uni-freiburg.de/~lau/students/Sprunk2008.pdf). Warning:
 * Profiles may be generated incorrectly if the endpoint velocity/acceleration values preclude the obedience of the
 * motion constraints. To protect against this, verify the continuity of the generated profile or keep the start and
 * goal velocities at 0.
 *
 * @param start start motion state
 * @param goal goal motion state
 * @param velocityConstraints velocity constraints
 * @param accelerationConstraints acceleration constraints
 * @param resolution separation between constraint samples
 */
export function generateMotionProfile(
  start: MotionState,
  goal: MotionState,
  velocityConstraint: VelocityConstraint,
  accelerationConstraint: AccelerationConstraint,
  resolution: number = 0.25
): MotionProfile {
  if (goal.x < start.x) {
    return generateMotionProfile(
      start.flipped(),
      goal.flipped(),
      { get: (s) => velocityConstraint.get(-s) },
      { get: (s) => accelerationConstraint.get(-s) },
      resolution
    ).flipped();
  }

  const length = goal.x - start.x;
  // dx is an adjusted resolution that fits nicely within length
  const samples = Math.ceil(length / resolution);

  const s = DoubleProgression.fromClosedInterval(0.0, length, samples);
  const constraintsList = s.plus(start.x).map<EvaluatedConstraint>((e) => ({
    maxVel: velocityConstraint.get(e),
    maxAccel: accelerationConstraint.get(e),
  }));

  // compute the forward states
  let forwardStates: [MotionState, number][] = forwardPass(
    new MotionState(0, start.v, start.a),
    s,
    constraintsList
  ).map(([motionState, dx]) => [
    new MotionState(motionState.x + start.x, motionState.v, motionState.a),
    dx,
  ]);

  // compute the backward states
  let backwardStates: [MotionState, number][] = forwardPass(
    new MotionState(0, goal.v, goal.a),
    s,
    constraintsList.reverse()
  )
    .map(
      ([motionState, dx]) =>
        [afterDisplacement(motionState, dx), dx] as [MotionState, number]
    )
    .map(
      ([motionState, dx]) =>
        [
          new MotionState(
            goal.x - motionState.x,
            motionState.v,
            -motionState.a
          ),
          dx,
        ] as [MotionState, number]
    )
    .reverse();

  // merge the forward and backwards states
  const finalStates: [MotionState, number][] = [];
  let i = 0;
  while (i < forwardStates.length && i < backwardStates.length) {
    // retrieve the start states and displacement deltas
    let [forwardStartState, forwardDx] = forwardStates[i];
    let [backwardStartState, backwardDx] = backwardStates[i];

    // if there's a discrepancy in the displacements, split the the longer chunk in two and add the second
    // to the corresponding list; this guarantees that segments are always aligned
    if (!epsilonEquals(forwardDx, backwardDx)) {
      if (forwardDx > backwardDx) {
        // forward longer
        forwardStates = insert(forwardStates, i + 1, [
          afterDisplacement(forwardStartState, backwardDx),
          forwardDx - backwardDx,
        ]);
        forwardDx = backwardDx;
      } else {
        // backward longer
        backwardStates = insert(backwardStates, i + 1, [
          afterDisplacement(backwardStartState, forwardDx),
          backwardDx - forwardDx,
        ]);
        backwardDx = forwardDx;
      }
    }

    // compute the end states (after alignment)
    const forwardEndState = afterDisplacement(forwardStartState, forwardDx);
    const backwardEndState = afterDisplacement(backwardStartState, backwardDx);

    if (forwardStartState.v <= backwardStartState.v) {
      // forward start lower
      if (forwardEndState.v <= backwardEndState.v) {
        // forward end lower
        finalStates.push([forwardStartState, forwardDx]);
      } else {
        // backward end lower
        const thisIntersection = intersection(
          forwardStartState,
          backwardStartState
        );
        finalStates.push([forwardStartState, thisIntersection]);
        finalStates.push([
          afterDisplacement(backwardStartState, thisIntersection),
          backwardDx - thisIntersection,
        ]);
      }
    } else {
      // backward start lower
      if (forwardEndState.v >= backwardEndState.v) {
        // forward end lower
        finalStates.push([backwardStartState, backwardDx]);
      } else {
        // forward end lower
        const thisIntersection = intersection(
          forwardStartState,
          backwardStartState
        );
        finalStates.push([backwardStartState, thisIntersection]);
        finalStates.push([
          afterDisplacement(forwardStartState, thisIntersection),
          forwardDx - thisIntersection,
        ]);
      }
    }

    i++;
  }

  // turn the final states into actual time-parametrized motion segments
  const motionSegments: MotionSegment[] = [];
  finalStates.forEach(([state, stateDx]) => {
    let dt = 0;

    if (epsilonEquals(state.a, 0)) {
      dt = stateDx / state.v;
    } else {
      const discriminant = state.v * state.v + 2 * state.a * stateDx;
      if (epsilonEquals(discriminant, 0)) {
        dt = -state.v / state.a;
      } else {
        dt = (Math.sqrt(discriminant) - state.v) / state.a;
      }
    }

    motionSegments.push(new MotionSegment(state, dt));
  });

  return new MotionProfile(motionSegments);
}

// execute a forward pass that consists of applying maximum acceleration starting at min(last velocity, max vel)
// on a segment-by-segment basis
function forwardPass(
  start: MotionState,
  displacements: DoubleProgression,
  constraints: EvaluatedConstraint[]
): [MotionState, number][] {
  const forwardStates: [MotionState, number][] = [];

  const dx = displacements.step;

  let lastState = start;
  displacements
    .toArray()
    .slice(0, -1)
    .forEach((displacement, i) => {
      const constraint = constraints[i];

      // compute segment constraints
      const maxVel = constraint.maxVel;
      const maxAccel = constraint.maxAccel;

      if (lastState.v > maxVel) {
        // the last velocity exceeds max vel so we just coast
        const state = new MotionState(displacement, maxVel, 0.0);
        forwardStates.push([state, dx]);
        lastState = afterDisplacement(state, dx);
      } else {
        // compute the final velocity assuming max accel
        const finalVel = Math.sqrt(
          lastState.v * lastState.v + 2 * maxAccel * dx
        );
        if (finalVel <= maxVel) {
          // we're still under max vel so we're good
          const state = new MotionState(displacement, lastState.v, maxAccel);
          forwardStates.push([state, dx]);
          lastState = afterDisplacement(state, dx);
        } else {
          // we went over max vel so now we split the segment
          const accelDx =
            (maxVel * maxVel - lastState.v * lastState.v) / (2 * maxAccel);
          const accelState = new MotionState(
            displacement,
            lastState.v,
            maxAccel
          );
          const coastState = new MotionState(
            displacement + accelDx,
            maxVel,
            0.0
          );
          forwardStates.push([accelState, accelDx]);
          forwardStates.push([coastState, dx - accelDx]);
          lastState = afterDisplacement(coastState, dx - accelDx);
        }
      }
    });

  return forwardStates;
}

function afterDisplacement(state: MotionState, dx: number): MotionState {
  const discriminant = state.v * state.v + 2 * state.a * dx;

  if (epsilonEquals(discriminant, 0.0)) {
    return new MotionState(state.x + dx, 0.0, state.a);
  } else {
    return new MotionState(state.x + dx, Math.sqrt(discriminant), state.a);
  }
}

function intersection(state1: MotionState, state2: MotionState): number {
  return (
    (state1.v * state1.v - state2.v * state2.v) / (2 * state2.a - 2 * state1.a)
  );
}
