import { Pose2d } from "roadrunnerjs/geometry";
import { MotionProfile } from "roadrunnerjs/profile/MotionProfile";
import { Trajectory, TrajectoryMarker } from "roadrunnerjs/trajectory";
import { norm } from "roadrunnerjs/util";

export class SequenceSegment {
  readonly duration: number;

  readonly startPose: Pose2d;
  readonly endPose: Pose2d;
  readonly markers: TrajectoryMarker[];

  constructor(
    duration: number,
    startPose: Pose2d,
    endPose: Pose2d,
    markers: TrajectoryMarker[]
  ) {
    this.duration = duration;
    this.startPose = startPose;
    this.endPose = endPose;
    this.markers = markers;
  }
}

export class TrajectorySegment extends SequenceSegment {
  readonly trajectory: Trajectory;

  constructor(trajectory: Trajectory) {
    super(trajectory.duration(), trajectory.start(), trajectory.end(), []);
    this.trajectory = trajectory;
  }
}

export class TurnSegment extends SequenceSegment {
  readonly totalRotation: number;
  readonly motionProfile: MotionProfile;

  constructor(
    startPose: Pose2d,
    totalRotation: number,
    motionProfile: MotionProfile,
    markers: TrajectoryMarker[]
  ) {
    super(
      motionProfile.duration(),
      startPose,
      new Pose2d({
        x: startPose.x,
        y: startPose.y,
        heading: norm(startPose.heading + totalRotation),
      }),
      markers
    );

    this.totalRotation = totalRotation;
    this.motionProfile = motionProfile;
  }
}

export class WaitSegment extends SequenceSegment {
  constructor(pose: Pose2d, seconds: number, markers: TrajectoryMarker[]) {
    super(seconds, pose, pose, markers);
  }
}
