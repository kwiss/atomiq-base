import {ChainSwapType} from "./ChainSwapType";
import BN from "bn.js";
import {StorageObject} from "../storage/StorageObject";

export abstract class SwapData implements StorageObject {

    static deserializers: {
        [type: string]: new (serialized: any) => any,
    } = {};

    static deserialize<T extends SwapData>(data: any): T {
        if(SwapData.deserializers[data.type]!=null) {
            return new SwapData.deserializers[data.type](data) as unknown as T;
        }
    }

    abstract getOfferer(): string;
    abstract setOfferer(newOfferer: string);
    abstract isOfferer(address: string);

    abstract getClaimer(): string;
    abstract setClaimer(newClaimer: string);
    abstract isClaimer(address: string);

    abstract serialize(): any;

    abstract getType(): ChainSwapType;

    abstract getAmount(): BN;

    abstract getToken(): string;

    abstract isToken(token: string): boolean;

    abstract getExpiry(): BN;

    abstract isPayOut(): boolean;

    abstract isPayIn(): boolean;

    abstract getClaimHash(): string;

    abstract getEscrowHash(): string;

    abstract getSequence?(): BN;

    abstract getExtraData(): string;
    abstract getConfirmationsHint(): number;
    abstract getNonceHint(): BN;
    abstract getTxoHashHint(): string;
    abstract setExtraData(extraData: string): void;

    abstract getSecurityDeposit(): BN;

    abstract getClaimerBounty(): BN;

    abstract getTotalDeposit(): BN;

    abstract getDepositToken(): string;

    abstract equals(other: SwapData): boolean;

}

