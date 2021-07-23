export interface VelocityConstraint {
  /**
   * Returns the maximum profile velocity at displacement [s].
   */
  get(s: number): number;
}
