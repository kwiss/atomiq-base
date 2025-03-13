import { ChainSwapType } from "./ChainSwapType";
import { StorageObject } from "../storage/StorageObject";
export declare abstract class SwapData implements StorageObject {
    static deserializers: {
        [type: string]: new (serialized: any) => any;
    };
    static deserialize<T extends SwapData>(data: any): T;
    abstract getOfferer(): string;
    abstract setOfferer(newOfferer: string): any;
    abstract isOfferer(address: string): any;
    abstract getClaimer(): string;
    abstract setClaimer(newClaimer: string): any;
    abstract isClaimer(address: string): any;
    abstract serialize(): any;
    abstract getType(): ChainSwapType;
    abstract getAmount(): bigint;
    abstract getToken(): string;
    abstract isToken(token: string): boolean;
    abstract getExpiry(): bigint;
    abstract isPayOut(): boolean;
    abstract isPayIn(): boolean;
    abstract getClaimHash(): string;
    abstract getEscrowHash(): string;
    abstract getSequence?(): bigint;
    abstract getExtraData(): string;
    abstract getConfirmationsHint(): number;
    abstract getNonceHint(): bigint;
    abstract getTxoHashHint(): string;
    abstract setExtraData(extraData: string): void;
    abstract getSecurityDeposit(): bigint;
    abstract getClaimerBounty(): bigint;
    abstract getTotalDeposit(): bigint;
    abstract getDepositToken(): string;
    abstract isDepositToken(token: string): boolean;
    abstract equals(other: SwapData): boolean;
}
