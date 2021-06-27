import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useEffect,
} from "react";
import { assign, createMachine, InterpreterFrom } from "xstate";
import { useActor, useInterpret, useMachine } from "@xstate/react";

import { useGlobalTrajectoryManagerState } from "./GlobalTrajectoryManager";

type TimelineStateContext = {
  duration: number;
  currentTime: number;

  stateBeforeDragging: "playing" | "paused";
};

type TimelineStateEvent =
  | { type: "INCREMENT.TIME"; deltaTime: number }
  | { type: "SET.TIME"; time: number }
  | { type: "SET.TRAJECTORY.SEQUENCE"; duration: number }
  | { type: "CLEAR.TRAJECTORY.SEQUENCE" }
  | { type: "TOGGLE" }
  | { type: "DRAG" }
  | { type: "RELEASE" };

const timelineStateMachine = createMachine<
  TimelineStateContext,
  TimelineStateEvent
>({
  id: "timelineState",
  context: {
    stateBeforeDragging: "playing",
    duration: -1,
    currentTime: -1,
  },
  initial: "no-trajectory",
  states: {
    "no-trajectory": {
      on: {
        "SET.TRAJECTORY.SEQUENCE": {
          target: "playing",
          actions: assign((context, event) => ({
            duration: event.duration,
            currentTime: 0,
          })),
        },
      },
    },
    playing: {
      on: {
        TOGGLE: "paused",
        DRAG: {
          target: "dragging",
          actions: assign({
            stateBeforeDragging: (_) => "playing",
          }),
        },
        "INCREMENT.TIME": {
          actions: assign({
            currentTime: (context, event) => {
              if (context.currentTime >= context.duration)
                return context.currentTime - context.duration + event.deltaTime;
              return context.currentTime + event.deltaTime;
            },
          }),
        },
      },
    },
    paused: {
      on: {
        TOGGLE: "playing",
        DRAG: {
          target: "dragging",
          actions: assign({
            stateBeforeDragging: (_) => "paused",
          }),
        },
      },
    },
    dragging: {
      on: {
        RELEASE: [
          {
            target: "playing",
            cond: (context) => context.stateBeforeDragging === "playing",
          },
          {
            target: "paused",
            cond: (context) => context.stateBeforeDragging === "paused",
          },
        ],
      },
    },
  },
  on: {
    "SET.TIME": {
      actions: assign({ currentTime: (context, event) => event.time }),
    },
  },
});

type GlobalTimelineManagerContextType = {
  timelineManagerService: InterpreterFrom<typeof timelineStateMachine>;
};

const GlobalTimelineManagerContext = createContext(
  {} as GlobalTimelineManagerContextType
);

const GlobalTimelineStateManager = ({ children }: { children: ReactNode }) => {
  const timelineManagerService = useInterpret(timelineStateMachine);
  const [state, send] = useActor(timelineManagerService);

  const globalTrajectoryManagerState = useGlobalTrajectoryManagerState();

  const requestAnimationFrameRef = useRef(0);
  const previousTimeRef = useRef(-1);

  function sliderProgressLoop(time: number) {
    if (previousTimeRef.current !== -1) {
      const dt = time - previousTimeRef.current;

      if (state.matches("playing"))
        send({ type: "INCREMENT.TIME", deltaTime: dt * 0.001 });
    }

    previousTimeRef.current = time;

    requestAnimationFrameRef.current =
      requestAnimationFrame(sliderProgressLoop);
  }

  useEffect(() => {
    if (globalTrajectoryManagerState.trajectorySequence) {
      send({
        type: "SET.TRAJECTORY.SEQUENCE",
        duration: globalTrajectoryManagerState.trajectorySequence.duration(),
      });
    } else {
      send({ type: "CLEAR.TRAJECTORY.SEQUENCE" });
    }

    return () => {
      send({ type: "CLEAR.TRAJECTORY.SEQUENCE" });
    };
  }, [globalTrajectoryManagerState.trajectorySequence]);

  useEffect(() => {
    requestAnimationFrameRef.current =
      requestAnimationFrame(sliderProgressLoop);
    return () => cancelAnimationFrame(requestAnimationFrameRef.current);
  });

  return (
    <GlobalTimelineManagerContext.Provider value={{ timelineManagerService }}>
      {children}
    </GlobalTimelineManagerContext.Provider>
  );
};

const useGlobalTimelineManager = () => {
  const service = useContext(GlobalTimelineManagerContext);

  if (typeof service === "undefined") {
    throw new Error(
      "useGlobalTimelineManagerState must be used within GlobalTrajectorManager"
    );
  }

  return useActor(service.timelineManagerService);
};

export { GlobalTimelineStateManager, useGlobalTimelineManager };
