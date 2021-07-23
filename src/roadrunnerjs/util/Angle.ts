export const TAU = Math.PI * 2;

/**
 * Returns [angle] clamped to `[0, 2pi]`.
 *
 * @param angle angle measure in radians
 */
export function norm(angle: number) {
  let modifiedAngle = angle % TAU;
  modifiedAngle = (modifiedAngle + TAU) % TAU;

  return modifiedAngle;
}

/**
 * Returns [angleDelta] clamped to `[-pi, pi]`.
 *
 * @param angleDelta angle delta in radians
 */
export function normDelta(angleDelta: number) {
  var modifiedAngleDelta = norm(angleDelta);

  if (modifiedAngleDelta > Math.PI) {
    modifiedAngleDelta -= TAU;
  }

  return modifiedAngleDelta;
}
