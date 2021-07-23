import { Pose2d } from "roadrunnerjs/geometry";
import { Kinematics, MecanumKinematics } from "roadrunnerjs/kinematics";
import { Localizer } from "roadrunnerjs/localization";
import { normDelta } from "roadrunnerjs/util";

import { Drive } from "./Drive";
import { DriveSignal } from "./DriveSignal";

export abstract class MecanumDrive extends Drive {
  constructor(
    private readonly kV: number,
    private readonly kA: number,
    private readonly kStatic: number,
    private readonly trackWidth: number,
    private readonly wheelBase: number = trackWidth,
    private readonly lateralMultiplier: number = 1
  ) {
    super();
  }

  static MecanumLocalizer = class implements Localizer {
    private _poseEstimate = new Pose2d();
    get poseEstimate() {
      return this._poseEstimate;
    }

    set poseEstimate(value: Pose2d) {
      this.lastWheelPositions = [];
      this.lastExtHeading = null;
      if (this.useExternalHeading) this.drive.externalHeading = value.heading;

      this._poseEstimate = value;
    }

    poseVelocity: Pose2d | null = null;

    private lastWheelPositions: number[] = [];
    private lastExtHeading: number | null = null;

    constructor(
      public readonly drive: MecanumDrive,
      private readonly useExternalHeading: boolean = true
    ) {}

    update() {
      const wheelPositions = this.drive.getWheelPositions();
      const extHeading = this.useExternalHeading
        ? this.drive.externalHeading
        : null;
      if (this.lastWheelPositions.length !== 0) {
        const wheelDeltas = wheelPositions.map(
          (p, i) => p - this.lastWheelPositions[i]
        );
        const robotPoseDelta = MecanumKinematics.wheelToRobotVelocities(
          wheelDeltas,
          this.drive.trackWidth,
          this.drive.wheelBase,
          this.drive.lateralMultiplier
        );
        const finalHeadingDelta = this.useExternalHeading
          ? normDelta(extHeading ?? 0 - (this.lastExtHeading ?? 0))
          : robotPoseDelta.heading;

        this._poseEstimate = Kinematics.relativeOdometryUpdate(
          this._poseEstimate,
          new Pose2d({ pos: robotPoseDelta.vec(), heading: finalHeadingDelta })
        );
      }

      const wheelVelocities = this.drive.getWheelVelocities();
      const extHeadingVel = this.drive.getExternalHeadingVelocity();
      if (wheelVelocities !== null) {
        this.poseVelocity = MecanumKinematics.wheelToRobotVelocities(
          wheelVelocities,
          this.drive.trackWidth,
          this.drive.wheelBase,
          this.drive.lateralMultiplier
        );

        if (this.useExternalHeading && extHeadingVel !== null) {
          this.poseVelocity = new Pose2d({
            pos: this.poseVelocity.vec(),
            heading: extHeadingVel,
          });
        }
      }

      this.lastWheelPositions = wheelPositions;
      this.lastExtHeading = extHeading;
    }
  };

  localizer: Localizer = new MecanumDrive.MecanumLocalizer(this);

  setDriveSignal(driveSignal: DriveSignal) {
    const velocities = MecanumKinematics.robotToWheelVelocities(
      driveSignal.vel,
      this.trackWidth,
      this.wheelBase,
      this.lateralMultiplier
    );

    const accelerations = MecanumKinematics.robotToWheelAccelerations(
      driveSignal.accel,
      this.trackWidth,
      this.wheelBase,
      this.lateralMultiplier
    );

    const powers = Kinematics.calculateMotorFeedforwardList(
      velocities,
      accelerations,
      this.kV,
      this.kA,
      this.kStatic
    );
    this.setMotorPowers(powers[0], powers[1], powers[2], powers[3]);
  }

  setDrivePower(drivePower: Pose2d) {
    const powers = MecanumKinematics.robotToWheelVelocities(
      drivePower,
      1.0,
      1.0,
      this.lateralMultiplier
    );

    this.setMotorPowers(powers[0], powers[1], powers[2], powers[3]);
  }

  /**
   * Sets the following motor powers (normalized voltages). All arguments are on the interval `[-1.0, 1.0]`.
   */
  abstract setMotorPowers(
    frontLeft: number,
    rearLeft: number,
    rearRight: number,
    frontRight: number
  ): void;

  /**
   * Returns the positions of the wheels in linear distance units. Positions should exactly match the ordering in
   * [setMotorPowers].
   */
  abstract getWheelPositions(): number[];

  /**
   * Returns the velocities of the wheels in linear distance units. Positions should exactly match the ordering in
   * [setMotorPowers].
   */
  abstract getWheelVelocities(): number[] | null;
}
