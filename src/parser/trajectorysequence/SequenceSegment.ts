import * as rr from "roadrunnerjs";
export class SequenceSegment {
  readonly duration: number;

  readonly startPose: rr.geometry.Pose2d;
  readonly endPose: rr.geometry.Pose2d;
  readonly markers: rr.trajectory.TrajectoryMarker[];

  constructor(
    duration: number,
    startPose: rr.geometry.Pose2d,
    endPose: rr.geometry.Pose2d,
    markers: rr.trajectory.TrajectoryMarker[]
  ) {
    this.duration = duration;
    this.startPose = startPose;
    this.endPose = endPose;
    this.markers = markers;
  }
}

export class TrajectorySegment extends SequenceSegment {
  readonly trajectory: rr.trajectory.Trajectory;

  constructor(trajectory: rr.trajectory.Trajectory) {
    super(trajectory.duration(), trajectory.start(), trajectory.end(), []);
    this.trajectory = trajectory;
  }
}

export class TurnSegment extends SequenceSegment {
  readonly totalRotation: number;
  readonly motionProfile: rr.profile.MotionProfile;

  constructor(
    startPose: rr.geometry.Pose2d,
    totalRotation: number,
    motionProfile: rr.profile.MotionProfile,
    markers: rr.trajectory.TrajectoryMarker[]
  ) {
    super(
      motionProfile.duration(),
      startPose,
      new rr.geometry.Pose2d(
        startPose.x,
        startPose.y,
        rr.util.Angle.norm(startPose.heading + totalRotation)
      ),
      markers
    );

    this.totalRotation = totalRotation;
    this.motionProfile = motionProfile;
  }
}

export class WaitSegment extends SequenceSegment {
  constructor(
    pose: rr.geometry.Pose2d,
    seconds: number,
    markers: rr.trajectory.TrajectoryMarker[]
  ) {
    super(seconds, pose, pose, markers);
  }
}
