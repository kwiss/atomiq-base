import { SwapEvent } from "./SwapEvent";
import { SwapData } from "../../swaps/SwapData";
export declare class ClaimEvent<T extends SwapData> extends SwapEvent<T> {
    result: string;
    constructor(escrowHash: string, result: string);
}
