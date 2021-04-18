import React, { useState, useEffect, useRef } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import SimpleCodeEditor from "./components/SimpleCodeEditor";
import tokenize, { Token } from "./parser/tokenizer";

// import { trajectory } from "roadrunnerjs";

const testString = ` drive.trajectorySequenceBuilder(new Pose2d(0.0, 0, 0), "test")
  .splineTo(new Vector2d(18, 18), Math.toRadians(45))
  .setVelConstraint(SampleMecanumDrive.getVelocityConstraint(20, Math.toRadians(180), 15))
  .splineTo(new Vector2d(36, 36), Math.toRadians(0))
  .resetConstraints()
  .splineTo(new Vector2d(72, 0), Math.toRadians(0))

  .build();`;

function App() {
  // useEffect(() => {
  //   // const t = new trajectory.TrajectoryBuilder()
  // }, []);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [devPanelWidth, devPanelHeight] = useState(400);
  const [codePanelHeight, setCodePanelHeight] = useState(50);

  useEffect(() => {
    // tokenize(testString.trimStart().trimEnd(), "java");
  }, []);

  useEffect(() => {
    const pastEventListener = () => {
      console.log("pasted");
    };

    textAreaRef.current?.addEventListener("paste", pastEventListener);

    return () => {
      textAreaRef.current?.removeEventListener("paste", pastEventListener);
    };
  }, []);

  const onEditorChange = (text: Token[]) => {
    console.log(text);
  };

  return (
    <main
      className="grid w-full h-screen"
      style={{ gridTemplateColumns: `1fr ${devPanelWidth}px` }}
    >
      <div className="border border-gray-100"></div>
      <div
        className="grid"
        style={{
          gridTemplateRows: `${codePanelHeight}% ${100 - codePanelHeight}%`,
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
          <SimpleCodeEditor onChange={onEditorChange} />
        </div>
        <div className="border border-gray-100"></div>
      </div>
      {/* <div className="overflow-hidden bg-white rounded shadow w-96 h-96"> */}
      {/* <textarea
          ref={textAreaRef}
          className="w-full h-full p-5 focus:outline-none"
          placeholder="Paste or type your code!"
          wrap="off"
          value={testString}
        /> */}
      {/* <SimpleCodeEditor onChange={onEditorChange} /> */}
      {/* </div> */}
    </main>
  );
}

export default App;
