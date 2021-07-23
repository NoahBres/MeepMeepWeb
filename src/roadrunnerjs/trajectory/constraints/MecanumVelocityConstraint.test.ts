import { MecanumKinematics } from "./../../kinematics/MecanumKinematics";
import { Kinematics } from "roadrunnerjs/kinematics";
import { DoubleProgression } from "./../../util/DoubleProgression";
import { Pose2d } from "./../../geometry/Pose2d";
import { TrajectoryVelocityConstraint } from "./TrajectoryVelocityConstraint";
import { MecanumVelocityConstraint } from "./MecanumVelocityConstraint";
import { ProfileAccelerationConstraint } from "./ProfileAccelerationConstraint";
import { TrajectoryBuilder } from "../TrajectoryBuilder";
import { Vector2d } from "roadrunnerjs/geometry";

const ACCEL_CONSTRAINT = new ProfileAccelerationConstraint(25.0);
const MAX_WHEEL_VEL = 10.0;
const TRACK_WIDTH = 5.0;

function testWheelVelocityLimiting(
  velConstraint: TrajectoryVelocityConstraint,
  robotToWheelVelocities: (vel: Pose2d) => number[]
) {
  const trajectory = new TrajectoryBuilder({
    startPose: new Pose2d({ x: 0, y: 0, heading: 0 }),
    startTangent: 0,
    baseVelConstraint: velConstraint,
    baseAccelConstraint: ACCEL_CONSTRAINT,
  })
    .splineTo(new Vector2d(15.0, 15.0), Math.PI)
    .splineTo(new Vector2d(5.0, 35.0), Math.PI / 3)
    .build();

  const t = DoubleProgression.fromClosedInterval(
    0,
    trajectory.duration(),
    10_000
  );
  const maxWheelVelMag = Math.max(
    ...t.map((time) => {
      const pose = trajectory.get(time);
      const poseVel = trajectory.velocity(time);
      const robotVel = Kinematics.fieldToRobotVelocity(pose, poseVel);

      return Math.max(
        ...robotToWheelVelocities(robotVel).map((v) => Math.abs(v))
      );
    })
  );

  expect(maxWheelVelMag).toBeLessThan(MAX_WHEEL_VEL + 0.1);
}

test("Mecanum Wheel Velocity Limiting", () => {
  const velConstraint = new MecanumVelocityConstraint(
    MAX_WHEEL_VEL,
    TRACK_WIDTH
  );

  testWheelVelocityLimiting(velConstraint, (robotVel) =>
    MecanumKinematics.robotToWheelVelocities(robotVel, TRACK_WIDTH)
  );
});
