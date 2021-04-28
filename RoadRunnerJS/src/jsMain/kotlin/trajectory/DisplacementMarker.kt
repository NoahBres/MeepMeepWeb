package trajectory

import kotlin.js.JsExport

/**
 * Trajectory marker that is triggered when the specified displacement passes.
 */
@JsExport
data class DisplacementMarker(val producer: DisplacementProducer, val callback: MarkerCallback)
