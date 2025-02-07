import {SwapEvent} from "./SwapEvent";
import {SwapData} from "../../swaps/SwapData";

export class ClaimEvent<T extends SwapData> extends SwapEvent<T> {

    result: string;

    constructor(escrowHash: string, result: string) {
        super(escrowHash);
        this.result = result;
    }

}
