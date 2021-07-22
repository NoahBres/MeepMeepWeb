export const EPSILON = 1e-6;

export function epsilonEquals(left: number, right: number) {
  return Math.abs(left - right) < EPSILON;
}

// Convert radians to degrees
export function toDegrees(radians: number) {
  return radians * (180 / Math.PI);
}
