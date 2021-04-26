import React, { useState } from "react";

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

const MIN_WIDTH_DEV_PANEL = 300;

function App() {
  const [devPanelWidth, setDevPanelWidth] = useState(400);
  const [codePanelHeight, setCodePanelHeight] = useState(200);

  const onEditorChange = (text: TokenPlus[]) => {
    console.log(text);
  };

  return (
    <AbsoluteDraggableProvider>
      <main
        className="grid w-full h-screen"
        style={{ gridTemplateColumns: `1fr ${devPanelWidth}px` }}
      >
        <div className="relative border border-gray-100">
          <DraggableDividerVertical
            // Make the vertical divider a higher z-index than the horizontal (default z-index of 10)
            style={{ zIndex: 20 }}
            onDrag={({ deltaX }) =>
              setDevPanelWidth((prev) =>
                Math.max(prev + deltaX, MIN_WIDTH_DEV_PANEL)
              )
            }
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
              <h1 className="font-bold text-blue-900">Your Code</h1>
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
    </AbsoluteDraggableProvider>
  );
}

export default App;
