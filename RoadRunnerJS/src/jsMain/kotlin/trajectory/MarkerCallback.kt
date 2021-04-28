package trajectory

import kotlin.js.JsExport

/**
 * SAM interface for marker callbacks.
 */
@JsExport
class MarkerCallback {
    fun onMarkerReached() {}
}
