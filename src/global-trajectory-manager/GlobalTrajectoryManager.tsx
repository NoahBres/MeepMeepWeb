import React, {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useContext,
} from "react";
import { trajectory } from "roadrunnerjs";

type GlobalTrajectoryState = {
  trajectory: trajectory.Trajectory | null;
};

type GlobalTrajectoryActions = {
  type: "setTrajectory";
  trajectory: trajectory.Trajectory;
};

const GlobalTrajectoryReducer = (
  state: GlobalTrajectoryState,
  action: GlobalTrajectoryActions
): GlobalTrajectoryState => {
  switch (action.type) {
    case "setTrajectory":
      return {
        ...state,
        trajectory: action.trajectory,
      };
  }
};

const defaultState: GlobalTrajectoryState = {
  trajectory: null,
};

const GlobalTrajectoryManagerState = createContext<GlobalTrajectoryState>(
  defaultState
);
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
      "useGlobalTrajectoryManagerState must be used within GlobalTrajectorManager"
    );
  }

  return state;
};

const useGlobalTrajectoryManagerDispatch = () => {
  const state = useContext(GlobalTrajectoryManagerDispatch);
  if (typeof state === "undefined") {
    throw new Error(
      "useGlobalTrajectoryManagerDispatch must be used within GlobalTrajectorManager"
    );
  }

  return state;
};

const useGlobalTrajectoryManager = () => {
  return [
    useGlobalTrajectoryManagerState(),
    useGlobalTrajectoryManagerDispatch,
  ];
};

export {
  GlobalTrajectoryManager,
  useGlobalTrajectoryManager,
  useGlobalTrajectoryManagerState,
  useGlobalTrajectoryManagerDispatch,
};
