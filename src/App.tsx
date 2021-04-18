import React, { useState, useEffect, useRef } from "react";
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
    <main className="w-full h-screen bg-blue-500 grid place-items-center">
      <div className="w-96 h-96 bg-white rounded shadow overflow-hidden">
        {/* <textarea
          ref={textAreaRef}
          className="w-full h-full focus:outline-none p-5"
          placeholder="Paste or type your code!"
          wrap="off"
          value={testString}
        /> */}
        <SimpleCodeEditor onChange={onEditorChange} />
      </div>
    </main>
  );
}

export default App;
