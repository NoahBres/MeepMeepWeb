package trajectory

import kotlin.js.JsExport

/**
 * Trajectory marker that is triggered when the specified time passes.
 */
@JsExport
data class TemporalMarker(val producer: TimeProducer, val callback: MarkerCallback)
