import React, { useState, MouseEventHandler } from "react";
import { ArrowSmUpIcon, CheckCircleIcon } from "@heroicons/react/outline";

import { DraggableDividerHorizontal } from "./DraggableDivider";

type Props = {
  closedHeight: number;
  content: string;
};

type ArrowProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter: MouseEventHandler<SVGSVGElement>;
  onMouseLeave: MouseEventHandler<SVGSVGElement>;
  isOpen: boolean;
  isLinkedHover: boolean;
};
const ArrowBtn = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  isOpen,
  isLinkedHover,
}: ArrowProps) => (
  <button onClick={onClick} className="focus:outline-none">
    <ArrowSmUpIcon
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`box-content w-4 h-4 ml-1 mr-1 transition border rounded-full transform ${
        isLinkedHover
          ? "text-gray-500 border-gray-200"
          : "text-gray-300 border-transparent"
      } ${isOpen ? "rotate-180" : "rotate-0"}`}
    />
  </button>
);

const EditorConsole = ({ closedHeight, content }: Props) => {
  const [isTopArrowsHovering, setIsTopArrowHovering] = useState(false);
  const [isBottomArrowsHovering, setIsBottomArrowHovering] = useState(false);

  const [height, setHeight] = useState(closedHeight);
  const [isOpen, setIsOpen] = useState(false);

  const clickExpandArrow = () => {
    if (isOpen) {
      setIsOpen(false);
      setHeight(40);
    } else {
      setIsOpen(true);
      setHeight(400);
    }
  };

  const onDrag = (deltaY: number) => {
    setHeight((prev) => prev + deltaY);
  };

  return (
    <div
      style={{ height: `${height}px`, transition: "" }}
      className={`group absolute bottom-0 w-full h-10 border-0 transition box-content backdrop-filter  bg-opacity-10 ${
        isOpen
          ? "bg-gray-100 border-gray-200 backdrop-blur-sm border-t-[1px]"
          : "bg-transparent border-gray-100 backdrop-blur-0 border-t-[2px]"
      }`}
    >
      <DraggableDividerHorizontal
        onDrag={({ deltaY }) => {
          onDrag(deltaY);
        }}
        anchor="top"
      />
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
          <CheckCircleIcon className="w-5 h-5 mr-1 text-green-500 bg-white rounded-full" />
          {content}
        </span>
        <ArrowBtn
          onClick={clickExpandArrow}
          onMouseEnter={() => setIsTopArrowHovering(true)}
          onMouseLeave={() => setIsTopArrowHovering(false)}
          isOpen={isOpen}
          isLinkedHover={isTopArrowsHovering}
        />
      </div>
      <div
        className="absolute bottom-0 flex justify-between w-full"
        style={{ height: `${closedHeight}px` }}
      >
        <ArrowBtn
          onClick={clickExpandArrow}
          onMouseEnter={() => setIsBottomArrowHovering(true)}
          onMouseLeave={() => setIsBottomArrowHovering(false)}
          isOpen={isOpen}
          isLinkedHover={isBottomArrowsHovering}
        />{" "}
        <ArrowBtn
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
