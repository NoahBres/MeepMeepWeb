import { isNumber } from "./util";

const tokenize = (text: string, language: "java" | "kotlin") => {
  if (language === "java") return tokenizeJava(text);
  else if (language === "kotlin") return tokenizeKotlin(text);
  else return [];
};

export type Tokens =
  | "whitespace"
  | "number"
  | "operator"
  | "comment"
  | "semicolon"
  | "dot"
  | "comma"
  | "newline"
  | "keyword"
  | "string"
  | "unknown";

export type Token = {
  text: string;
  token: Tokens;
};

const operators = [
  "(",
  ")",
  "{",
  "}",
  "-",
  "+",
  "*",
  "/",
  "=",
  "<",
  ">",
  "<=",
  ">=",
  "--",
  "++",
  "*=",
  "/=",
  "-=",
  "+=",
];
const singleCharOperators = ["(", ")", "{", "}"];

const keywords = ["new"];

const tokenizeJava = (text: string): Token[] => {
  const tokenList: Token[] = [];

  let currentContext: Token[] = [];
  let currentContextGuess: Tokens = "unknown";

  let cursor = 0;
  let currChar = "";

  const flushContext = () => {
    if (currentContext.length > 0) {
      // console.log("flush", {
      //   text: currentContext.reduce((acc, curr) => `${acc}${curr.text}`, ""),
      //   token: currentContextGuess,
      // });
      tokenList.push({
        text: currentContext.reduce((acc, curr) => `${acc}${curr.text}`, ""),
        token: currentContextGuess,
      });
    }

    currentContext = [];
    currentContextGuess = "unknown";
  };
  const newToken = (token: Tokens) => {
    // console.log("new", { text: currChar, token });
    tokenList.push({ text: currChar, token });
  };
  const newContext = (token: Tokens) => {
    currentContext.push({ text: currChar, token });
  };

  const reduceContext = () => {
    return currentContext.reduce((acc, curr) => `${acc}${curr.text}`, "");
  };

  while (cursor < text.length) {
    currChar = text[cursor];

    (() => {
      // Context dependent parsing
      if (currentContextGuess === "string") {
        if (currChar === `"`) {
          // Close the string
          newContext("string");
          flushContext();

          return;
        }
      } else if (currentContextGuess === "operator") {
        if (
          isNumber(currChar) &&
          currentContext.length === 1 &&
          ["+", "-"].includes(currentContext[0].text)
        ) {
          currentContextGuess = "number";
          newContext("number");
          return;
        } else if (currentContext.length === 1) {
          if (singleCharOperators.includes(currentContext[0].text)) {
            flushContext();
          } else if (operators.includes(`${reduceContext}${currChar}`)) {
            newContext("operator");
            flushContext();
            return;
          }
        } else if (
          currentContext.length === 2 &&
          operators.includes(reduceContext())
        ) {
          flushContext();
        } else {
          flushContext();
        }
      } else if (currentContextGuess === "number") {
        if (currChar === "e") {
          if (currentContext.every((e) => e.text !== "e")) {
            newContext("number");
            return;
          } else {
            flushContext();
            newContext("unknown");
            return;
          }
        } else if (
          ["-", "+"].includes(currChar) &&
          currentContext[currentContext.length - 1].text === "e"
        ) {
          newContext("number");
          return;
        }
      }

      if (currChar === `"`) {
        // Open the string
        flushContext();
        currentContextGuess = "string";
        newContext("string");

        return;
      } else if (operators.includes(currChar)) {
        flushContext();
        currentContextGuess = "operator";
        newContext("operator");

        return;
      } else if ([" ", "\t", "\n"].includes(currChar)) {
        if (keywords.includes(reduceContext())) {
          currentContextGuess = "keyword";
        }

        flushContext();
        newToken("whitespace");

        return;
      } else if (isNumber(currChar)) {
        if (currentContext.length !== 0 && currentContextGuess !== "number") {
          newContext("unknown");

          return;
        } else {
          currentContextGuess = "number";
          newContext("number");

          return;
        }
      } else if (
        currChar === "." &&
        (currentContextGuess !== "number" ||
          currentContext.find((e) => e.text === "."))
      ) {
        flushContext();
        newToken("dot");

        return;
      } else if (currChar === ",") {
        flushContext();
        newToken("comma");

        return;
      } else if (currChar === ";") {
        flushContext();
        newToken("semicolon");
        return;
      } else {
        newContext("unknown");

        return;
      }
    })();

    if (cursor === text.length - 1) {
      flushContext();
    }

    cursor++;
  }

  return tokenList;
};

const tokenizeKotlin = (text: string) => {
  console.log("not supported");
  return [];
};

export default tokenize;
