import {ChainType} from "./ChainType";
import {BtcRelay} from "../btcrelay/BtcRelay";
import {BitcoinRpc} from "../btcrelay/rpc/BitcoinRpc";
import {BitcoinNetwork} from "../btc/BitcoinNetwork";

export type BaseTokenType<T extends string = string> = {
    [ticker in T]: {
        address: string,
        decimals: number,
        displayDecimals?: number
    }
};

export type ChainData<T extends ChainType> = {
    chainId: ChainType["ChainId"],
    btcRelay: BtcRelay<any, T["TX"], any, T["Signer"]>,
    swapContract: T["Contract"],
    chainEvents: T["Events"],
    swapDataConstructor: new (data: any) => T["Data"],
    storagePrefix?: string
};

type ChainInitializer<O, C extends ChainType, T extends BaseTokenType> = {
    chainId: C["ChainId"],
    chainType: C,
    initializer: (options: O, bitcoinRelay: BitcoinRpc<any>, network: BitcoinNetwork) => ChainData<C>,
    tokens: T,
    options: O
}
