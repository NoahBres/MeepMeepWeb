import { tokenize as esprimaTokenize, Token } from "esprima";

type EsprimaTokens =
  | "BooleanLiteral"
  | "EOF"
  | "Identifier"
  | "Keyword"
  | "NullLiteral"
  | "Numeric"
  | "Punctuator"
  | "StringLiteral"
  | "RegularExpression"
  | "Template"
  | "BlockComment"
  | "LineComment"
  // Whitespace is my own token
  | "Whitespace";

export type TokenPlus = {
  type: EsprimaTokens;
  value: string;
  range: [number, number];
  loc?: {
    start: {
      line: number;
      column: number;
    };
    end: {
      line: number;
      column: number;
    };
  };
};

const tokenize = (text: string, language: "java" | "kotlin"): TokenPlus[] => {
  if (language === "java") return tokenizeJava(text);
  else if (language === "kotlin") return tokenizeKotlin(text);
  else return [];
};

const tokenizeJava = (source: string): TokenPlus[] => {
  let tokenized: TokenPlus[] = [];

  try {
    tokenized = esprimaTokenize(source, {
      range: true,
      loc: true,
      comment: true,
    }) as TokenPlus[];
  } catch (e) {
    // TODO fix this
    console.log(e);
  }

  const newTokenized: TokenPlus[] = [];

  let cursor = 0;
  let tokenizedItemIndex = 0;
  while (cursor < source.length) {
    const currToken = tokenized[tokenizedItemIndex];

    if (currToken === undefined) {
      if (
        source[cursor] === "*" &&
        (source[cursor + 1] ?? "") === "/" &&
        tokenized[tokenizedItemIndex - 1] !== undefined &&
        tokenized[tokenizedItemIndex - 1].type === "BlockComment"
      ) {
        newTokenized.push({
          type: "BlockComment",
          value: "*/",
          range: [cursor, cursor + 1],
        });

        cursor += 2;
      } else {
        newTokenized.push({
          type: "Whitespace",
          value: source.charAt(cursor),
          range: [cursor, cursor],
        });

        cursor++;
      }
    } else {
      const nextStringSubset = source.slice(
        cursor,
        cursor + currToken.value.length
      );

      if (nextStringSubset === currToken.value) {
        newTokenized.push(currToken);

        cursor += currToken.value.length;
        tokenizedItemIndex++;
      } else if (
        source[cursor] === "/" &&
        (source[cursor + 1] ?? "") === "*" &&
        currToken.type === "BlockComment"
      ) {
        newTokenized.push({
          type: "BlockComment",
          value: "/*",
          range: [cursor, cursor + 1],
        });

        cursor += 2;
      } else if (
        source[cursor] === "*" &&
        (source[cursor + 1] ?? "") === "/" &&
        tokenized[tokenizedItemIndex - 1] !== undefined &&
        tokenized[tokenizedItemIndex - 1].type === "BlockComment"
      ) {
        newTokenized.push({
          type: "BlockComment",
          value: "*/",
          range: [cursor, cursor + 1],
        });

        cursor += 2;
      } else if (
        source[cursor] === "/" &&
        (source[cursor + 1] ?? "") === "/" &&
        currToken.type === "LineComment"
      ) {
        newTokenized.push({
          type: "LineComment",
          value: "//",
          range: [cursor, cursor + 1],
        });

        cursor += 2;
      } else {
        newTokenized.push({
          type: "Whitespace",
          value: source.charAt(cursor),
          range: [cursor, cursor],
        });

        cursor++;
      }
    }
  }

  return newTokenized;
};

const tokenizeKotlin = (source: string): TokenPlus[] => {
  console.log("not supported");
  return [];
};

export default tokenize;
