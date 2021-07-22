import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { DoubleProgression, expectDerivEquals } from "roadrunnerjs/util";
import {
  AngularVelocityConstraint,
  MinVelocityConstraint,
  ProfileAccelerationConstraint,
  TranslationalVelocityConstraint,
} from "./constraints";
import { TrajectoryBuilder } from "./TrajectoryBuilder";

const VEL_CONSTRAINT = new MinVelocityConstraint([
  new TranslationalVelocityConstraint(5.0),
  new AngularVelocityConstraint(2.0),
]);
const ACCEL_CONSTRAINT = new ProfileAccelerationConstraint(10.0);

test("Trajectory Derivatives", () => {
  const cryptoColWidth = 7.5;
  const stonePose = new Pose2d({ x: 48.0, y: -47.5, heading: Math.PI });
  const trajectory = new TrajectoryBuilder({
    startPose: stonePose,
    startTangent: stonePose.heading,
    baseVelConstraint: VEL_CONSTRAINT,
    baseAccelConstraint: ACCEL_CONSTRAINT,
  })
    .lineTo(new Vector2d(12 - cryptoColWidth, -47.5))
    .splineTo(new Vector2d(16.0, -24.0), Math.PI / 3)
    .build();

  const t = DoubleProgression.fromClosedInterval(
    0.0,
    trajectory.duration(),
    10_000
  );

  const x = t.map((e) => trajectory.get(e).x);
  const velX = t.map((e) => trajectory.velocity(e).x);
  const accelX = t.map((e) => trajectory.acceleration(e).x);

  const y = t.map((e) => trajectory.get(e).y);
  const velY = t.map((e) => trajectory.velocity(e).y);
  const accelY = t.map((e) => trajectory.acceleration(e).y);

  // there is a lot of noise in these numerical derivatives from the new parametrization
  // however the analytic ones are perfect
  expectDerivEquals(x, velX, t.step, 0.05, 0.1);
  expectDerivEquals(velX, accelX, t.step, 0.05, 0.1);

  expectDerivEquals(y, velY, t.step, 0.05, 0.1);
  expectDerivEquals(velY, accelY, t.step, 0.05, 0.1);
});
