import {ChainSwapType} from "./ChainSwapType";
import {StorageObject} from "../storage/StorageObject";

export abstract class SwapData implements StorageObject {

    static deserializers: {
        [type: string]: new (serialized: any) => any,
    } = {};

    static deserialize<T extends SwapData>(data: any): T {
        const deserializer = SwapData.deserializers[data.type];
        if(deserializer != null) {
            return new deserializer(data) as unknown as T;
        }
        throw new Error(`No deserializer found for swap data type: ${data.type}`);
    }
    abstract getOfferer(): string;
    abstract setOfferer(newOfferer: string): void;
    abstract isOfferer(address: string): boolean;

    abstract getClaimer(): string;
    abstract setClaimer(newClaimer: string): void;
    abstract isClaimer(address: string): boolean;

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

