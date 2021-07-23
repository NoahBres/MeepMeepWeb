/**
 * Motion profile acceleration constraint.
 */
export interface AccelerationConstraint {
  /**
   * Returns the maximum profile acceleration at displacement [s].
   */
  get(s: number): number;
}
