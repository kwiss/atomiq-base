import {StorageObject} from "../storage/StorageObject";
import {SpvWithdrawalTransactionData} from "./SpvWithdrawalTransactionData";

export type SpvVaultTokenBalance = SpvVaultTokenData & {
    rawAmount: bigint,
    scaledAmount: bigint
};

export type SpvVaultTokenData = {
    token: string,
    multiplier: bigint
}

export abstract class SpvVaultData<T extends SpvWithdrawalTransactionData = SpvWithdrawalTransactionData> implements StorageObject {

    static deserializers: {
        [type: string]: new (serialized: any) => any,
    } = {};

    static deserialize<T extends SpvVaultData>(data: any): T {
        if (SpvVaultData.deserializers[data.type] != null) {
            return new SpvVaultData.deserializers[data.type](data) as unknown as T;
        }
    }

    abstract serialize(): any;

    abstract getOwner(): string;
    abstract getVaultId(): bigint;
    abstract getTokenData(): SpvVaultTokenData[];

    abstract getBalances(): SpvVaultTokenBalance[];

    abstract getUtxo(): string;

    abstract getConfirmations(): number;

    abstract getWithdrawalCount(): number;

    calculateStateAfter(priorWithdrawalTxs: T[]): {withdrawalCount: number, balances: SpvVaultTokenBalance[]} {
        const balances = [...this.getBalances()];
        let withdrawalCount = this.getWithdrawalCount();
        let utxo = this.getUtxo();
        for(let withdrawalTx of priorWithdrawalTxs) {
            if(withdrawalTx.getSpentVaultUtxo()!==utxo) throw new Error("Invalid transaction, doesn't spend prior vault UTXO!");
            withdrawalTx.getTotalOutput().forEach((value, i) => {
                if(balances[i]==null) throw new Error("Tried to withdraw non-existing token!");
                balances[i].rawAmount -= value;
                if(balances[i].rawAmount < 0n) throw new Error("Prior transaction withdrew more than available in vault");
            });
            utxo = withdrawalTx.getCreatedVaultUtxo();
            withdrawalCount++;
        }

        balances.forEach(balance => {
            balance.scaledAmount = balance.rawAmount * balance.multiplier;
        });

        return {
            withdrawalCount,
            balances
        }
    }

}
