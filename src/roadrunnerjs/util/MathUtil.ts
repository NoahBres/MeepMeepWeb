export const EPSILON = 1e-6;

export function epsilonEquals(left: number, right: number) {
  return Math.abs(left - right) < EPSILON;
}

// Convert radians to degrees
export function toDegrees(radians: number) {
  return radians * (180 / Math.PI);
}

/**
 * Returns the real solutions to the quadratic ax^2 + bx + c.
 */
export function solveQuadratic(a: number, b: number, c: number): number[] {
  const disc = b * b - 4 * a * c;
  if (epsilonEquals(disc, 0)) {
    return [-b / (2 * a)];
  } else if (disc > 0) {
    return [(-b + Math.sqrt(disc)) / (2 * a), (-b - Math.sqrt(disc)) / (2 * a)];
  } else {
    return [];
  }
}
