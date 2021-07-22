import { Pose2d } from "roadrunnerjs/geometry";

export class DriveSignal {
  constructor(
    public readonly vel: Pose2d = new Pose2d(),
    public readonly accel: Pose2d = new Pose2d()
  ) {}
}
