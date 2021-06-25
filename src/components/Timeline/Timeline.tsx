import React, { useState } from "react";
import { useGlobalTrajectoryManagerState } from "../../global-trajectory-manager/GlobalTrajectoryManager";

import styles from "./Timeline.module.css";

type Props = {
  className?: string;
};

const Timeline = ({ className }: Props) => {
  const globalTrajectoryManagerState = useGlobalTrajectoryManagerState();

  const [currentTime, setCurrentTime] = useState(0);

  const paused = false;

  const errorState =
    globalTrajectoryManagerState.trajectorySequence === null
      ? "no-trajectory-sequence"
      : globalTrajectoryManagerState.trajectorySequence?.sequenceList.length ===
        0
      ? "empty-trajectory-sequence"
      : "success";

  return (
    <div className={`relative h-14 ${className}`} style={{ width: "80%" }}>
      <h1
        className="absolute top-0 text-3xl font-extrabold tracking-wide text-blue-700 text-opacity-80 left-6"
        style={{ transform: "translateY(-1.48rem)" }}
      >
        {paused ? "⏸" : "⏲"} Timeline
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
              <span className="text-blue-900 text-opacity-100 place-self-end">
                {currentTime.toFixed(2)}
              </span>
              <span className="place-self-center">:</span>
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
