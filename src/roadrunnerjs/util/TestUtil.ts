import { insert } from "./ArrayUtil";

function numericalDerivative(x: number[], ds: number): number[] {
  let deriv = new Array(x.length - 2).map(
    (e, i) => (x[i + 2] - x[i]) / (2 * ds)
  );
  deriv = insert(deriv, 0, deriv[0]);
  deriv.push(deriv[deriv.length - 1]);
  return deriv;
}

export function expectDerivEquals(
  x: number[],
  dx: number[],
  ds: number,
  epsilon: number,
  errorFreq: number = 0.01
) {
  const numDx = numericalDerivative(x, ds);
  const count = dx
    .map((e, i) => Math.abs(e - numDx[i]))
    .filter((e) => e > epsilon).length;
  const freq = count / x.length;

  expect(freq).toBeLessThanOrEqual(errorFreq);
}

export function expectContinuous(values: number[], epsilon: number) {
  if (values.length < 2) {
    expect(true).toBe(true);
  } else {
    const valuesWithoutLast = values.slice(0, -1);
    const deltas = values.slice(1).map((e, i) => e - valuesWithoutLast[i]);

    expect(Math.max(...deltas)).toBeLessThan(epsilon);
  }
}
