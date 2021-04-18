package trajectory

import geometry.Vector2d

/**
 * Trajectory marker that is triggered when the trajectory passes the specified point.
 */
data class SpatialMarker(val point: Vector2d, val callback: MarkerCallback)
