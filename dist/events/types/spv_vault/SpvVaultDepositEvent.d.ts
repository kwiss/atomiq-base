import { SpvVaultEvent, SpvVaultEventType } from "./SpvVaultEvent";
export declare class SpvVaultDepositEvent extends SpvVaultEvent<SpvVaultEventType.DEPOSIT> {
    readonly eventType = SpvVaultEventType.DEPOSIT;
    amounts: bigint[];
    constructor(owner: string, vaultId: bigint, amounts: bigint[]);
}
