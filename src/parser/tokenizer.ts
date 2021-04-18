const tokenize = (text: string, language: "java" | "kotlin") => {
  if (language === "java") return tokenizeJava(text);
  else if (language === "kotlin") return tokenizeKotlin(text);
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

type Token = {
  text: string;
  token: Tokens;
};

const operators = ["(", ")", "-", "+", "*", "/", "=", "<", ">"];

const keywords = ["new"];

const tokenizeJava = (text: string): Token[] => {
  const tokenList: Token[] = [];

  let currentContext: Token[] = [];
  let currentContextGuess: Tokens = "unknown";

  let cursor = 0;
  let currChar = "";

  const flushContext = () => {
    if (currentContext.length > 0) {
      console.log("flush", {
        text: currentContext.reduce((acc, curr) => `${acc}${curr.text}`, ""),
        token: currentContextGuess,
      });
      tokenList.push({
        text: currentContext.reduce((acc, curr) => `${acc}${curr.text}`, ""),
        token: currentContextGuess,
      });
    }

    currentContext = [];
    currentContextGuess = "unknown";
  };
  const newToken = (token: Tokens) => {
    console.log("new", { text: currChar, token });
    tokenList.push({ text: currChar, token });
  };
  const newContext = (token: Tokens) => {
    currentContext.push({ text: currChar, token });
  };

  while (cursor < text.length) {
    currChar = text[cursor];

    if (currChar === `"`) {
      if (currentContextGuess !== "string") {
        flushContext();
        currentContextGuess = "string";
        newContext("string");
      } else {
        newContext("string");
        flushContext();
      }
    } else if (operators.includes(currChar)) {
      if (currentContext.length === 0) {
        currentContextGuess = "operator";
        newContext("operator");
      } else if (currentContextGuess === "operator") {
        newContext("operator");
      } else {
        flushContext();
        currentContextGuess = "operator";
        newContext("operator");
      }
    } else if (
      (currentContextGuess === "operator" && flushContext() && false) ||
      [" ", "\t", "\n"].includes(currChar)
    ) {
      if (
        keywords.includes(
          currentContext.reduce((acc, curr) => `${acc}${curr.text}`, "")
        )
      ) {
        currentContextGuess = "keyword";
        flushContext();
      }

      newToken("whitespace");
    } else if (!isNaN(parseInt(currChar))) {
      if (currentContext.length !== 0 && currentContextGuess !== "number") {
        newContext("unknown");
      } else {
        currentContextGuess = "number";
        newContext("number");
      }
    } else if (currChar === "." && currentContextGuess !== "number") {
      flushContext();
      newToken("dot");
    } else if (currChar === ",") {
      flushContext();
      newToken("comma");
    } else {
      newContext("unknown");
    }

    if (cursor === text.length - 1) {
      flushContext();
    }

    cursor++;
  }

  console.log(tokenList.map((e) => [e.text, e.token]));
  return tokenList;
};

const tokenizeKotlin = (text: string) => {
  console.log("not supported");
};

export default tokenize;
