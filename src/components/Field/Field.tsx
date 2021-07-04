import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import * as rr from "roadrunnerjs";

import useResizeObserver from "use-resize-observer";
import { v4 as uuid } from "uuid";

import styles from "./Field.module.css";

import {
  GlobalTrajectoryState,
  useGlobalTrajectoryManagerState,
} from "../../state/GlobalTrajectoryManager";
import {
  SequenceSegment,
  TrajectorySegment,
  TurnSegment,
  WaitSegment,
} from "../../parser/trajectorysequence/SequenceSegment";
import { TrajectorySequence } from "../../parser/trajectorysequence/TrajectorySequence";
import { useGlobalTimelineManager } from "../../state/GlobalTimelineManager";
import { toRadians } from "../../util";

const FIELD_WIDTH = 144;
const FIELD_HEIGHT = 144;
const TRAJECTORY_SAMPLE_RESOLUTION = 0.1;

const Field = () => {
  const [botDimen] = useState({ width: 18, height: 18 });
  const [botPose, setBotPose] = useState<rr.geometry.Pose2d>(
    new rr.geometry.Pose2d(0, 0, 0)
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestAnimationFrameRef = useRef<number>(0);

  const canvasWidthRef = useRef(0);
  const canvasHeightRef = useRef(0);

  const {
    width: parentWidth,
    height: parentHeight,
    ref: parentRef,
  } = useResizeObserver({
    onResize: ({ width, height }) => {
      const dimen = Math.min(width ?? 0, height ?? 0);
      canvasWidthRef.current = dimen;
      canvasHeightRef.current = dimen;

      if (canvasRef.current) {
        scaleCanvas(
          canvasRef.current,
          canvasWidthRef.current,
          canvasHeightRef.current
        );
      }
    },
  });

  const globalTrajectoryManagerState = useGlobalTrajectoryManagerState();
  const trajectoryManagerStateRef = useRef<typeof globalTrajectoryManagerState>(
    globalTrajectoryManagerState
  );

  const [state] = useGlobalTimelineManager();

  const [trajectorySVG, setTrajectorySVG] = useState<ReactNode>(null);
  const trajectorySVGRefs = useRef<SVGGElement[]>([]);

  useEffect(() => {
    trajectoryManagerStateRef.current = globalTrajectoryManagerState;

    setTrajectorySVG(
      buildSVGFromTrajectorySequence(
        trajectoryManagerStateRef.current,
        trajectorySVGRefs,
        uuid()
      )
    );
  }, [globalTrajectoryManagerState]);

  useEffect(() => {
    const time = state.context.currentTime;
    const trajSeq = globalTrajectoryManagerState.trajectorySequence;

    // Set bot pose
    if (time !== -1 && trajSeq) {
      setBotPose(getPoseInTrajectorySequence(time, trajSeq));
    }

    // Set current segment and inject into the svg ref so it doesnt have to be torn down
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

    trajectorySVGRefs.current.forEach((e, i) => {
      if (e.classList.contains(styles.active))
        e.classList.remove(styles.active);

      if (currentSegmentIndex === i) e.classList.add(styles.active);
    });
  }, [state.context.currentTime]);

  useEffect(() => {
    console.log(trajectorySVGRefs.current);
  }, [trajectorySVGRefs.current]);

  useEffect(() => {
    const scale = () => {
      if (canvasRef.current) {
        scaleCanvas(
          canvasRef.current,
          canvasWidthRef.current,
          canvasHeightRef.current
        );
      }
    };

    const matchMedia = window.matchMedia("screen and (min-resolution: 2dppx)");
    matchMedia.addEventListener("change", scale);

    return () => {
      matchMedia.removeEventListener("change", scale);
    };
  }, []);

  useEffect(() => {
    // requestAnimationFrameRef.current = requestAnimationFrame(render);
    // return () => cancelAnimationFrame(requestAnimationFrameRef.current);
  }, []);

  // TODO Mark for deletion
  function render() {
    if (canvasRef.current === null) return;

    const context = canvasRef.current.getContext("2d");

    if (context === null) return;
    const width = canvasWidthRef.current;
    const height = canvasHeightRef.current;

    context.clearRect(0, 0, width, height);

    if (trajectoryManagerStateRef.current.trajectorySequence) {
      drawTrajectorySequence(
        trajectoryManagerStateRef.current.trajectorySequence,
        context,
        width,
        height
      );
    }

    requestAnimationFrameRef.current = requestAnimationFrame(render);
  }

  return (
    <div className="relative w-full h-full" ref={parentRef}>
      <h1
        className="absolute top-0 text-3xl font-extrabold tracking-wide text-blue-700 text-opacity-80 left-6"
        style={{ transform: "translateY(-1.48rem)" }}
      >
        🗺 Field
      </h1>
      <div className="absolute top-0 left-0 w-full h-full border border-blue-200 rounded-lg shadow-lg bg-gray-50">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        ></canvas>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={parentWidth}
            height={parentHeight}
            viewBox={`${0 - FIELD_WIDTH / 2} ${
              0 - FIELD_HEIGHT / 2
            } ${FIELD_WIDTH} ${FIELD_HEIGHT}`}
          >
            {trajectorySVG}
          </svg>
        </div>
        {globalTrajectoryManagerState.trajectorySequence &&
          (() => {
            const coords = fieldCoordToScreenCoord(
              botPose.vec(),
              canvasWidthRef.current,
              canvasHeightRef.current
            );

            return (
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="grid bg-red-500 place-items-center bg-opacity-70"
                  style={{
                    width: `${scaleInchesToPixels(
                      botDimen.width,
                      canvasWidthRef.current,
                      canvasHeightRef.current
                    )}px`,
                    height: `${scaleInchesToPixels(
                      botDimen.height,
                      canvasWidthRef.current,
                      canvasHeightRef.current
                    )}px`,
                    transform: `translate(${coords.x}px, ${
                      coords.y
                    }px) rotate(${-botPose.heading}rad)`,
                  }}
                >
                  <div className="w-5 h-0.5 translate-x-3 bg-purple-700"></div>
                </div>
              </div>
            );
          })()}
      </div>
    </div>
  );
};

function scaleInchesToPixels(
  inches: number,
  canvasWidth: number,
  canvasHeight: number
) {
  return (
    (inches / Math.min(FIELD_WIDTH, FIELD_HEIGHT)) *
    Math.min(canvasWidth, canvasHeight)
  );
}

function fieldCoordToScreenCoord(
  vector: rr.geometry.Vector2d,
  canvasWidth: number,
  canvasHeight: number
) {
  const mirrorVec = new rr.geometry.Vector2d(vector.x, -vector.y);

  return mirrorVec
    .plus(new rr.geometry.Vector2d(FIELD_WIDTH / 2, FIELD_HEIGHT / 2))
    .times(Math.min(canvasWidth, canvasHeight))
    .div(FIELD_WIDTH);
}

function getPoseInTrajectorySequence(
  time: number,
  trajSeq: TrajectorySequence
): rr.geometry.Pose2d {
  let segment: SequenceSegment | null = null;
  let segmentOffsetTime = 0;

  let currentTime = 0;

  for (const seg of trajSeq.sequenceList) {
    if (currentTime + seg.duration > time) {
      segmentOffsetTime = time - currentTime;
      segment = seg;

      break;
    } else {
      currentTime += seg.duration;
    }
  }

  if (segment) {
    if (segment instanceof WaitSegment) return segment.startPose;
    else if (segment instanceof TurnSegment)
      return segment.startPose.copy(
        segment.startPose.x,
        segment.startPose.y,
        segment.motionProfile.get(segmentOffsetTime).x
      );
    else if (segment instanceof TrajectorySegment)
      return segment.trajectory.get(segmentOffsetTime);
    else return trajSeq.end();
  } else {
    return new rr.geometry.Pose2d(0, 0, 0);
  }
}

// TODO Mark for deletion
function drawTrajectorySequence(
  sequence: TrajectorySequence,
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  let currentEndPose = sequence.start();

  const firstVec = sequence.start().vec();

  sequence.sequenceList.forEach((step) => {
    if (step instanceof TrajectorySegment) {
      const traj = step.trajectory;
      const displacementSamples = Math.floor(
        traj.path.length() / TRAJECTORY_SAMPLE_RESOLUTION
      );

      const displacements: number[] = [];
      for (let i = 0; i < displacementSamples; i++) {
        displacements.push((i / displacementSamples) * traj.path.length());
      }

      const poses = displacements.map((i) => traj.path.getSingleParam(i));

      context.beginPath();
      poses.slice(1).forEach((pose, i) => {
        const coord = fieldCoordToScreenCoord(pose.vec(), width, height);

        if (i === 0) {
          context.moveTo(coord.x, coord.y);
        } else {
          context.lineTo(coord.x, coord.y);
        }
      });

      context.stroke();

      currentEndPose = step.trajectory.end();
    }
  });
}

// https://gist.github.com/callumlocke/cc258a193839691f60dd
function scaleCanvas(canvas: HTMLCanvasElement, width: number, height: number) {
  const context = canvas.getContext("2d");

  if (context === null) return;

  // assume the device pixel ratio is 1 if the browser doesn't specify it
  const devicePixelRatio = window.devicePixelRatio || 1;

  // determine the 'backing store ratio' of the canvas context
  const backingStoreRatio =
    (context as any).webkitBackingStorePixelRatio ||
    (context as any).mozBackingStorePixelRatio ||
    (context as any).msBackingStorePixelRatio ||
    (context as any).oBackingStorePixelRatio ||
    (context as any).backingStorePixelRatio ||
    1;

  // determine the actual ratio we want to draw at
  const ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    // set the 'real' canvas size to the higher width/height
    canvas.width = width * ratio;
    canvas.height = height * ratio;

    // ...then scale it back down with CSS
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  } else {
    // this is a normal 1:1 device; just scale it simply
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "";
    canvas.style.height = "";
  }

  // scale the drawing context so everything will work at the higher ratio
  context.scale(ratio, ratio);
}

function buildSVGFromTrajectorySequence(
  globalTrajectory: GlobalTrajectoryState,
  refList: RefObject<SVGGElement[]>,
  id: string
) {
  const paths = globalTrajectory.trajectorySequence?.sequenceList.map(
    (step, i) => {
      if (step instanceof TrajectorySegment) {
        const traj = step.trajectory;
        const displacementSamples = Math.floor(
          traj.path.length() / TRAJECTORY_SAMPLE_RESOLUTION
        );

        const displacements: number[] = [];
        for (let i = 0; i < displacementSamples; i++) {
          displacements.push((i / displacementSamples) * traj.path.length());
        }

        const poses = displacements.map((i) => traj.path.getSingleParam(i));

        const pathString = poses
          .slice(1)
          .map((pose, i) => {
            const coord = new rr.geometry.Pose2d(pose.x, -pose.y, pose.heading);

            if (i === 0) {
              return `M ${coord.x},${coord.y}`;
            } else {
              return `L ${coord.x},${coord.y}`;
            }
          })
          .join(" ");

        return (
          <g
            key={`trajectory-path-segment-${id}-${i}`}
            className={styles.fieldSvgTraj}
            ref={(el) => {
              if (el && refList.current) refList.current[i] = el;
            }}
          >
            <path
              className={styles.outline}
              stroke={globalTrajectory.trajectorySequenceMeta.segmentColors[i]}
              fill="none"
              d={pathString}
              shapeRendering="auto"
              // shapeRendering="geometricPrecision"
            />
            <path
              className={styles.mainPath}
              stroke={globalTrajectory.trajectorySequenceMeta.segmentColors[i]}
              fill="none"
              d={pathString}
              shapeRendering="auto"
              // shapeRendering="geometricPrecision"
            />
          </g>
        );
      } else if (step instanceof TurnSegment) {
        const radius = 3;
        const arrowSweep = toRadians(30);
        const arrowAdjustment = toRadians(-15);
        const arrowLength = 1.5;

        const arrowArcEndAdjustment = toRadians(-20);

        const arcStart = {
          x: step.startPose.x + Math.cos(step.startPose.heading) * radius,
          y: step.startPose.y + Math.sin(step.startPose.heading) * radius,
        };

        const arcEnd = {
          x: step.endPose.x + Math.cos(step.endPose.heading) * radius,
          y: step.endPose.y + Math.sin(step.endPose.heading) * radius,
        };

        const arcEndAdjusted = {
          x:
            step.endPose.x +
            Math.cos(step.endPose.heading + arrowArcEndAdjustment) * radius,
          y:
            step.endPose.y +
            Math.sin(step.endPose.heading + arrowArcEndAdjustment) * radius,
        };

        const arrowLine1 = {
          x:
            arcEnd.x +
            Math.cos(
              step.endPose.heading - Math.PI / 2 - arrowSweep + arrowAdjustment
            ) *
              arrowLength,
          y:
            arcEnd.y +
            Math.sin(
              step.endPose.heading - Math.PI / 2 - arrowSweep + arrowAdjustment
            ) *
              arrowLength,
        };

        const arrowLine2 = {
          x:
            arcEnd.x +
            Math.cos(
              step.endPose.heading - Math.PI / 2 + arrowSweep + arrowAdjustment
            ) *
              arrowLength,
          y:
            arcEnd.y +
            Math.sin(
              step.endPose.heading - Math.PI / 2 + arrowSweep + arrowAdjustment
            ) *
              arrowLength,
        };

        return (
          <g
            key={`trajectory-path-segment-${id}-${i}`}
            className={styles.fieldSvgTurn}
            ref={(el) => {
              if (el && refList.current) refList.current[i] = el;
            }}
          >
            <path
              d={`M ${arcStart.x} ${-arcStart.y} A ${radius} ${radius} 0 0 0 ${
                arcEndAdjusted.x
              } ${-arcEndAdjusted.y}`}
              className={styles.arc}
            />
            <path
              className={styles.arrowHead}
              d={`M ${arrowLine1.x} ${-arrowLine1.y} L ${
                arcEnd.x
              } ${-arcEnd.y} L ${arrowLine2.x} ${-arrowLine2.y}`}
            />
          </g>
        );
      } else if (step instanceof WaitSegment) {
        return (
          <g
            key={`trajectory-path-segment-${id}-${i}`}
            ref={(el) => {
              if (el && refList.current) refList.current[i] = el;
            }}
          >
            <circle
              cx={step.startPose.x}
              cy={-step.startPose.y}
              r={0.75}
              className={styles.fieldSvgWait}
            />
          </g>
        );
      }

      return null;
    }
  );

  return paths;
}

export { Field };
