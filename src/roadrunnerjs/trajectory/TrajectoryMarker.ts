/**
 * Trajectory marker that is triggered when the specified time passes.
 */
export type TrajectoryMarker = {
  time: number;
  callback: () => void;
};
