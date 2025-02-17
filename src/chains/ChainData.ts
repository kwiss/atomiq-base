import {ChainType} from "./ChainType";
import {BtcRelay} from "../btcrelay/BtcRelay";

export type BaseTokenType = {
    [ticker: string]: {
        address: string,
        decimals: number,
        displayDecimals?: number
    }
};

export type ChainData<T extends ChainType, Tokens extends BaseTokenType> = {
    btcRelay: BtcRelay<any, T["TX"], any, T["Signer"]>,
    swapContract: T["Contract"],
    chainEvents: T["Events"],
    swapDataConstructor: new (data: any) => T["Data"],
    tokens: Tokens,
    storagePrefix?: string
};
