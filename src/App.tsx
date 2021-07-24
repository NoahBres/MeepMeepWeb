import React, { useEffect, useRef, useState } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Editor from "./components/Editor/Editor";
import EditorConsole from "./components/EditorConsole";

import { TokenPlus } from "./parser/tokenizer";
import {
  DraggableDividerHorizontal,
  DraggableDividerVertical,
} from "./components/DraggableDivider";
import { AbsoluteDraggableProvider } from "./absolute-draggable";
import useResizeObserver from "use-resize-observer";
import { GlobalTrajectoryManager } from "./state/GlobalTrajectoryManager";
import { Field } from "./components/Field/Field";
import { Timeline } from "./components/Timeline/Timeline";
import { GlobalTimelineStateManager } from "./state/GlobalTimelineManager";

const MIN_WIDTH_DEV_PANEL = 300;
const MAX_PERCENTAGE_DEV_PANEL = 0.8;

function App() {
  const [devPanelWidth, setDevPanelWidth] = useState(400);
  const [codePanelHeight, setCodePanelHeight] = useState(200);

  const {
    ref: fieldParentRef,
    width: fieldParentWidth,
    height: fieldparentHeight,
  } = useResizeObserver<HTMLDivElement>();

  const mainWidthRef = useRef<number | undefined>(undefined);
  const { ref: mainRef } = useResizeObserver<HTMLDivElement>({
    onResize: ({ width }) => {
      mainWidthRef.current = width;
      setDevPanelWidthClipped(0);
    },
  });

  const onEditorChange = (text: TokenPlus[]) => {
    console.log(text);
  };

  const setDevPanelWidthClipped = (deltaX: number) => {
    setDevPanelWidth((prev) => {
      const newVal = prev + deltaX;

      return Math.floor(
        Math.max(
          Math.min(
            newVal,
            (mainWidthRef.current ?? 0) * MAX_PERCENTAGE_DEV_PANEL
          ),
          MIN_WIDTH_DEV_PANEL
        )
      );
    });
  };

  return (
    <AbsoluteDraggableProvider>
      <GlobalTrajectoryManager>
        <GlobalTimelineStateManager>
          <main
            className="grid w-full h-screen"
            style={{ gridTemplateColumns: `1fr ${devPanelWidth}px` }}
            ref={mainRef}
          >
            <div
              ref={fieldParentRef}
              className="relative flex flex-col items-center justify-center"
              style={{
                backgroundPosition: "10px 10px",
                backgroundRepeat: "round",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${"BFDBFE"}' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              <div
                style={{
                  width: `${
                    Math.min(fieldParentWidth ?? 0, fieldparentHeight ?? 0) *
                    0.8
                  }px`,
                  height: `${
                    Math.min(fieldParentWidth ?? 0, fieldparentHeight ?? 0) *
                    0.8
                  }px`,
                }}
              >
                <Field />
              </div>
              <Timeline className="mt-8" />

              <DraggableDividerVertical
                // Make the vertical divider a higher z-index than the horizontal (default z-index of 10)
                style={{ zIndex: 20 }}
                onDrag={({ deltaX }) => setDevPanelWidthClipped(deltaX)}
              />
            </div>
            <div
              className="grid"
              style={{
                gridTemplateRows: `1fr ${codePanelHeight}px`,
              }}
            >
              <div className="relative flex flex-col border border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between px-4 py-2 pb-3 mx-2 mt-2 mb-3 bg-blue-100 rounded-lg">
                  <h1 className="font-bold text-blue-900">
                    <span className="mr-2">👩‍💻</span>Your Code
                  </h1>
                  <Menu as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Menu.Button
                          className={`group flex flex-row items-center justify-between
                                          px-3 py-1 pr-1 transition 
                                          bg-blue-600
                                          border border-transparent 
                                          rounded-md opacity-50
                                          hover:opacity-100
                                          focus:opacity-100 focus:outline-none
                                          focus-visible:ring-2 focus-visible:ring-blue-400
                                          focus-visible:border-blue-600`}
                        >
                          <span className="mr-1 text-xs text-white">Java</span>
                          <ChevronDownIcon className="w-5 h-5 text-blue-200 group-focus:text-blue-100" />
                        </Menu.Button>
                        <Transition
                          show={open}
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Menu.Items
                            static
                            className="absolute right-0 mt-1 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            style={{ zIndex: 99 }}
                          >
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-purple-600 text-white"
                                        : "text-gray-900"
                                    } flex rounded-md items-center w-full px-2 py-1 text-xs text-left transition-colors focus:outline-none`}
                                  >
                                    Java
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item disabled>
                                <button
                                  className={`rounded-md items-center w-full px-2 py-1 text-xs text-gray-500 text-left`}
                                >
                                  Kotlin (Not Available)
                                </button>
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
                <Editor onChange={onEditorChange} className="mb-10" />
                <EditorConsole content="Status: Success!" closedHeight={40} />
                <DraggableDividerHorizontal
                  onDrag={({ deltaY }) =>
                    setCodePanelHeight((prev) => Math.max(prev + deltaY, 0))
                  }
                />
              </div>
              <div className="grid border border-gray-100 place-items-center">
                <h3>Trajectory Overview</h3>
              </div>
            </div>
          </main>
        </GlobalTimelineStateManager>
      </GlobalTrajectoryManager>
    </AbsoluteDraggableProvider>
  );
}

export default App;
