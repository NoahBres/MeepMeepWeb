import React, { CSSProperties } from "react";
import { DraggableCore, DraggableEventHandler } from "react-draggable";
import { DotsHorizontalIcon, DotsVerticalIcon } from "@heroicons/react/solid";
import { tw } from "../util";

const sharedStylesDiv1 = tw`absolute z-10 flex items-center justify-center transform group`;
const sharedStylesDiv2 = tw`transition-all delay-75 bg-gray-100 border-transparent group-hover:border-gray-300`;
const sharedStylesIcon = tw`absolute w-4 h-4 text-gray-400 transition delay-75 transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100`;

const DraggableDividerVertical = ({
  onDrag,
  style,
}: {
  onDrag: DraggableEventHandler;
  style?: CSSProperties;
}) => (
  <DraggableCore onDrag={onDrag}>
    <div
      style={style}
      className={`top-0 right-0 w-3 h-full translate-x-1.5 cursor-col-resize ${sharedStylesDiv1}`}
    >
      <div
        className={`h-full w-0.5 group-hover:w-2 border-l-[1px] border-r-[1px] ${sharedStylesDiv2}`}
      ></div>
      <DotsVerticalIcon className={sharedStylesIcon} />
    </div>
  </DraggableCore>
);

const DraggableDividerHorizontal = ({
  onDrag,
  style,
}: {
  onDrag: DraggableEventHandler;
  style?: CSSProperties;
}) => (
  <DraggableCore onDrag={onDrag}>
    <div
      style={style}
      className={`bottom-0 left-0 w-full h-3 translate-y-1.5 cursor-row-resize ${sharedStylesDiv1}`}
    >
      <div
        className={`w-full h-0.5 group-hover:h-2 border-t-[1px] border-b-[1px] ${sharedStylesDiv2}`}
      ></div>
      <DotsHorizontalIcon className={sharedStylesIcon} />
    </div>
  </DraggableCore>
);

export { DraggableDividerHorizontal, DraggableDividerVertical };
