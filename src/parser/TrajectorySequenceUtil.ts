import { Pose2d } from "roadrunnerjs/geometry";
import {
  AngularVelocityConstraint,
  MecanumVelocityConstraint,
  MinVelocityConstraint,
  ProfileAccelerationConstraint,
} from "roadrunnerjs/trajectory/constraints";
import { toRadians } from "../util";
import { StandardResult } from "./parser";
import { TrajectorySequence } from "./trajectorysequence/TrajectorySequence";
import { TrajectorySequenceBuilder } from "./trajectorysequence/TrajectorySequenceBuilder";

import {
  TrajectoryAccelerationConstraintType,
  TrajectorySequenceBuilderType,
  TrajectoryVelocityConstraintType,
} from "./TranslationMeta";

export function buildTrajectorySequence(
  parsedBuilder: TrajectorySequenceBuilderType,
  defaultConstraints: {
    velConstraint: TrajectoryVelocityConstraintType;
    accelConstraint: TrajectoryAccelerationConstraintType;
  }
): StandardResult<TrajectorySequence> {
  const tsb = new TrajectorySequenceBuilder(
    new Pose2d({
      x: parsedBuilder.startPose.x,
      y: parsedBuilder.startPose.y,
      heading: parsedBuilder.startPose.heading,
    }),
    null,
    getVelocityConstraint(
      defaultConstraints.velConstraint.maxVel,
      defaultConstraints.velConstraint.maxAngVel,
      defaultConstraints.velConstraint.trackWidth
    ),
    getAccelerationConstraint(defaultConstraints.accelConstraint.maxAccel),
    toRadians(180),
    toRadians(180)
  );

  parsedBuilder.builderCalls.forEach((e) => {
    const method = tsb[e.name];

    if (method) {
      method.apply(tsb, e.data);
    }
  });

  try {
    return {
      success: true,
      warnings: [],
      payload: tsb.build(),
    };
  } catch (error) {
    return {
      success: false,
      errors: [error],
    };
  }
}

function getVelocityConstraint(
  maxVel: number,
  maxAngularVel: number,
  trackWidth: number
) {
  return new MinVelocityConstraint([
    new AngularVelocityConstraint(maxAngularVel),
    new MecanumVelocityConstraint(maxVel, trackWidth, trackWidth, 1),
  ]);
}

function getAccelerationConstraint(maxAccel: number) {
  return new ProfileAccelerationConstraint(maxAccel);
}
