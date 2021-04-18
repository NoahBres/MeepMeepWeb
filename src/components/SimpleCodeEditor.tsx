import React, { useState, useEffect, useRef } from "react";

import tokenize, { Token } from "../parser/tokenizer";

import "./SimpleCodeEditor.css";

type Props = {
  onChange?: (text: Token[]) => void;
};

const SimpleCodeEditor = ({ onChange }: Props) => {
  const highlightingRef = useRef<HTMLPreElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [sourceText, setSourceText] = useState("");

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

  const renderedText = tokenize(sourceText, "java").map((e, i) => {
    if (e.token === "whitespace" && e.text === "\n") return <br />;

    return (
      <span className={`token-${e.token}`} key={i}>
        {e.text
          .replace(new RegExp("&", "g"), "&amp;")
          .replace(new RegExp("<", "g"), "&lt;")}
      </span>
    );
  });

  // TODO Replace with styled component or something
  const editingCodeSharedStyle =
    "absolute w-full h-full px-2 py-4 overflow-auto font-mono text-xs leading-normal editing t-0 l-0";

  return (
    <div className="w-full h-full code-editor">
      <pre
        // style={{ zIndex: 0 }}
        className={`${editingCodeSharedStyle} highlighting`}
        aria-hidden="true"
        ref={highlightingRef}
      >
        <code>{renderedText}</code>
      </pre>
      <textarea
        placeholder="Paste your code here!"
        className={`${editingCodeSharedStyle} editing`}
        // style={{ zIndex: 1 }}
        spellCheck="false"
        value={sourceText}
        onChange={(evt) => {
          setSourceText(evt.target.value);
        }}
        wrap="off"
        ref={textAreaRef}
      />
    </div>
  );
};

export default SimpleCodeEditor;
