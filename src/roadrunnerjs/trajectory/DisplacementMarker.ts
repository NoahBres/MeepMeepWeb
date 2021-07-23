/**
 * Trajectory marker that is triggered when the specified displacement passes.
 */
export type DisplacementMarker = {
  producer: (displacement: number) => number;
  callback: () => void;
};
