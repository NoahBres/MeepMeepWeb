export const EPSILON = 1e-6;

export function epsilonEquals(left: number, right: number) {
  return Math.abs(left - right) < EPSILON;
}
