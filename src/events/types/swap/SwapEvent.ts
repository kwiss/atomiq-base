import {SwapData} from "../../../swaps/SwapData";

export enum SwapEventType {
    INITIALIZE = 0,
    REFUND = 1,
    CLAIM = 2
}

export class SwapEvent<T extends SwapData, C extends SwapEventType = SwapEventType> {

    readonly eventType: C;

    meta?: {
        blockTime: number,
        txId: string
    };
    escrowHash: string;

    constructor(escrowHash: string) {
        this.escrowHash = escrowHash;
    }

}
