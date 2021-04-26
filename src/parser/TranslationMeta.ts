// We just pretend all number types (int, double, float, etc.) are numbers since JS numbers are all the same
export type JavaNativeTypes = "boolean" | "number" | "string" | "null";
export type RoadRunnerType =
  | "Trajectory"
  | "TrajectorySequence"
  | "TrajectorySequenceBuilder"
  | "Pose2d"
  | "Vector2d"
  | "TrajectoryVelocityConstraint"
  | "TrajectoryAccelerationConstraint"
  | "MarkerCallback"
  | "TimeProducer"
  | "DisplacementProducer"
  | "SampleMecanumDrive";

export type KnownTypes = JavaNativeTypes | RoadRunnerType | "unknown" | "void";

export type Pose2d = {
  x: number;
  y: number;
  heading: number;
};

export type Vector2d = {
  x: number;
  y: number;
};

export type BuilderCallTypes = {
  name: "splineTo";
  data: {
    endPosisition: Vector2d;
    endTangent: number;
  };
};
export type TrajectorySequenceBuilder = {
  startPose: {
    x: number;
    y: number;
    heading: number;
  };
  builderCalls: unknown[];
};

export type TrajectoryVelocityConstraint = {
  maxVel: number;
  maxAngVel: number;
  trackWidth: number;
};

export type TrajectoryAccelerationConstraint = {
  maxAccel: number;
};

export type TranslationMethod = {
  parameterTypes: KnownTypes[];
  returnType: KnownTypes;
};
export type TranslationMetaType = {
  [key in RoadRunnerType]: {
    methods?: {
      [key: string]: TranslationMethod[];
    };
  };
};
export const TranslationMeta: TranslationMetaType = {
  TrajectorySequenceBuilder: {
    methods: {
      lineTo: [
        {
          parameterTypes: ["Vector2d"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Vector2d",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      lineToConstantHeading: [
        {
          parameterTypes: ["Vector2d"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Vector2d",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      lineToLinearHeading: [
        {
          parameterTypes: ["Pose2d"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Pose2d",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      lineToSplineHeading: [
        {
          parameterTypes: ["Pose2d"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Pose2d",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      strafeTo: [
        {
          parameterTypes: ["Vector2d"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Vector2d",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      forward: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      back: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      strafeLeft: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      strafeRight: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      splineTo: [
        {
          parameterTypes: ["Vector2d", "number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Vector2d",
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      splineToConstantHeading: [
        {
          parameterTypes: ["Vector2d", "number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Vector2d",
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      splineToLinearHeading: [
        {
          parameterTypes: ["Pose2d", "number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Vector2d",
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      splineToSplineHeading: [
        {
          parameterTypes: ["Pose2d", "number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: [
            "Vector2d",
            "number",
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      setTangent: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      setReversed: [
        {
          parameterTypes: ["boolean"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      setConstraints: [
        {
          parameterTypes: [
            "TrajectoryVelocityConstraint",
            "TrajectoryAccelerationConstraint",
          ],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      resetConstraints: [
        {
          parameterTypes: [],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      setVelConstraint: [
        {
          parameterTypes: ["TrajectoryVelocityConstraint"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      resetVelConstraint: [
        {
          parameterTypes: [],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      setAccelConstraint: [
        {
          parameterTypes: ["TrajectoryAccelerationConstraint"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      resetAccelConstraint: [
        {
          parameterTypes: [],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      setTurnConstraint: [
        {
          parameterTypes: ["number", "number"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      resetTurnConstraint: [
        {
          parameterTypes: [],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      addTemporalMarker: [
        {
          parameterTypes: ["MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: ["number", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: ["number", "number", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: ["TimeProducer", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      UNSTABLE_addTemporalMarker: [
        {
          parameterTypes: ["number", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      addSpatialMarker: [
        {
          parameterTypes: ["Vector2d", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      addDisplacementMarker: [
        {
          parameterTypes: ["MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: ["number", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: ["number", "number", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: ["TimeProducer", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      UNSTABLE_addDisplacementMarkerOffset: [
        {
          parameterTypes: ["number", "MarkerCallback"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      turn: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectorySequenceBuilder",
        },
        {
          parameterTypes: ["number", "number", "number"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      waitSeconds: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      addTrajectory: [
        {
          parameterTypes: ["Trajectory"],
          returnType: "TrajectorySequenceBuilder",
        },
      ],
      build: [
        {
          parameterTypes: [],
          returnType: "TrajectorySequence",
        },
      ],
    },
  },
  TrajectorySequence: {},
  Vector2d: {
    // TODO Move the constructor parameter verification here
  },
  Pose2d: {},
  TrajectoryVelocityConstraint: {},
  TrajectoryAccelerationConstraint: {},
  MarkerCallback: {},
  TimeProducer: {},
  DisplacementProducer: {},
  Trajectory: {},
  SampleMecanumDrive: {
    methods: {
      getVelocityConstraint: [
        {
          parameterTypes: ["number", "number", "number"],
          returnType: "TrajectoryVelocityConstraint",
        },
      ],
      getAccelerationConstraint: [
        {
          parameterTypes: ["number"],
          returnType: "TrajectoryAccelerationConstraint",
        },
      ],
    },
  },
};
