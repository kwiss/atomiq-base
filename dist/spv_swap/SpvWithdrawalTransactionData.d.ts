/// <reference types="node" />
import { BtcTx } from "../btc/rpc/BitcoinRpc";
import { Buffer } from "buffer";
export type ExecutionData = {
    executionHash: string;
    executionExpiry: number;
};
export declare abstract class SpvWithdrawalTransactionData {
    protected abstract fromOpReturnData(data: Buffer): {
        recipient: string;
        rawAmounts: bigint[];
        executionHash: string;
    };
    readonly recipient: string;
    readonly rawAmounts: bigint[];
    readonly callerFeeRate: bigint;
    readonly executionFeeRate: bigint;
    readonly frontingFeeRate: bigint;
    readonly executionHash: string;
    readonly executionExpiry: number;
    readonly btcTx: BtcTx;
    constructor(btcTx: BtcTx);
    getRecipient(): string;
    abstract isRecipient(address: string): boolean;
    getOutputWithoutFees(): bigint[];
    getCallerFee(): bigint[];
    getFrontingFee(): bigint[];
    getExecutionFee(): bigint[];
    getTotalOutput(): bigint[];
    getExecutionData(): ExecutionData | null;
    getTxId(): string;
    getSpentVaultUtxo(): string;
    getCreatedVaultUtxo(): string;
}
