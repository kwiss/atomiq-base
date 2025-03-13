import {ChainType} from "./ChainType";
import {BtcRelay} from "../btcrelay/BtcRelay";
import {BitcoinRpc} from "../btcrelay/rpc/BitcoinRpc";
import {BitcoinNetwork} from "../btc/BitcoinNetwork";
import {IStorageManager} from "../storage/IStorageManager";
import {StorageObject} from "../storage/StorageObject";

export type BaseTokenType<T extends string = string> = {
    [ticker in T]: {
        address: string,
        decimals: number,
        displayDecimals?: number
    }
};

export type ChainData<T extends ChainType> = {
    chainId: ChainType["ChainId"],
    chainInterface: T["ChainInterface"],
    btcRelay: BtcRelay<any, T["TX"], any, T["Signer"]>,
    swapContract: T["Contract"],
    chainEvents: T["Events"],
    swapDataConstructor: new (data: any) => T["Data"],
    storagePrefix?: string
};

export type ChainInitializerFn<O, C extends ChainType> = (
    options: O,
    bitcoinRpc: BitcoinRpc<any>,
    network: BitcoinNetwork,
    storageCtor: <T extends StorageObject>(name: string) => IStorageManager<T>
) => ChainData<C>;

export type ChainInitializer<O, C extends ChainType, T extends BaseTokenType> = {
    chainId: C["ChainId"],
    chainType: C,
    initializer: ChainInitializerFn<O, C>,
    tokens: T,
    options: O
}
