import React, { useState, useEffect, useRef } from "react";

import parse from "../../parser/parser";
import tokenize, { Token } from "../../parser/tokenizer";

import styles from "./Editor.module.css";

type Props = {
  onChange?: (text: Token[]) => void;
  className?: string;
};

const Editor = ({ onChange, className }: Props) => {
  const highlightingRef = useRef<HTMLPreElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [sourceText, setSourceText] = useState("");

  const [tokenizedText, setTokenizedText] = useState<Token[]>([]);

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
    console.log(parse(sourceText, tokenizedText));
  }, [tokenizedText]);

  const renderedText = tokenizedText.map((e, i) => {
    if (e.token === "whitespace" && e.text === "\n") return <br key={i} />;

    return (
      <span className={styles[`token-${e.token}`]} key={i}>
        {e.text
          .replace(new RegExp("&", "g"), "&amp;")
          .replace(new RegExp("<", "g"), "&lt;")}
      </span>
    );
  });

  return (
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
  );
};

export default Editor;
