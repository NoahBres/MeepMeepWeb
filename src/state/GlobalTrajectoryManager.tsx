import React, {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useContext,
} from "react";
import { WaitSegment } from "../parser/trajectorysequence/SequenceSegment";
import { TrajectorySequence } from "../parser/trajectorysequence/TrajectorySequence";

const SEGMENT_COLOR_PROGRESSION = [
  "#EF4444",
  "#F97316",
  "#F59E0B",
  "#EAB308",
  "#84CC16",
  "#22C55E",
  "#10B981",
  "#14B8A6",
  "#06B6D4",
  "#0EA5E9",
  "#3B82F6",
  "#6366F1",
  "#8B5CF6",
  "#A855F7",
  "#D946EF",
  "#EC4899",
  "#F43F5E",
];

export type GlobalTrajectoryState = {
  trajectorySequence: TrajectorySequence | null;
  trajectorySequenceMeta: TrajectorySequenceMeta;
};

export type TrajectorySequenceMeta = {
  segmentColors: string[];
};

type GlobalTrajectoryActions = {
  type: "setTrajectory";
  trajectorySequence: TrajectorySequence;
};

const GlobalTrajectoryReducer = (
  state: GlobalTrajectoryState,
  action: GlobalTrajectoryActions
): GlobalTrajectoryState => {
  switch (action.type) {
    case "setTrajectory": {
      let count = 0;

      const segmentColors = action.trajectorySequence.sequenceList.map((e) => {
        if (e instanceof WaitSegment) return "#64748B";
        return SEGMENT_COLOR_PROGRESSION[
          count++ % SEGMENT_COLOR_PROGRESSION.length
        ];
      });

      return {
        ...state,
        trajectorySequenceMeta: {
          ...state.trajectorySequenceMeta,
          segmentColors,
        },
        trajectorySequence: action.trajectorySequence,
      };
    }
  }
};

const defaultState: GlobalTrajectoryState = {
  trajectorySequence: null,
  trajectorySequenceMeta: {
    segmentColors: [],
  },
};

const GlobalTrajectoryManagerState =
  createContext<GlobalTrajectoryState>(defaultState);
const GlobalTrajectoryManagerDispatch = createContext<
  Dispatch<GlobalTrajectoryActions> | undefined
>(undefined);

const GlobalTrajectoryManager = ({ children }: { children: ReactNode }) => {
  const [globalTrajectoryState, globalTrajectoryDispatch] = useReducer(
    GlobalTrajectoryReducer,
    defaultState
  );

  return (
    <GlobalTrajectoryManagerDispatch.Provider value={globalTrajectoryDispatch}>
      <GlobalTrajectoryManagerState.Provider value={globalTrajectoryState}>
        {children}
      </GlobalTrajectoryManagerState.Provider>
    </GlobalTrajectoryManagerDispatch.Provider>
  );
};

const useGlobalTrajectoryManagerState = () => {
  const state = useContext(GlobalTrajectoryManagerState);
  if (typeof state === "undefined") {
    throw new Error(
      "useGlobalTrajectoryManagerState must be used within GlobalTrajectoryManager"
    );
  }

  return state;
};

const useGlobalTrajectoryManagerDispatch = () => {
  const state = useContext(GlobalTrajectoryManagerDispatch);
  if (typeof state === "undefined") {
    throw new Error(
      "useGlobalTrajectoryManagerDispatch must be used within GlobalTrajectoryManager"
    );
  }

  return state;
};

const useGlobalTrajectoryManager = () => {
  return [
    useGlobalTrajectoryManagerState(),
    useGlobalTrajectoryManagerDispatch(),
  ];
};

export {
  GlobalTrajectoryManager,
  useGlobalTrajectoryManager,
  useGlobalTrajectoryManagerState,
  useGlobalTrajectoryManagerDispatch,
};
