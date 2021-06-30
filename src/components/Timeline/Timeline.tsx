import React, { useEffect, useRef, useMemo, ReactNode } from "react";

import { RefreshIcon, TrendingUpIcon } from "@heroicons/react/outline";

import { useGlobalTrajectoryManagerState } from "../../state/GlobalTrajectoryManager";

import styles from "./Timeline.module.css";
import {
  TrajectorySegment,
  TurnSegment,
  WaitSegment,
} from "../../parser/trajectorysequence/SequenceSegment";
import { useGlobalTimelineManager } from "../../state/GlobalTimelineManager";

type Props = {
  className?: string;
};

const Timeline = ({ className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const globalTrajectoryManagerState = useGlobalTrajectoryManagerState();
  const trajSeq = globalTrajectoryManagerState.trajectorySequence;

  const [state, send] = useGlobalTimelineManager();

  const errorState =
    trajSeq === null
      ? "no-trajectory-sequence"
      : trajSeq?.sequenceList.length === 0
      ? "empty-trajectory-sequence"
      : "success";

  useEffect(() => {
    const onPress = (event: KeyboardEvent) => {
      if (event.code === "Space") send("TOGGLE");
    };

    containerRef.current?.addEventListener("keydown", onPress);

    return () => containerRef.current?.removeEventListener("keydown", onPress);
  }, []);

  const segmentIndicators = useMemo(
    () => (
      <div
        className="absolute bottom-0 left-0 flex flex-row items-end w-full overflow-hidden rounded-b-md"
        style={{ zIndex: 1 }}
      >
        {(() => {
          let timeThusFar = 0;
          let currentSegmentIndex = 0;

          if (trajSeq?.sequenceList) {
            for (const [i, seg] of trajSeq.sequenceList.entries()) {
              if (timeThusFar + seg.duration >= state.context.currentTime) {
                currentSegmentIndex = i;

                break;
              } else {
                timeThusFar += seg.duration;
              }
            }
          }

          return trajSeq?.sequenceList.map((seg, i) => {
            // This is needed only because TS isn't smart enough to assume it's null below
            if (!trajSeq) return;

            let text: string | ReactNode = "";

            if (seg instanceof TrajectorySegment) {
              text = <TrendingUpIcon className="w-4 h-4 rotate-[30deg]" />;
            } else if (seg instanceof TurnSegment) {
              if (seg.totalRotation > 0)
                text = <RefreshIcon className="w-3 h-3" />;
              else
                text = (
                  <RefreshIcon
                    className="w-3 h-3"
                    style={{ transform: "scale(-1, 1)" }}
                  />
                );
            } else if (seg instanceof WaitSegment) {
              text = "⌛";
            }

            return (
              <div
                key={i}
                className={`
                  h-[23px]
                  flex items-center justify-center
                  transition-all border-2 border-transparent
                  ${
                    i === currentSegmentIndex
                      ? "hover:border-white"
                      : "opacity-50 hover:opacity-100"
                  }`}
                style={{
                  width: `${(seg.duration / trajSeq?.duration()) * 100}%`,
                  backgroundColor:
                    globalTrajectoryManagerState.trajectorySequenceMeta
                      .segmentColors[i],
                  backgroundImage:
                    seg instanceof TurnSegment
                      ? `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
                      : "",
                }}
              >
                <span className="flex items-center justify-center w-full overflow-hidden text-xs text-white pointer-events-none">
                  {text}
                </span>
              </div>
            );
          });
        })()}
      </div>
    ),
    [trajSeq, state.context.currentTime]
  );

  return (
    <div
      className={`relative h-14 w-4/5 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-40 transition-all ${className}`}
      ref={containerRef}
      tabIndex={0}
    >
      <h1 className="absolute top-0 text-2xl font-extrabold tracking-wide text-blue-700 lg:text-3xl text-opacity-80 left-6 translate-y-[-1.3rem] lg:translate-y-[-1.48rem]">
        <button onClick={() => send("TOGGLE")}>
          {(() => {
            if (state.matches("paused")) {
              return "⏸";
            } else if (state.matches("playing")) {
              return "⏲";
            } else {
              if (state.context.stateBeforeDragging === "playing") return "⏲";
              else return "⏸";
            }
          })()}
        </button>{" "}
        Timeline
      </h1>
      {state.context.duration !== -1 && (
        <div className={styles.timeIndicator}>
          <span className="font-extrabold text-orange-500 text-opacity-100 place-self-end">
            {state.context.currentTime.toFixed(2)}
          </span>
          <span className="place-self-center translate-x-[1px]">/</span>
          <span className="place-self-start">
            {trajSeq?.duration().toFixed(2)}
          </span>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full border border-blue-200 rounded-md shadow-lg h-14 bg-gray-50">
        {errorState === "success" ? (
          <div className="absolute grid items-center w-full h-full isolate">
            <input
              className={styles.slider}
              type="range"
              min="0"
              max={trajSeq?.duration()}
              value={state.context.currentTime}
              step="0.001"
              onChange={(evt) =>
                send({ type: "SET.TIME", time: parseFloat(evt.target.value) })
              }
              style={{ zIndex: 2 }}
              onMouseDown={() => send("DRAG")}
              onMouseUp={() => send("RELEASE")}
            />
            {segmentIndicators}
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
