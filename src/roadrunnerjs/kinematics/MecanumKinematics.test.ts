import { Pose2d } from "roadrunnerjs/geometry";
import { MecanumKinematics } from "./MecanumKinematics";

test("Mecanum Kinematics", () => {
  const actualVelocity = new Pose2d({ x: 2.0, y: 1.0, heading: -Math.PI / 4 });
  const wheelVelocities = MecanumKinematics.robotToWheelVelocities(
    actualVelocity,
    10.0,
    5.0
  );
  const predictedVelocity = MecanumKinematics.wheelToRobotVelocities(
    wheelVelocities,
    10.0,
    5.0
  );
  expect(predictedVelocity.epsilonEquals(actualVelocity)).toBeTruthy();
});
