import {SpvVaultEvent, SpvVaultEventType} from "./SpvVaultEvent";


export class SpvVaultDepositEvent extends SpvVaultEvent<SpvVaultEventType.DEPOSIT> {

    readonly eventType = SpvVaultEventType.DEPOSIT;

    amounts: bigint[];

    constructor(owner: string, vaultId: bigint, amounts: bigint[]) {
        super(owner, vaultId);
        this.amounts = amounts;
    }

}
