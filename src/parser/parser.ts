import { parseScript, tokenize, Program, Token } from "esprima";
import {
  ExpressionStatement,
  VariableDeclaration,
  CallExpression,
  MemberExpression,
  Literal,
  BaseNode,
  NewExpression,
} from "estree";
import {
  JavaNativeTypes,
  KnownTypes,
  RoadRunnerTypes,
  TrajectorySequenceBuilder,
  TranslationMeta,
} from "./TranslationMeta";

import { isNumber } from "./util";

type Error = {
  description: string;
  index: number;
  lineNumber: number;
  column: number;
};

type StandardResult =
  | {
      success: true;
      warnings: string[];
    }
  // Todo fix errors
  | { success: false; errors: string[] | Error[] };

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

const NativeTypesCheck = (input: string): KnownTypes => {
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

type Pose2d = {
  x: number;
  y: number;
  heading: number;
};

type Vector2d = {
  x: number;
  y: number;
};

export default function parse(sourceText: string): StandardResult {
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
      range: true,
      loc: true,
      comment: true,
      tokens: true,
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

type VerifyParametersReturnType =
  | (ReturnType<typeof StandardResultSuccess> & { paramValues: any[] })
  | ReturnType<typeof StandardResultError>;

const verifyParameters = ({
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
    const expectedType = parameterTypes[i];
    let paramVal: any = null;
    let paramType: KnownTypes | null = null;

    if (param.type === "Literal") {
      const literal = param as Literal;

      paramVal = literal.value ?? "";
      paramType = NativeTypesCheck(paramVal);
    } else if (param.type === "CallExpression") {
      const evalCall = getCallExpressionValue(
        callExpressionTreeToList(param as CallExpression, []),
        null
      );
      if (!evalCall.success) return evalCall;

      paramVal = evalCall.payload.value;
      paramType = evalCall.payload.type;
    } else if (param.type === "NewExpression") {
      const evalNew = getNewExpressionValue(param as NewExpression);

      if (!evalNew.success) return evalNew;

      paramVal = evalNew.payload.value;
      paramType = evalNew.payload.type;
    }

    if (paramType !== expectedType) {
      return StandardResultError(`Expected ${expectedType} got ${paramType}`);
    }

    if (paramVal !== null) paramValues.push(paramVal);
  }

  return {
    success: true,
    warnings: [],
    paramValues,
  };
};

type GetNewExpressionValueReturn =
  | {
      success: true;
      warnings: string[];
      payload:
        | { type: "Pose2d"; value: Pose2d }
        | { type: "Vector2d"; value: Vector2d };
    }
  | ReturnType<typeof StandardResultError>;
function getNewExpressionValue(
  expression: NewExpression
): GetNewExpressionValueReturn {
  if (expression.callee.type === "Identifier") {
    switch (expression.callee.name) {
      // TODO Move this elsewhere? colocate the logic w/the types in their own objects?
      case "Pose2d": {
        const evalParams = verifyParameters({
          identifier: expression.callee.name,
          expectedLength: 3,
          parameterTypes: ["number", "number", "number"],
          parameters: expression.arguments,
        });

        if (evalParams.success) {
          return {
            success: true,
            warnings: [],
            payload: {
              type: "Pose2d",
              value: {
                x: evalParams.paramValues[0],
                y: evalParams.paramValues[1],
                heading: evalParams.paramValues[2],
              },
            },
          };
        } else {
          return throwStandardResultError(evalParams.errors);
        }
      }
      case "Vector2d": {
        const evalParams = verifyParameters({
          identifier: expression.callee.name,
          expectedLength: 2,
          parameterTypes: ["number", "number"],
          parameters: expression.arguments,
        });

        if (evalParams.success) {
          return {
            success: true,
            warnings: [],
            payload: {
              type: "Vector2d",
              value: {
                x: evalParams.paramValues[0],
                y: evalParams.paramValues[1],
              },
            },
          };
        } else {
          return throwStandardResultError(evalParams.errors);
        }
      }
      default:
        return throwStandardResultError(
          `Unkown new expression: ${expression.callee.name}`
        );
    }
  } else {
    return throwStandardResultError(
      "Expected new expression callee to be an Identifier"
    );
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
  | ReturnType<typeof StandardResultError>;
function getCallExpressionValue(
  currentStack: BaseNode[],
  lastValue: { type: KnownTypes; value: any } | null
): GetCallExpressionValueReturn {
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
    return throwStandardResultError(
      "Expected a minimum call stack length of 2"
    );

  // The stack is backwards. First call is deepest in the tree
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
          const validateParams = verifyParameters({
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
            return throwStandardResultError(validateParams.errors);
          }
        } else if ("value" in javaMethod) {
          return getCallExpressionValue(currentStack.slice(0, -2), {
            type: javaMethod.valueType,
            value: javaMethod.value,
          });
        } else {
          return throwStandardResultError(
            "Neither value nor method was found in the corresponding JavaObj"
          );
        }
      } else {
        if (member.property.name === "trajectorySequenceBuilder") {
          const validateParams = verifyParameters({
            identifier: member.property.name,
            expectedLength: 1,
            parameters: call.arguments,
            parameterTypes: ["Pose2d"],
          });

          if (validateParams.success) {
            const tsb: TrajectorySequenceBuilder = {
              startPose: validateParams.paramValues[0],
              builderCalls: [],
            };
            return getCallExpressionValue(currentStack.slice(0, -2), {
              type: "TrajectorySequenceBuilder",
              value: tsb,
            });
          } else {
            return throwStandardResultError(validateParams.errors);
          }
        } else {
          return throwStandardResultError(
            `Unknown identifier: ${member.object.name}.${member.property.name}`
          );
        }
      }
    } else {
      if (lastValue !== null) {
        if (
          Object.keys(TranslationMeta)
            .filter((e) => "methods" in TranslationMeta[e as RoadRunnerTypes])
            .includes(lastValue.type)
        ) {
          if (member.property.type === "Identifier") {
            const methods =
              TranslationMeta[lastValue.type as RoadRunnerTypes].methods;
            if (methods) {
              if (Object.keys(methods).includes(member.property.name)) {
                const method = methods[member.property.name];
                const name = member.property.name;

                const loopValidateParams = method.map((e) => {
                  return verifyParameters({
                    identifier: `${lastValue.type}.${name}`,
                    expectedLength: e.parameterTypes.length,
                    parameters: call.arguments,
                    parameterTypes: e.parameterTypes,
                  });
                });

                const validParam = loopValidateParams.find((e) => e.success);
                if (validParam !== undefined && validParam.success) {
                  const tsb: TrajectorySequenceBuilder = {
                    startPose: lastValue.value.startPose,
                    builderCalls: [
                      ...lastValue.value.builderCalls,
                      {
                        name: member.property.name,
                        data: validParam.paramValues,
                      },
                    ],
                  };

                  return getCallExpressionValue(currentStack.slice(0, -2), {
                    type: lastValue.type,
                    value: tsb,
                  });
                } else {
                  return throwStandardResultError([
                    `No valid parameters found for ${lastValue.type}.${name}`,
                    ...loopValidateParams.reduce((acc, curr) => {
                      if (!curr.success) {
                        return [...acc, ...curr.errors];
                      } else return acc;
                    }, [] as string[]),
                  ]);
                }
              } else {
                return throwStandardResultError(
                  `${member.property.name} method does not exist on ${lastValue.type}`
                );
              }
            } else {
              return throwStandardResultError(
                `${lastValue.type} does not contain any methods`
              );
            }
          } else {
            return throwStandardResultError(
              "Expected member to be an Identifier"
            );
          }
        } else {
          return throwStandardResultError(
            `Cannot call a function on type ${lastValue.type} of value ${lastValue.value}`
          );
        }
      } else {
        return throwStandardResultError(
          "Call expression called without member expression preceding it"
        );
      }
    }
  } else {
    return throwStandardResultError(
      "Expression did not match pattern: MemberExpression,CallExpression"
    );
  }
}

function throwStandardResultError(
  err: string | string[]
): ReturnType<typeof StandardResultError> {
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
}
