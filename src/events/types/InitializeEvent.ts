import {SwapEvent} from "./SwapEvent";
import {SwapData} from "../../swaps/SwapData";
import {ChainSwapType} from "../../swaps/ChainSwapType";

export class InitializeEvent<T extends SwapData> extends SwapEvent<T> {

    swapType: ChainSwapType;
    swapData: () => Promise<T>;

    constructor(escrowHash: string, swapType: ChainSwapType, swapData: () => Promise<T>) {
        super(escrowHash);
        this.swapType = swapType;
        this.swapData = swapData;
    }

}
