import { norm } from "roadrunnerjs/util";
import { Localizer } from "roadrunnerjs/localization";
import { Pose2d } from "roadrunnerjs/geometry";
import { DriveSignal } from "./DriveSignal";

export abstract class Drive {
  abstract localizer: Localizer;

  private headingOffset = 0.0;

  protected abstract readonly rawExternalHeading: number;

  get externalHeading() {
    return norm(this.rawExternalHeading + this.headingOffset);
  }

  set externalHeading(value: number) {
    this.headingOffset = -this.rawExternalHeading + value;
  }

  get poseEstimate(): Pose2d {
    return this.localizer.poseEstimate;
  }

  set poseEstimate(value: Pose2d) {
    this.localizer.poseEstimate = value;
  }

  get poseVelocity(): Pose2d | null {
    return this.localizer.poseVelocity;
  }

  updatePoseEstimate() {
    this.localizer.update();
  }

  abstract setDriveSignal(driveSignal: DriveSignal): void;

  abstract setDrivePower(drivePower: Pose2d): void;

  getExternalHeadingVelocity(): number | null {
    return null;
  }
}
