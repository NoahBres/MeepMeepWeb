import React, { useState, useRef, useEffect } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, DotsVerticalIcon } from "@heroicons/react/solid";

import { DraggableCore } from "react-draggable";

import Editor from "./components/Editor/Editor";
import { Token } from "./parser/tokenizer";

const MIN_WIDTH_DEV_PANEL = 300;

function App() {
  const [devPanelWidth, setDevPanelWidth] = useState(400);
  const [codePanelHeight, setCodePanelHeight] = useState(200);

  const onEditorChange = (text: Token[]) => {
    console.log(text);
  };

  return (
    <main
      className="grid w-full h-screen"
      style={{ gridTemplateColumns: `1fr ${devPanelWidth}px` }}
    >
      <div className="relative border border-gray-100">
        <DraggableCore
          onDrag={(_, { deltaX }) =>
            setDevPanelWidth((prev) =>
              Math.max(prev - deltaX, MIN_WIDTH_DEV_PANEL)
            )
          }
        >
          <div className="group absolute top-0 right-0 flex justify-center items-center w-3 h-full transform translate-x-1.5 cursor-col-resize">
            <div className="h-full w-0.5 group-hover:w-2 bg-gray-100 group-hover:border-gray-300 border-transparent border-l-[1px] border-r-[1px] transition-all delay-75"></div>
            <DotsVerticalIcon className="absolute w-4 h-4 text-gray-400 transition delay-75 transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100" />
          </div>
        </DraggableCore>
      </div>
      <div
        className="grid"
        style={{
          gridTemplateRows: `1fr ${codePanelHeight}px`,
        }}
      >
        <div className="flex flex-col px-3 py-2 border border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between px-4 py-2 bg-blue-100 rounded-lg">
            <h1 className="font-bold text-blue-900">Your Code</h1>
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="flex flex-row items-center justify-between px-3 py-1 pr-1 transition bg-blue-600 border border-transparent rounded-md opacity-50 group hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-blue-600">
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
          <Editor onChange={onEditorChange} />
        </div>
        <div className="grid border border-gray-100 place-items-center">
          <h3>TBD Panel</h3>
        </div>
      </div>
    </main>
  );
}

export default App;
