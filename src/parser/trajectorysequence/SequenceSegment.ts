import { geometry, trajectory, profile, util } from "roadrunnerjs";

export class SequenceSegment {
  readonly duration: number;

  readonly startPose: geometry.Pose2d;
  readonly endPose: geometry.Pose2d;
  readonly markers: trajectory.TrajectoryMarker[];

  constructor(
    duration: number,
    startPose: geometry.Pose2d,
    endPose: geometry.Pose2d,
    markers: trajectory.TrajectoryMarker[]
  ) {
    this.duration = duration;
    this.startPose = startPose;
    this.endPose = endPose;
    this.markers = markers;
  }
}

export class TrajectorySegment extends SequenceSegment {
  readonly trajectory: trajectory.Trajectory;

  constructor(trajectory: trajectory.Trajectory) {
    super(trajectory.duration(), trajectory.start(), trajectory.end(), []);
    this.trajectory = trajectory;
  }
}

export class TurnSegment extends SequenceSegment {
  readonly totalRotation: number;
  readonly motionProfile: profile.MotionProfile;

  constructor(
    startPose: geometry.Pose2d,
    totalRotation: number,
    motionProfile: profile.MotionProfile,
    markers: trajectory.TrajectoryMarker[]
  ) {
    super(
      motionProfile.duration(),
      startPose,
      new geometry.Pose2d(
        startPose.x,
        startPose.y,
        util.Angle.norm(startPose.heading + totalRotation)
      ),
      markers
    );

    this.totalRotation = totalRotation;
    this.motionProfile = motionProfile;
  }
}

export class WaitSegment extends SequenceSegment {
  constructor(
    pose: geometry.Pose2d,
    seconds: number,
    markers: trajectory.TrajectoryMarker[]
  ) {
    super(seconds, pose, pose, markers);
  }
}
