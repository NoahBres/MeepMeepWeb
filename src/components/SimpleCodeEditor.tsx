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

    textAreaRef.current?.addEventListener("scroll", onScroll);

    return () => {
      textAreaRef.current?.removeEventListener("scroll", onScroll);
    };
  }, []);

  const renderedText = tokenize(sourceText, "java").map((e) => {
    if (e.token === "whitespace" && e.text === "\n") return <br />;

    return (
      <span className={`token-${e.token}`}>
        {e.text
          .replace(new RegExp("&", "g"), "&amp;")
          .replace(new RegExp("<", "g"), "&lt;")}
      </span>
    );
  });

  return (
    <div className="w-full h-full code-editor">
      <textarea
        className="editing"
        spellCheck="false"
        value={sourceText}
        onChange={(evt) => {
          setSourceText(evt.target.value);
        }}
        wrap="off"
        ref={textAreaRef}
      />
      <pre className="highlighting" aria-hidden="true" ref={highlightingRef}>
        <code>{renderedText}</code>
      </pre>
    </div>
  );
};

export default SimpleCodeEditor;
