import { Pose2d } from "roadrunnerjs/geometry";

export interface Localizer {
  poseEstimate: Pose2d;
  poseVelocity: Pose2d | null;

  update: () => void;
}
