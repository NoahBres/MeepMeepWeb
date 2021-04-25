import React, { CSSProperties } from "react";

import { DotsHorizontalIcon, DotsVerticalIcon } from "@heroicons/react/solid";

import { tw } from "../util";
import { AbsoluteDragEvent, useAbsoluteDraggable } from "../absolute-draggable";

const sharedStylesDiv1 = tw`absolute z-10 flex items-center justify-center transform group`;
const sharedStylesDiv2 = tw`transition-all delay-75 bg-gray-100 border-transparent group-hover:border-gray-300`;
const sharedStylesIcon = tw`absolute w-4 h-4 text-gray-400 transition delay-75 transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100`;

const DraggableDividerVertical = ({
  onDrag,
  anchor = "right",
  style,
}: {
  onDrag: (e: AbsoluteDragEvent) => void;
  anchor?: "left" | "right";
  style?: CSSProperties;
}) => {
  const { ref } = useAbsoluteDraggable<HTMLDivElement>({ onDrag });

  return (
    <div
      ref={ref}
      style={style}
      className={`top-0 right-0 w-3 h-full translate-x-1.5 cursor-col-resize ${
        anchor === "left"
          ? "left-0 -translate-x-1.5"
          : "right-0 translate-x-1.5"
      } ${sharedStylesDiv1}`}
    >
      <div
        className={`h-full w-0.5 group-hover:w-2 border-l-[1px] border-r-[1px] ${sharedStylesDiv2}`}
      ></div>
      <DotsVerticalIcon className={sharedStylesIcon} />
    </div>
  );
};

const DraggableDividerHorizontal = ({
  onDrag,
  anchor = "bottom",
  style,
}: {
  onDrag: (e: AbsoluteDragEvent) => void;
  anchor?: "bottom" | "top";
  style?: CSSProperties;
}) => {
  const { ref } = useAbsoluteDraggable<HTMLDivElement>({ onDrag });

  return (
    <div
      ref={ref}
      style={style}
      className={`left-0 w-full h-3 cursor-row-resize ${
        anchor === "top" ? "top-0 -translate-y-1.5" : "bottom-0 translate-y-1.5"
      } ${sharedStylesDiv1}`}
    >
      <div
        className={`w-full h-0.5 group-hover:h-2 border-t-[1px] border-b-[1px] ${sharedStylesDiv2}`}
      ></div>
      <DotsHorizontalIcon className={sharedStylesIcon} />
    </div>
  );
};

export { DraggableDividerHorizontal, DraggableDividerVertical };
