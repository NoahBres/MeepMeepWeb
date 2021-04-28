package trajectory

import kotlin.js.JsExport

/**
 * Trajectory marker that is triggered when the specified time passes.
 */
@JsExport
data class TrajectoryMarker(val time: Double, val callback: MarkerCallback)
