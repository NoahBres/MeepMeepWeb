import React, { useState, useEffect, useRef } from "react";
import { useGlobalTrajectoryManagerDispatch } from "../../state/GlobalTrajectoryManager";

import parse from "../../parser/parser";
import tokenize, { TokenPlus } from "../../parser/tokenizer";
import {
  TrajectoryAccelerationConstraintType,
  TrajectoryVelocityConstraintType,
} from "../../parser/TranslationMeta";
import { toRadians } from "../../util";

import styles from "./Editor.module.css";

import EditorConsole, { EditorConsoleState } from "./EditorConsole";

type Props = {
  onChange?: (text: TokenPlus[]) => void;
  className?: string;
};

const Editor = ({ onChange, className }: Props) => {
  const highlightingRef = useRef<HTMLPreElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const globalTrajectoryDispatch = useGlobalTrajectoryManagerDispatch();

  const [sourceText, setSourceText] = useState("");

  const [tokenizedText, setTokenizedText] = useState<TokenPlus[]>([]);

  const [parseState, setParseState] = useState<EditorConsoleState>({
    state: "idle",
  });

  const temporaryVelConstraint: TrajectoryVelocityConstraintType = {
    maxVel: 50,
    maxAngVel: toRadians(180),
    trackWidth: 15,
  };

  const temporaryAccelConstraint: TrajectoryAccelerationConstraintType = {
    maxAccel: 50,
  };

  useEffect(() => {
    const onScroll = () => {
      if (highlightingRef.current && textAreaRef.current) {
        highlightingRef.current.scrollTop = textAreaRef.current.scrollTop ?? 0;
        highlightingRef.current.scrollLeft =
          textAreaRef.current.scrollLeft ?? 0;
      }
    };

    const checkTab = (e: KeyboardEvent) => {
      const textArea = textAreaRef.current;

      if (textArea) {
        if (e.key === "Tab") {
          e.preventDefault();

          const start = textArea.selectionStart;
          const end = textArea.selectionEnd;

          textArea.value = `${textArea.value.substring(
            0,
            start
          )}\t${textArea.value.substring(end)}`;
          textArea.selectionStart = textArea.selectionEnd = start + 1;

          setSourceText(textArea.value);
        }
      }
    };

    textAreaRef.current?.addEventListener("scroll", onScroll);
    textAreaRef.current?.addEventListener("keydown", checkTab);

    return () => {
      textAreaRef.current?.removeEventListener("scroll", onScroll);
      textAreaRef.current?.removeEventListener("keydown", checkTab);
    };
  }, []);

  useEffect(() => {
    setTokenizedText(tokenize(sourceText, "java"));
  }, [sourceText]);

  useEffect(() => {
    console.log("--------Parsing--------");
    const date = new Date().getTime();
    const parseResult = parse(sourceText, {
      velConstraint: temporaryVelConstraint,
      accelConstraint: temporaryAccelConstraint,
    });
    console.log(parseResult);
    console.log(`Parsing: ${new Date().getTime() - date}ms`);

    if (parseResult.success) {
      if (parseResult.payload.length > 0) {
        globalTrajectoryDispatch({
          type: "setTrajectory",
          trajectorySequence: parseResult.payload[0],
        });
      }

      setParseState({ state: "success" });
    } else {
      if (parseResult.errors[0] && parseResult.errors[0] === "Input empty") {
        setParseState({ state: "idle" });
      } else {
        setParseState({ state: "error", errors: parseResult.errors });
      }
    }
  }, [tokenizedText]);

  const renderedText = tokenizedText.map((e, i) => {
    if (e.type === "Whitespace" && e.value === "\n") return <br key={i} />;

    return (
      <span className={styles[`token-${e.type.toLowerCase()}`]} key={i}>
        {e.value
          .replace(new RegExp("&", "g"), "&amp;")
          .replace(new RegExp("<", "g"), "&lt;")}
      </span>
    );
  });

  return (
    <>
      <div className={`relative w-full h-full ${className}`}>
        <pre
          className={styles.highlighter}
          aria-hidden="true"
          ref={highlightingRef}
        >
          <code>{renderedText}</code>
        </pre>
        <textarea
          placeholder="Paste your code here!"
          className={styles.editor}
          spellCheck="false"
          value={sourceText}
          onChange={(evt) => {
            setSourceText(evt.target.value);
          }}
          wrap="off"
          ref={textAreaRef}
        />
      </div>
      <EditorConsole closedHeight={40} consoleState={parseState} />
    </>
  );
};

export default Editor;
