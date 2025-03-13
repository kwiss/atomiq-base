import {SwapData} from "../../swaps/SwapData";

export class SwapEvent<T extends SwapData> {

    meta?: {
        blockTime: number,
        txId: string
    };
    escrowHash: string;

    constructor(escrowHash: string) {
        this.escrowHash = escrowHash;
    }

}
