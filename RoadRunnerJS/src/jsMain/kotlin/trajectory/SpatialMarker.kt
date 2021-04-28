package trajectory

import geometry.Vector2d
import kotlin.js.JsExport

/**
 * Trajectory marker that is triggered when the trajectory passes the specified point.
 */
@JsExport
data class SpatialMarker(val point: Vector2d, val callback: MarkerCallback)
