import React, { useEffect, useRef, useState } from "react";

import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

import { useGlobalTrajectoryManagerState } from "../../global-trajectory-manager/GlobalTrajectoryManager";

import styles from "./Timeline.module.css";

type Props = {
  className?: string;
};

type TimelineStateContext = {};

const timelineStateMachine = createMachine<TimelineStateContext>({
  id: "timelineState",
  initial: "playing",
  context: {},
  states: {
    playing: {
      on: { TOGGLE: "paused" },
    },
    paused: {
      on: { TOGGLE: "playing" },
    },
    dragging: {},
  },
});

const Timeline = ({ className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const globalTrajectoryManagerState = useGlobalTrajectoryManagerState();

  const requestAnimationFrameRef = useRef(0);
  const previousTimeRef = useRef(-1);

  const [currentTime, setCurrentTime] = useState(0);
  const [timelineState, sendTimelineState] = useMachine(timelineStateMachine);

  const errorState =
    globalTrajectoryManagerState.trajectorySequence === null
      ? "no-trajectory-sequence"
      : globalTrajectoryManagerState.trajectorySequence?.sequenceList.length ===
        0
      ? "empty-trajectory-sequence"
      : "success";

  function sliderProgressLoop(time: number) {
    if (previousTimeRef.current !== -1) {
      const dt = time - previousTimeRef.current;

      if (timelineState.matches("playing")) {
        setCurrentTime((prevTime) => {
          if (
            !globalTrajectoryManagerState.trajectorySequence ||
            prevTime >=
              globalTrajectoryManagerState.trajectorySequence?.duration()
          )
            return 0;

          return prevTime + dt * 0.001;
        });
      }
    }

    previousTimeRef.current = time;

    requestAnimationFrameRef.current =
      requestAnimationFrame(sliderProgressLoop);
  }

  useEffect(() => {
    const onPress = (event: KeyboardEvent) => {
      if (event.code === "Space") sendTimelineState("TOGGLE");
    };

    containerRef.current?.addEventListener("keydown", onPress);

    return () => containerRef.current?.removeEventListener("keydown", onPress);
  }, []);

  useEffect(() => {
    requestAnimationFrameRef.current =
      requestAnimationFrame(sliderProgressLoop);
    return () => cancelAnimationFrame(requestAnimationFrameRef.current);
  });

  return (
    <div
      className={`relative h-14 w-4/5 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-40 transition-all ${className}`}
      ref={containerRef}
      tabIndex={0}
    >
      <h1
        className="absolute top-0 text-3xl font-extrabold tracking-wide text-blue-700 text-opacity-80 left-6"
        style={{ transform: "translateY(-1.48rem)" }}
      >
        <button onClick={() => sendTimelineState("TOGGLE")}>
          {timelineState.matches("paused") ? "⏸" : "⏲"}
        </button>{" "}
        Timeline
      </h1>
      <div className="absolute top-0 left-0 w-full border border-blue-200 rounded-md shadow-lg h-14 bg-gray-50">
        {errorState === "success" ? (
          <div className="absolute grid items-center w-full h-full pointer-events-none isolate">
            <input
              className={styles.slider}
              type="range"
              min="0"
              max={globalTrajectoryManagerState.trajectorySequence?.duration()}
              value={currentTime}
              step="0.001"
              onChange={(evt) => setCurrentTime(parseFloat(evt.target.value))}
              style={{ zIndex: 2 }}
            />
            <div className={styles.timeIndicator}>
              <span className="font-extrabold text-orange-500 text-opacity-100 place-self-end">
                {currentTime.toFixed(2)}
              </span>
              <span className="place-self-center translate-x-[1px]">/</span>
              <span className="place-self-start">
                {globalTrajectoryManagerState.trajectorySequence
                  ?.duration()
                  .toFixed(2)}
                s
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            {errorState === "no-trajectory-sequence" ? (
              <p className="text-lg text-gray-600">no trajectory sequence 😔</p>
            ) : errorState === "empty-trajectory-sequence" ? (
              <p className="text-lg text-gray-600">
                empty trajectory sequence 😭
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export { Timeline };
