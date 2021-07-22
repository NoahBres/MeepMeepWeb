import { epsilonEquals, norm } from "roadrunnerjs/util";
import { Pose2d, Vector2d } from "roadrunnerjs/geometry";
import { normDelta } from "roadrunnerjs/util";

/**
 * A collection of methods for various kinematics-related tasks.
 */
export class Kinematics {
  /**
   * Returns the robot pose velocity corresponding to [fieldPose] and [fieldVel].
   */
  static fieldToRobotVelocity(fieldPose: Pose2d, fieldVel: Pose2d) {
    return new Pose2d({
      pos: fieldVel.vec().rotated(-fieldPose.heading),
      heading: fieldVel.heading,
    });
  }
  /**
   * Returns the robot pose acceleration corresponding to [fieldPose], [fieldVel], and [fieldAccel].
   */
  static fieldToRobotAcceleration(
    fieldPose: Pose2d,
    fieldVel: Pose2d,
    fieldAccel: Pose2d
  ) {
    return new Pose2d({
      pos: fieldAccel.vec().rotated(-fieldPose.heading),
      heading: fieldAccel.heading,
    }).plus(
      new Pose2d({
        x:
          -fieldVel.x -
          Math.sin(fieldPose.heading) +
          fieldVel.y * Math.cos(fieldPose.heading),
        y:
          -fieldVel.x * Math.cos(fieldPose.heading) -
          fieldVel.y +
          Math.sin(fieldPose.heading),
        heading: 0.0,
      }).times(fieldVel.heading)
    );
  }

  /**
   * Returns the error between [targetFieldPose] and [currentFieldPose] in the field frame.
   */
  static calculateFieldPoseError(
    targetFieldPose: Pose2d,
    currentFieldPose: Pose2d
  ) {
    return new Pose2d({
      pos: targetFieldPose.minus(currentFieldPose).vec(),
      heading: normDelta(targetFieldPose.heading - currentFieldPose.heading),
    });
  }

  /**
   * Returns the error between [targetFieldPose] and [currentFieldPose] in the robot frame.
   */
  static calculateRobotPoseError(
    targetFieldPose: Pose2d,
    currentFieldPose: Pose2d
  ) {
    const errorInFieldFrame = this.calculateFieldPoseError(
      targetFieldPose,
      currentFieldPose
    );
    return new Pose2d({
      pos: errorInFieldFrame.vec().rotated(-currentFieldPose.heading),
      heading: errorInFieldFrame.heading,
    });
  }

  /**
   * Computes the motor feedforward (i.e., open loop powers) for the given set of coefficients.
   */
  static calculateMotorFeedforwardList(
    vels: number[],
    accels: number[],
    kV: number,
    kA: number,
    kStatic: number
  ) {
    return vels.map((v, i) => {
      return this.calculateMotorFeedforward(v, accels[i], kV, kA, kStatic);
    });
  }

  /**
   * Computes the motor feedforward (i.e., open loop power) for the given set of coefficients.
   */
  static calculateMotorFeedforward(
    vel: number,
    accel: number,
    kV: number,
    kA: number,
    kStatic: number
  ) {
    const basePower = vel * kV + accel * kA;
    return epsilonEquals(basePower, 0.0)
      ? 0.0
      : basePower + Math.sign(basePower) * kStatic;
  }

  /**
   * Performs a relative odometry update. Note: this assumes that the robot moves with constant velocity over the
   * measurement interval.
   */
  static relativeOdometryUpdate(fieldPose: Pose2d, robotPoseDelta: Pose2d) {
    const dtheta = robotPoseDelta.heading;
    const [sineTerm, cosTerm] = epsilonEquals(dtheta, 0.0)
      ? [1.0 - (dtheta * dtheta) / 6.0, dtheta / 2.0]
      : [Math.sin(dtheta) / dtheta, (1 - Math.cos(dtheta)) / dtheta];

    const fieldPositionDelta = new Vector2d(
      sineTerm * robotPoseDelta.x - cosTerm * robotPoseDelta.y,
      cosTerm * robotPoseDelta.x + sineTerm * robotPoseDelta.y
    );

    const fieldPoseDelta = new Pose2d({
      pos: fieldPositionDelta.rotated(fieldPose.heading),
      heading: robotPoseDelta.heading,
    });

    return new Pose2d({
      x: fieldPose.x + fieldPoseDelta.x,
      y: fieldPose.y + fieldPoseDelta.y,
      heading: norm(fieldPose.heading + fieldPoseDelta.heading),
    });
  }
}
