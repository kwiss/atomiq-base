import {SwapData} from "../swaps/SwapData";
import {ChainEvents} from "../events/ChainEvents";
import {SwapContract} from "../swaps/SwapContract";
import {BtcRelay} from "../btcrelay/BtcRelay";
import {AbstractSigner, ChainInterface} from "./ChainInterface";

export type ChainType<
    ChainId extends string = string,
    PreFetchData = any,
    PreFetchVerification = any,
    TXType = any,
    Signer extends AbstractSigner = AbstractSigner,
    T extends SwapData = SwapData,
    C extends SwapContract<T, TXType, PreFetchData, PreFetchVerification, Signer, ChainId> = SwapContract<T, TXType, PreFetchData, PreFetchVerification, Signer, ChainId>,
    I extends ChainInterface<TXType, Signer, ChainId> = ChainInterface<TXType, Signer, ChainId>,
    E extends ChainEvents<T> = ChainEvents<T>,
    B extends BtcRelay<any, TXType, any, Signer> = BtcRelay<any, TXType, any, Signer>
> = {
    ChainId: ChainId,
    PreFetchData: PreFetchData,
    PreFetchVerification: PreFetchVerification,
    TX: TXType,
    Signer: Signer,
    ChainInterface: I,
    Data: T,
    Contract: C,
    Events: E,
    BtcRelay: B
}