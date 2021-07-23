/**
 * Trajectory marker that is triggered when the specified time passes.
 */
export type TemporalMarker = {
  producer: (duration: number) => number;
  callback: () => void;
};
