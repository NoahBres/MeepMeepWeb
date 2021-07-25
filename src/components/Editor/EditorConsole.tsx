import React, {
  useState,
  MouseEventHandler,
  useEffect,
  useReducer,
} from "react";
import {
  ArrowSmUpIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";

import { DraggableDividerHorizontal } from "../DraggableDivider";
import { AbsoluteDragEvent } from "../../absolute-draggable";

export type EditorConsoleState =
  | {
      state: "error";
      errors: string[];
    }
  | { state: "success" }
  | { state: "loading" }
  | { state: "idle" };

type Props = {
  consoleState: EditorConsoleState;
  closedHeight: number;
};

type ArrowProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter: MouseEventHandler<SVGSVGElement>;
  onMouseLeave: MouseEventHandler<SVGSVGElement>;

  isOpen: boolean;
  isLinkedHover: boolean;

  className?: string;
};
const ArrowBtn = ({
  onClick,
  onMouseEnter,
  onMouseLeave,

  isOpen,
  isLinkedHover,

  className,
}: ArrowProps) => (
  <button
    onClick={onClick}
    className={`outline-none focus:outline-none ${className}`}
  >
    <ArrowSmUpIcon
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`box-content w-4 h-4 ml-1 mr-1 transition duration-300 border rounded-full transform ${
        isLinkedHover
          ? "text-gray-500 border-gray-200"
          : "text-gray-300 border-transparent"
      } ${isOpen ? "rotate-180" : "rotate-0"}`}
    />
  </button>
);

type ConsoleState = "closed" | "expanded-full" | "disturbed";

type HeightStateReducerState = {
  currentState: ConsoleState;
  height: number;
  closedHeight: number;
  openThreshold: number;
};
type HeightStateReducerAction =
  | { type: "expandFull"; height: number }
  | { type: "changeHeight"; delta: number }
  | { type: "close" }
  | { type: "mouseUp" };
const HeightStateReducer = (
  state: HeightStateReducerState,
  action: HeightStateReducerAction
): HeightStateReducerState => {
  switch (action.type) {
    case "expandFull":
      return {
        ...state,
        currentState: "expanded-full",
        height: action.height,
      };
    case "close":
      return {
        ...state,
        currentState: "closed",
        height: state.closedHeight,
      };
    case "changeHeight":
      return {
        ...state,
        currentState: "disturbed",
        height: Math.max(state.height + action.delta, state.closedHeight),
      };
    case "mouseUp":
      if (state.height < state.openThreshold) {
        return {
          ...state,
          currentState: "closed",
          height: state.closedHeight,
        };
      } else {
        return state;
      }
  }
};

const EditorConsole = ({ closedHeight, consoleState }: Props) => {
  const [isTopArrowsHovering, setIsTopArrowHovering] = useState(false);
  const [isBottomArrowsHovering, setIsBottomArrowHovering] = useState(false);

  const [{ height, currentState }, dispatchHeight] = useReducer(
    HeightStateReducer,
    {
      currentState: "closed",
      height: closedHeight,
      openThreshold: closedHeight * 1.8,
      closedHeight,
    }
  );

  useEffect(() => {
    switch (currentState) {
      case "closed":
        dispatchHeight({ type: "close" });
        break;
      case "expanded-full":
        // TODO set this to some percentage height
        dispatchHeight({ type: "expandFull", height: 400 });
        break;
      case "disturbed":
        break;
    }
  }, [currentState]);

  const clickExpandArrow = () => {
    switch (currentState) {
      case "closed":
        dispatchHeight({ type: "expandFull", height: 400 });
        break;
      case "disturbed":
        dispatchHeight({ type: "close" });
        break;
      case "expanded-full":
        dispatchHeight({ type: "close" });
        break;
    }
  };

  const openThreshold = closedHeight * 1.8;

  const onDrag = ({ deltaY }: AbsoluteDragEvent) => {
    dispatchHeight({ type: "changeHeight", delta: deltaY });
  };

  const onMouseUp = (e: MouseEvent) => {
    dispatchHeight({ type: "mouseUp" });
  };

  const isOpen = (() => {
    switch (currentState) {
      case "closed":
        return false;
      case "expanded-full":
        return true;
      case "disturbed":
        if (height > openThreshold) return true;
        return false;
    }
  })();

  const showBottomArrow = height > openThreshold;

  return (
    <div
      style={{
        height: `${height}px`,
        transition: `background-color 150ms ease, backdrop-filter 150ms ease ${
          currentState === "disturbed" ? "" : ", height 150ms ease"
        }`,
      }}
      className={`box-content absolute bottom-0 w-full h-10 border-0 transition backdrop-filter bg-gray-100 ${
        isOpen
          ? " bg-opacity-10 border-gray-200 backdrop-blur-sm border-t-[1px]"
          : "bg-opacity-100  border-gray-200 backdrop-blur-0 border-t-[2px]"
      }`}
    >
      <DraggableDividerHorizontal
        onDrag={onDrag}
        onMouseUp={onMouseUp}
        anchor="top"
      />
      <div className="flex flex-col w-full h-full">
        <div
          className="relative flex items-center justify-between w-full"
          style={{ height: `${closedHeight}px` }}
        >
          <ArrowBtn
            onClick={clickExpandArrow}
            onMouseEnter={() => setIsTopArrowHovering(true)}
            onMouseLeave={() => setIsTopArrowHovering(false)}
            isOpen={isOpen}
            isLinkedHover={isTopArrowsHovering}
          />
          <span className="flex items-center flex-grow text-sm text-gray-900">
            {(() => {
              switch (consoleState.state) {
                case "error":
                  return (
                    <>
                      <ExclamationCircleIcon className="w-5 h-5 mr-1 text-red-500 rounded-full" />
                      {consoleState.errors.length} error
                      {consoleState.errors.length > 1 && "s"}
                    </>
                  );
                case "success":
                  return (
                    <>
                      <CheckCircleIcon className="w-5 h-5 mr-1 text-green-500 rounded-full" />
                      Success
                    </>
                  );
                case "idle":
                  return (
                    <span className="w-full text-center text-gray-500">
                      no input given 😕
                    </span>
                  );
                case "loading":
                  return "Loading";
              }
            })()}
          </span>
          <ArrowBtn
            onClick={clickExpandArrow}
            onMouseEnter={() => setIsTopArrowHovering(true)}
            onMouseLeave={() => setIsTopArrowHovering(false)}
            isOpen={isOpen}
            isLinkedHover={isTopArrowsHovering}
          />
        </div>
        <div className="relative flex-grow w-full">
          <ul className="absolute inset-0 px-3 space-y-2 overflow-scroll">
            {consoleState.state === "error" &&
              consoleState.errors.map((e, i) => (
                <li key={i} className="text-sm text-gray-900 whitespace-nowrap">
                  {e}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div
        className={`absolute bottom-0 flex justify-between w-full ${
          showBottomArrow ? "" : "pointer-events-none"
        }`}
        style={{ height: `${closedHeight}px` }}
      >
        <ArrowBtn
          className={`transition-all transform ${
            showBottomArrow
              ? "scale-100 opacity-1 duration-150"
              : "scale-[0.25] opacity-0 duration-300"
          }`}
          onClick={clickExpandArrow}
          onMouseEnter={() => setIsBottomArrowHovering(true)}
          onMouseLeave={() => setIsBottomArrowHovering(false)}
          isOpen={isOpen}
          isLinkedHover={isBottomArrowsHovering}
        />{" "}
        <ArrowBtn
          className={`transition transform ${
            showBottomArrow
              ? "scale-100 opacity-1 duration-150"
              : "scale-80 opacity-0 duration-300"
          }`}
          onClick={clickExpandArrow}
          onMouseEnter={() => setIsBottomArrowHovering(true)}
          onMouseLeave={() => setIsBottomArrowHovering(false)}
          isOpen={isOpen}
          isLinkedHover={isBottomArrowsHovering}
        />
      </div>
    </div>
  );
};

export default EditorConsole;
