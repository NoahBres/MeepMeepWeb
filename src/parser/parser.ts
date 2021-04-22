import { parseScript, Program } from "esprima";
import {
  ExpressionStatement,
  VariableDeclaration,
  CallExpression,
  MemberExpression,
  Literal,
  BaseNode,
  Identifier,
  NewExpression,
} from "estree";

import { Token } from "./tokenizer";
import { isNumber } from "./util";

type StandardResult =
  | {
      success: true;
      warnings: string[];
    }
  | { success: false; errors: string[] };

const StandardResultError = (error: string | string[]) => {
  if (typeof error === "string") {
    return {
      success: false as const,
      errors: [error],
    };
  } else {
    return {
      success: false as const,
      errors: error,
    };
  }
};

const StandardResultSuccess = (warnings: string[] = []) => ({
  success: true as const,
  warnings,
});

type TrajectorySequenceBuilder = {
  startPose: {
    x: number;
    y: number;
    heading: number;
  };
  builderCalls: unknown[];
};

export default function parse(
  sourceText: string,
  tokens: Token[]
): StandardResult {
  if (sourceText.trim() === "") {
    return {
      success: false,
      errors: ["Input empty"],
    };
  }

  let ast: Program | null = null;

  try {
    ast = parseScript(sourceText, {
      // TODO: set to true later
      range: false,
      comment: false,
      tokens: false,
    });
  } catch (err) {
    return {
      success: false,
      errors: [err],
    };
  }

  console.log(ast.body);
  const trajectorySequenceList = [];

  for (const e of ast.body) {
    switch (e.type) {
      case "VariableDeclaration": {
        const extracted = extractFromVariableDeclarationStatement(e);
        if (extracted) trajectorySequenceList.push(extracted);
        break;
      }
      case "ExpressionStatement": {
        const extracted = extractFromExpressionStatement(e);
        if (extracted.success) {
          trajectorySequenceList.push(extracted);
        } else {
          return {
            success: false,
            errors: extracted.errors,
          };
        }
        break;
      }
    }
  }

  return {
    success: true,
    warnings: [],
  };
}

function extractFromVariableDeclarationStatement(
  declaration: VariableDeclaration
): TrajectorySequenceBuilder | null {
  return null;
}

type ExtractFromExpressionStatementReturn =
  | {
      success: true;
      warnings: string[];
      payload: { type: KnownTypes; value: any };
    }
  | { success: false; errors: string[] };

function extractFromExpressionStatement({
  expression,
}: ExpressionStatement): ExtractFromExpressionStatementReturn {
  const trajectorySequenceFromSMDBuilder = (
    nodeList: BaseNode[]
  ): ExtractTSBReturn => {
    const returnTSB: TrajectorySequenceBuilder = {
      startPose: { x: 0, y: 0, heading: 0 },
      builderCalls: [],
    };

    for (const [i, node] of nodeList.entries()) {
      console.log(node);

      if (i === 1) {
        if (node.type === "CallExpression") {
          const callExpression = node as CallExpression;

          if (callExpression.arguments.length === 1) {
            const arg = callExpression.arguments[0];

            if (
              arg.type === "NewExpression" &&
              arg.callee.type === "Identifier"
            ) {
              const identifier = arg.callee as Identifier;
              if (identifier.name === "Pose2d") {
                // continue reading the params
                const pose2dArgs = arg.arguments;

                // TODO Finish this
                console.log(verifyNewExpression(arg));

                const verifyExpression = verifyNewExpression(arg);
                if (verifyExpression.success) {
                } else {
                  return throwError(verifyExpression.errors);
                }
              } else {
                const firstMember = nodeList[0] as MemberExpression;

                return throwError(
                  `A Pose2d object was expected as the first parameter for ${
                    (firstMember.object as Identifier).name
                  }.trajectoryBuilder()`
                );
              }
            } else {
              // TODO: Implement reading values for this
              const firstMember = nodeList[0] as MemberExpression;

              return throwError(
                `Only new expressions are supported at the moment for ${
                  (firstMember.object as Identifier).name
                }.trajectoryBuilder()`
              );
            }
          } else {
            const firstMember = nodeList[0] as MemberExpression;

            return throwError(
              `Expected a single argument for ${
                (firstMember.object as Identifier).name
              }.trajectorySequenceBuilder`
            );
          }
        } else {
          return throwError(
            "Expected a CallExpression at the top of the stack"
          );
        }
      }
    }

    return { success: true, trajectorySequence: returnTSB };
  };

  switch (expression.type) {
    case "CallExpression": {
      const expressionValue = getCallExpressionValue(
        callExpressionTreeToList(expression, []),
        null
      );

      if (expressionValue.success) {
        // TODO: Implement
        console.log("Success", expressionValue.payload);
      } else {
        return { success: false, errors: expressionValue.errors };
      }

      break;
    }
    case "MemberExpression":
      // TODO check if its a known function call and error out?
      // Just ignore member expressions for now
      console.log("Skipping StaticMemberExpression");
      break;
  }

  return {
    success: true,
    warnings: [],
    payload: { type: "unknown", value: null },
  };
}

// We just pretend all number types (int, double, float, etc.) are numbers since JS numbers are all the same
type JavaNativeTypes = "boolean" | "number" | "string" | "null";

type KnownTypes =
  | JavaNativeTypes
  | "unknown"
  | "void"
  | "TrajectorySequence"
  | "TrajectorySequenceBuilder";

const TypeCheck = (input: string): KnownTypes => {
  if (input === null) return "unknown";

  switch (true) {
    case isNumber(input):
      return "number";
    case input === "false" || input === "true":
      return "boolean";
    case input.startsWith('"') && input.endsWith('"'):
      return "string";
    default:
      return "unknown";
  }
};

type VerifyParametersReturnType =
  | (ReturnType<typeof StandardResultSuccess> & { paramValues: any[] })
  | ReturnType<typeof StandardResultError>;

const VerifyParameters = ({
  identifier,
  expectedLength,
  parameters,
  parameterTypes,
}: {
  identifier: string;
  expectedLength: number;
  parameters: BaseNode[];
  parameterTypes: KnownTypes[];
}): VerifyParametersReturnType => {
  if (parameters.length !== parameterTypes.length) {
    return StandardResultError(
      `${identifier}(): Expected ${parameterTypes.length} argument${
        parameterTypes.length !== 1 ? "s" : ""
      }. ${parameters.length} provided`
    );
  }

  if (parameters.length !== expectedLength) {
    return StandardResultError(
      `${identifier} constructor expects 3 arguments. ${parameters.length} found`
    );
  }

  const paramValues: any[] = [];

  for (const [i, param] of parameters.entries()) {
    const type = parameterTypes[i];
    let value: any = null;

    if (param.type === "Literal") {
      const literal = param as Literal;

      value = literal.value ?? "";
    } else if (param.type === "CallExpression") {
      const evalCall = getCallExpressionValue(
        callExpressionTreeToList(param as CallExpression, []),
        null
      );
      if (!evalCall.success) return evalCall;

      value = evalCall.payload.value;
    }

    const valType = TypeCheck(value);
    if (valType !== type) {
      return StandardResultError(`Expected ${type} got ${valType}`);
    }

    paramValues.push(value);
  }

  return {
    success: true,
    warnings: [],
    paramValues,
  };
};

type KnownExpressionVerify<T> = (expression: T) => StandardResult;

type KnownExpressionValidator<T> = {
  [key: string]: { verify: KnownExpressionVerify<T> };
};

const KnownNewExpressionValidation: KnownExpressionValidator<NewExpression> = {
  Pose2d: {
    verify(expression: NewExpression) {
      return VerifyParameters({
        identifier: (expression.callee as Identifier).name,
        expectedLength: 3,
        parameters: expression.arguments,
        parameterTypes: ["number", "number", "number"],
      });
    },
  },
};

function verifyNewExpression(expression: NewExpression): StandardResult {
  const identifier = (expression.callee as Identifier).name;
  if (Object.keys(KnownNewExpressionValidation).includes(identifier)) {
    return KnownNewExpressionValidation[identifier].verify(expression);
  } else {
    return {
      success: false,
      errors: ["Unrecognized new expression identifier"],
    };
  }
}

type JavaMethodPropertiesType =
  | {
      method: Function;
      paramTypes: JavaNativeTypes[];
      returnType: KnownTypes;
    }
  | {
      value: any;
      valueType: JavaNativeTypes;
    };

const JavaObj: {
  [key: string]: {
    [key: string]: JavaMethodPropertiesType;
  };
} = {
  // TODO: Implement all of these one day
  Math: {
    // Methods
    abs: {
      method: (num: number) => Math.abs(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    acos: {
      method: (num: number) => Math.acos(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    asin: {
      method: (num: number) => Math.asin(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    atan: {
      method: (num: number) => Math.atan(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    atan2: {
      method: (y: number, x: number) => Math.atan2(y, x),
      paramTypes: ["number", "number"],
      returnType: "number",
    },
    ceil: {
      method: (num: number) => Math.ceil(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    cos: {
      method: (num: number) => Math.cos(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    cosh: {
      method: (num: number) => Math.cosh(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    floor: {
      method: (num: number) => Math.floor(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    hypot: {
      method: (num: number) => Math.hypot(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    max: {
      method: (a: number, b: number) => Math.max(a, b),
      paramTypes: ["number", "number"],
      returnType: "number",
    },
    min: {
      method: (a: number, b: number) => Math.min(a, b),
      paramTypes: ["number", "number"],
      returnType: "number",
    },
    random: {
      method: () => Math.random(),
      paramTypes: [],
      returnType: "number",
    },
    sin: {
      method: (num: number) => Math.sin(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    sinh: {
      method: (num: number) => Math.sinh(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    sqrt: {
      method: (num: number) => Math.sqrt(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    tan: {
      method: (num: number) => Math.tan(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    tanh: {
      method: (num: number) => Math.tanh(num),
      paramTypes: ["number"],
      returnType: "number",
    },
    toDegrees: {
      method: (rad: number) => rad * (180 / Math.PI),
      paramTypes: ["number"],
      returnType: "number",
    },
    toRadians: {
      method: (deg: number) => deg * (Math.PI / 180),
      paramTypes: ["number"],
      returnType: "number",
    },

    // Values
    PI: {
      value: Math.PI,
      valueType: "number",
    },
  },
};

function callExpressionTreeToList(
  expression: BaseNode,
  stack: BaseNode[]
): BaseNode[] {
  stack.push(expression);

  if (expression.type === "MemberExpression") {
    if ((expression as MemberExpression).object.type.includes("Expression"))
      return callExpressionTreeToList(
        (expression as MemberExpression).object,
        stack
      );
    else {
      return stack;
    }
  } else if (expression.type === "CallExpression") {
    return callExpressionTreeToList(
      (expression as CallExpression).callee,
      stack
    );
  } else return stack;
}

type GetCallExpressionValueReturn =
  | {
      success: true;
      warnings: string[];
      payload: { type: KnownTypes; value: any };
    }
  | { success: false; errors: string[] };
function getCallExpressionValue(
  currentStack: BaseNode[],
  lastValue: { type: KnownTypes; value: any } | null
): GetCallExpressionValueReturn {
  const throwError = (err: string | string[]) => {
    if (typeof err === "string") {
      return {
        success: false as const,
        errors: [err],
      };
    } else {
      return {
        success: false as const,
        errors: err,
      };
    }
  };

  if (currentStack.length === 0) {
    if (lastValue === null) {
      return {
        success: false,
        errors: ["Last value in call stack is undefined"],
      };
    } else {
      return {
        success: true,
        warnings: [],
        payload: {
          type: lastValue.type,
          value: lastValue.value,
        },
      };
    }
  }

  if (currentStack.length < 2)
    return throwError("Expected a minimum call stack length of 2");

  // The stack is backwards
  const first = currentStack[currentStack.length - 1];
  const second = currentStack[currentStack.length - 2];
  if (first.type === "MemberExpression" && second.type === "CallExpression") {
    const member = first as MemberExpression;
    const call = second as CallExpression;

    if (
      member.object.type === "Identifier" &&
      member.property.type === "Identifier"
    ) {
      if (Object.keys(JavaObj).includes(member.object.name)) {
        const javaMethod = JavaObj[member.object.name][member.property.name];

        if ("method" in javaMethod) {
          const validateParams = VerifyParameters({
            identifier: member.property.name,
            expectedLength: javaMethod.paramTypes.length,
            parameters: call.arguments,
            parameterTypes: javaMethod.paramTypes,
          });

          if (validateParams.success) {
            const value = javaMethod.method(...validateParams.paramValues);

            return getCallExpressionValue(currentStack.slice(0, -2), {
              type: javaMethod.returnType,
              value: value,
            });
          } else {
            return throwError(validateParams.errors);
          }
        } else if ("value" in javaMethod) {
          return getCallExpressionValue(currentStack.slice(0, -2), {
            type: javaMethod.valueType,
            value: javaMethod.value,
          });
        } else {
          return throwError(
            "Neither value nor method was found in the corresponding JavaObj"
          );
        }
      } else {
        if (member.property.name === "trajectorySequenceBuilder") {
          console.log("I knew you were trouble");
        } else {
          return throwError(
            `Unknown identifier: ${member.object.name}.${member.property.name}`
          );
        }
      }
    } else {
      console.log(lastValue);
      if (lastValue !== null) {
        const callableKnownType = [
          "TrajectorySequence",
          "TrajectorySequenceBuilder",
        ];

        if (callableKnownType.includes(lastValue.type)) {
          console.log("broskii");
        } else {
          return throwError(
            `Cannot call a function on type ${lastValue.type} of value ${lastValue.value}`
          );
        }
      } else {
        return throwError(
          "Call expression called without member expression preceding it"
        );
      }
    }
  } else {
    return throwError(
      "Expression did not match pattern: MemberExpression,CallExpression"
    );
  }

  return {
    success: true,
    warnings: [],
    payload: { type: "number", value: 1 },
  };
}
