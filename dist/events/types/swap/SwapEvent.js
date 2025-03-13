"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapEvent = exports.SwapEventType = void 0;
var SwapEventType;
(function (SwapEventType) {
    SwapEventType[SwapEventType["INITIALIZE"] = 0] = "INITIALIZE";
    SwapEventType[SwapEventType["REFUND"] = 1] = "REFUND";
    SwapEventType[SwapEventType["CLAIM"] = 2] = "CLAIM";
})(SwapEventType = exports.SwapEventType || (exports.SwapEventType = {}));
class SwapEvent {
    constructor(escrowHash) {
        this.escrowHash = escrowHash;
    }
}
exports.SwapEvent = SwapEvent;
