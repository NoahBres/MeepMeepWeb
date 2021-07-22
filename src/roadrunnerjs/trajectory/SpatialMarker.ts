import { Vector2d } from "roadrunnerjs/geometry";

/**
 * Trajectory marker that is triggered when the trajectory passes the specified point.
 */
export type SpatialMarker = {
  point: Vector2d;
  callback: () => void;
};
