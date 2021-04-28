import { trajectory, geometry, util, profile } from "roadrunnerjs";
import {
  SequenceSegment,
  TrajectorySegment,
  TurnSegment,
  WaitSegment,
} from "./SequenceSegment";
import { toRadians } from "../../util";

export class TrajectorySequenceBuilder {
  [key: string]: any;

  private readonly resolution = 0.25;

  private readonly baseVelConstraint: trajectory.constraints.TrajectoryVelocityConstraint;
  private readonly baseAccelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint;

  private currentVelConstraint: trajectory.constraints.TrajectoryVelocityConstraint;
  private currentAccelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint;

  private readonly baseTurnConstraintMaxAngVel: number;
  private readonly baseTurnConstraintMaxAngAccel: number;

  private currentTurnConstraintMaxAngVel: number;
  private currentTurnConstraintMaxAngAccel: number;

  private sequenceSegments: SequenceSegment[];

  private readonly temporalMarkers: trajectory.TemporalMarker[];
  private readonly displacementMarkers: trajectory.DisplacementMarker[];
  private readonly spatialMarkers: trajectory.SpatialMarker[];

  private lastPose: geometry.Pose2d;

  private tangentOffset: number;

  private setAbsoluteTangent: boolean;
  private absoluteTangent: number;

  private currentTrajectoryBuilder: trajectory.TrajectoryBuilder | null;

  private currentDuration: number;
  private currentDisplacement: number;

  private lastDurationTraj: number;
  private lastDisplacementTraj: number;

  constructor(
    startPose: geometry.Pose2d,
    startTangent: number | null,
    baseVelConstraint: trajectory.constraints.TrajectoryVelocityConstraint,
    baseAccelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint,
    baseTurnConstraintMaxAngVel: number,
    baseTurnConstraintMaxAngAccel: number
  ) {
    this.baseVelConstraint = baseVelConstraint;
    this.baseAccelConstraint = baseAccelConstraint;

    this.currentVelConstraint = baseVelConstraint;
    this.currentAccelConstraint = baseAccelConstraint;

    this.baseTurnConstraintMaxAngVel = baseTurnConstraintMaxAngVel;
    this.baseTurnConstraintMaxAngAccel = baseTurnConstraintMaxAngAccel;

    this.currentTurnConstraintMaxAngVel = baseTurnConstraintMaxAngVel;
    this.currentTurnConstraintMaxAngAccel = baseTurnConstraintMaxAngAccel;

    this.sequenceSegments = [];

    this.temporalMarkers = [];
    this.displacementMarkers = [];
    this.spatialMarkers = [];

    this.lastPose = startPose;

    this.tangentOffset = 0.0;

    this.setAbsoluteTangent = startTangent != null;
    this.absoluteTangent = startTangent != null ? startTangent : 0.0;

    this.currentTrajectoryBuilder = null;

    this.currentDuration = 0.0;
    this.currentDisplacement = 0.0;

    this.lastDurationTraj = 0.0;
    this.lastDisplacementTraj = 0.0;
  }

  lineTo(endPosition: geometry.Vector2d): TrajectorySequenceBuilder {
    return this.addPath(() =>
      this.currentTrajectoryBuilder?.lineTo(
        endPosition,
        this.currentVelConstraint,
        this.currentAccelConstraint
      )
    );
  }

  lineToConstantHeading(
    endPosition: geometry.Vector2d
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.lineToConstantHeading(
        endPosition,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  lineToLinearHeading(endPose: geometry.Pose2d): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.lineToLinearHeading(
        endPose,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  lineToSplineHeading(endPose: geometry.Pose2d): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.lineToSplineHeading(
        endPose,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  strafeTo(endPosition: geometry.Vector2d): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.strafeTo(
        endPosition,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  forward(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.forward(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  back(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.back(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  strafeLeft(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.strafeLeft(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  strafeRight(distance: number): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.strafeRight(
        distance,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineTo(
    endPosition: geometry.Vector2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineTo(
        endPosition,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineToConstantHeading(
    endPosition: geometry.Vector2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineToConstantHeading(
        endPosition,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineToLinearHeading(
    endPose: geometry.Pose2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineToLinearHeading(
        endPose,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  splineToSplineHeading(
    endPose: geometry.Pose2d,
    endHeading: number
  ): TrajectorySequenceBuilder {
    return this.addPath(() => {
      this.currentTrajectoryBuilder?.splineToSplineHeading(
        endPose,
        endHeading,
        this.currentVelConstraint,
        this.currentAccelConstraint
      );
    });
  }

  private addPath(callback: () => void): TrajectorySequenceBuilder {
    if (this.currentTrajectoryBuilder === null) this.newPath();
    if (this.currentTrajectoryBuilder === null) return this;

    try {
      callback();
    } catch (e) {
      if (e.name === "PathContinuityViolationException") {
        this.newPath();
        callback();
      } else {
        throw e;
      }
    }

    const builtTraj: trajectory.Trajectory = this.currentTrajectoryBuilder.build();

    const durationDifference = builtTraj.duration() - this.lastDurationTraj;
    const displacementDifference =
      builtTraj.path.length() - this.lastDisplacementTraj;

    this.lastPose = builtTraj.end();
    this.currentDuration += durationDifference;
    this.currentDisplacement += displacementDifference;

    this.lastDurationTraj = builtTraj.duration();
    this.lastDisplacementTraj = builtTraj.path.length();

    return this;
  }

  setTangent(tangent: number): TrajectorySequenceBuilder {
    this.setAbsoluteTangent = true;
    this.absoluteTangent = tangent;

    this.pushPath();

    return this;
  }

  private setTangentOffset(offset: number): TrajectorySequenceBuilder {
    this.setAbsoluteTangent = false;

    this.tangentOffset = offset;
    this.pushPath();

    return this;
  }

  setReversed(reversed: boolean): TrajectorySequenceBuilder {
    return reversed
      ? this.setTangentOffset(toRadians(180.0))
      : this.setTangentOffset(0.0);
  }

  setConstraints(
    velConstraint: trajectory.constraints.TrajectoryVelocityConstraint,
    accelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint
  ): TrajectorySequenceBuilder {
    this.currentVelConstraint = velConstraint;
    this.currentAccelConstraint = accelConstraint;

    return this;
  }

  resetConstraints(): TrajectorySequenceBuilder {
    this.currentVelConstraint = this.baseVelConstraint;
    this.currentAccelConstraint = this.baseAccelConstraint;

    return this;
  }

  setVelConstraint(
    velConstraint: trajectory.constraints.TrajectoryVelocityConstraint
  ): TrajectorySequenceBuilder {
    console.log(velConstraint);
    this.currentVelConstraint = velConstraint;

    return this;
  }

  resetVelConstraint(): TrajectorySequenceBuilder {
    this.currentVelConstraint = this.baseVelConstraint;

    return this;
  }

  setAccelConstraint(
    accelConstraint: trajectory.constraints.TrajectoryAccelerationConstraint
  ): TrajectorySequenceBuilder {
    this.currentAccelConstraint = accelConstraint;

    return this;
  }

  resetAccelConstraint(): TrajectorySequenceBuilder {
    this.currentAccelConstraint = this.baseAccelConstraint;

    return this;
  }

  setTurnConstraint(
    maxAngVel: number,
    maxAngAccel: number
  ): TrajectorySequenceBuilder {
    this.currentTurnConstraintMaxAngVel = maxAngVel;
    this.currentTurnConstraintMaxAngAccel = maxAngAccel;

    return this;
  }

  resetTurnConstraint(): TrajectorySequenceBuilder {
    this.currentTurnConstraintMaxAngVel = this.baseTurnConstraintMaxAngVel;
    this.currentTurnConstraintMaxAngAccel = this.baseTurnConstraintMaxAngAccel;

    return this;
  }

  turn(
    angle: number,
    maxAngVel: number = this.currentTurnConstraintMaxAngVel,
    maxAngAccel: number = this.currentTurnConstraintMaxAngAccel
  ): TrajectorySequenceBuilder {
    this.pushPath();

    const turnProfile = profile.MotionProfileGenerator.generateSimpleMotionProfile(
      new profile.MotionState(this.lastPose.heading, 0.0, 0.0, 0.0),
      new profile.MotionState(this.lastPose.heading + angle, 0.0, 0.0, 0.0),
      maxAngVel,
      maxAngAccel,
      0,
      false
    );

    this.sequenceSegments.push(
      new TurnSegment(this.lastPose, angle, turnProfile, [])
    );

    this.lastPose = new geometry.Pose2d(
      this.lastPose.x,
      this.lastPose.y,
      util.Angle.norm(this.lastPose.heading + angle)
    );

    this.currentDuration += turnProfile.duration();

    return this;
  }

  waitSeconds(seconds: number): TrajectorySequenceBuilder {
    this.pushPath();
    this.sequenceSegments.push(new WaitSegment(this.lastPose, seconds, []));

    this.currentDuration += seconds;
    return this;
  }

  addTrajectory(trajectory: trajectory.Trajectory) {
    this.pushPath();

    this.sequenceSegments.push(new TrajectorySegment(trajectory));
    return this;
  }

  private pushPath() {
    if (this.currentTrajectoryBuilder !== null) {
      const builtTraj: trajectory.Trajectory = this.currentTrajectoryBuilder.build();
      this.sequenceSegments.push(new TrajectorySegment(builtTraj));
    }

    this.currentTrajectoryBuilder = null;
  }

  private newPath() {
    if (this.currentTrajectoryBuilder != null) this.pushPath();

    this.lastDurationTraj = 0.0;
    this.lastDisplacementTraj = 0.0;

    const tangent = this.setAbsoluteTangent
      ? this.absoluteTangent
      : util.Angle.norm(this.lastPose.heading + this.tangentOffset);

    this.currentTrajectoryBuilder = new trajectory.TrajectoryBuilder(
      this.lastPose,
      tangent,
      null,
      null,
      this.currentVelConstraint,
      this.currentAccelConstraint,
      new profile.MotionState(0, 0, 0, 0),
      this.resolution
    );
  }

  // TODO Finish this
  build() {
    this.pushPath();

    const globalMarkers: trajectory.TrajectoryMarker[] = this.convertMarkersToGlobal(
      this.sequenceSegments,
      this.temporalMarkers,
      this.displacementMarkers,
      this.spatialMarkers
    );

    // return new TrajectorySequence(projectGlobalMarkersToLocalSegments(globalMarkers, sequenceSegments));
  }

  convertMarkersToGlobal(
    sequenceSegments: SequenceSegment[],
    temporalMarkers: trajectory.TemporalMarker[],
    displacementMarkers: trajectory.DisplacementMarker[],
    spatialMarkers: trajectory.SpatialMarker[]
  ): trajectory.TrajectoryMarker[] {
    const trajectoryMarkers: trajectory.TrajectoryMarker[] = [
      ...temporalMarkers.map(
        (e) =>
          new trajectory.TrajectoryMarker(
            e.producer.produce(this.currentDuration),
            e.callback
          )
      ),
      // ...displacementMarkers.map(
      //   (e) =>
      //     new trajectory.TrajectoryMarker(
      //       displacementToTime(this.sequenceSegments),
      //       e.producer.produce(this.currentDisplacement)
      //     )
      // ),
    ];

    // // Convert displacement markers
    // for (DisplacementMarker marker : displacementMarkers) {
    //   double time = displacementToTime(
    //           sequenceSegments,
    //           marker.getProducer().produce(currentDisplacement)
    //   );

    //   trajectoryMarkers.add(
    //           new TrajectoryMarker(
    //                   time,
    //                   marker.getCallback()
    //           )
    //   );
    // }

    // // Convert spatial markers
    // for (SpatialMarker marker : spatialMarkers) {
    //   trajectoryMarkers.add(
    //           new TrajectoryMarker(
    //                   pointToTime(sequenceSegments, marker.getPoint()),
    //                   marker.getCallback()
    //           )
    //   );
    // }

    return trajectoryMarkers;
  }

  // private List<SequenceSegment> projectGlobalMarkersToLocalSegments(List<TrajectoryMarker> markers, List<SequenceSegment> sequenceSegments) {
  // if (sequenceSegments.isEmpty()) return Collections.emptyList();

  // double totalSequenceDuration = 0;
  // for (SequenceSegment segment : sequenceSegments) {
  //   totalSequenceDuration += segment.getDuration();
  // }

  // for (TrajectoryMarker marker : markers) {
  //   SequenceSegment segment = null;
  //   int segmentIndex = 0;
  //   double segmentOffsetTime = 0;

  //   double currentTime = 0;
  //   for (int i = 0; i < sequenceSegments.size(); i++) {
  //       SequenceSegment seg = sequenceSegments.get(i);

  //       double markerTime = Math.min(marker.getTime(), totalSequenceDuration);

  //       if (currentTime + seg.getDuration() >= markerTime) {
  //           segment = seg;
  //           segmentIndex = i;
  //           segmentOffsetTime = markerTime - currentTime;

  //           break;
  //       } else {
  //           currentTime += seg.getDuration();
  //       }
  //   }

  //   SequenceSegment newSegment = null;

  //   if (segment instanceof WaitSegment) {
  //       List<TrajectoryMarker> newMarkers = segment.getMarkers();
  //       newMarkers.add(new TrajectoryMarker(segmentOffsetTime, marker.getCallback()));

  //       WaitSegment thisSegment = (WaitSegment) segment;
  //       newSegment = new WaitSegment(thisSegment.getStartPose(), thisSegment.getDuration(), thisSegment.getMarkers());
  //   } else if (segment instanceof TurnSegment) {
  //       List<TrajectoryMarker> newMarkers = segment.getMarkers();
  //       newMarkers.add(new TrajectoryMarker(segmentOffsetTime, marker.getCallback()));

  //       TurnSegment thisSegment = (TurnSegment) segment;
  //       newSegment = new TurnSegment(thisSegment.getStartPose(), thisSegment.getTotalRotation(), thisSegment.getMotionProfile(), thisSegment.getMarkers());
  //   } else if (segment instanceof TrajectorySegment) {
  //       TrajectorySegment thisSegment = (TrajectorySegment) segment;

  //       List<TrajectoryMarker> newMarkers = thisSegment.getTrajectory().getMarkers();
  //       newMarkers.add(new TrajectoryMarker(segmentOffsetTime, marker.getCallback()));

  //       newSegment = new TrajectorySegment(new Trajectory(thisSegment.getTrajectory().getPath(), thisSegment.getTrajectory().getProfile(), newMarkers));
  //   }

  //   sequenceSegments.set(segmentIndex, newSegment);
  // }

  // return sequenceSegments;
  // }

  // // Taken from Road Runner's TrajectoryGenerator.displacementToTime() since it's private
  // // note: this assumes that the profile position is monotonic increasing
  // private Double motionProfileDisplacementToTime(MotionProfile profile, double s) {
  // double tLo = 0.0;
  // double tHi = profile.duration();
  // while (!(Math.abs(tLo - tHi) < 1e-6)) {
  //   double tMid = 0.5 * (tLo + tHi);
  //   if (profile.get(tMid).getX() > s) {
  //       tHi = tMid;
  //   } else {
  //       tLo = tMid;
  //   }
  // }
  // return 0.5 * (tLo + tHi);
  // }

  // private Double displacementToTime(List<SequenceSegment> sequenceSegments, double s) {
  // double currentTime = 0.0;
  // double currentDisplacement = 0.0;

  // for (SequenceSegment segment : sequenceSegments) {
  //   if (segment instanceof TrajectorySegment) {
  //       TrajectorySegment thisSegment = (TrajectorySegment) segment;

  //       double segmentLength = thisSegment.getTrajectory().getPath().length();

  //       if (currentDisplacement + segmentLength > s) {
  //           double target = s - currentDisplacement;
  //           double timeInSegment = motionProfileDisplacementToTime(
  //                   thisSegment.getTrajectory().getProfile(),
  //                   target
  //           );

  //           return currentTime + timeInSegment;
  //       } else {
  //           currentDisplacement += segmentLength;
  //           currentTime += thisSegment.getTrajectory().duration();
  //       }
  //   } else {
  //       currentTime += segment.getDuration();
  //   }
  // }

  // return 0.0;
  // }

  // private Double pointToTime(List<SequenceSegment> sequenceSegments, Vector2d point) {
  // class ComparingPoints {
  //   private final double distanceToPoint;
  //   private final double totalDisplacement;
  //   private final double thisPathDisplacement;

  //   public ComparingPoints(double distanceToPoint, double totalDisplacement, double thisPathDisplacement) {
  //       this.distanceToPoint = distanceToPoint;
  //       this.totalDisplacement = totalDisplacement;
  //       this.thisPathDisplacement = thisPathDisplacement;
  //   }
  // }

  // List<ComparingPoints> projectedPoints = new ArrayList<>();

  // for (SequenceSegment segment : sequenceSegments) {
  //   if (segment instanceof TrajectorySegment) {
  //       TrajectorySegment thisSegment = (TrajectorySegment) segment;

  //       double displacement = thisSegment.getTrajectory().getPath().project(point, 0.25);
  //       Vector2d projectedPoint = thisSegment.getTrajectory().getPath().get(displacement).vec();
  //       double distanceToPoint = point.minus(projectedPoint).norm();

  //       double totalDisplacement = 0.0;

  //       for (ComparingPoints comparingPoint : projectedPoints) {
  //           totalDisplacement += comparingPoint.totalDisplacement;
  //       }

  //       totalDisplacement += displacement;

  //       projectedPoints.add(new ComparingPoints(distanceToPoint, displacement, totalDisplacement));
  //   }
  // }

  // ComparingPoints closestPoint = null;

  // for (ComparingPoints comparingPoint : projectedPoints) {
  //   if (closestPoint == null) {
  //       closestPoint = comparingPoint;
  //       continue;
  //   }

  //   if (comparingPoint.distanceToPoint < closestPoint.distanceToPoint)
  //       closestPoint = comparingPoint;
  // }

  // return displacementToTime(sequenceSegments, closestPoint.thisPathDisplacement);
  // }
}
