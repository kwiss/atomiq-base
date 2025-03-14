"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpvVaultDepositEvent = void 0;
const SpvVaultEvent_1 = require("./SpvVaultEvent");
class SpvVaultDepositEvent extends SpvVaultEvent_1.SpvVaultEvent {
    constructor(owner, vaultId, amounts) {
        super(owner, vaultId);
        this.eventType = SpvVaultEvent_1.SpvVaultEventType.DEPOSIT;
        this.amounts = amounts;
    }
}
exports.SpvVaultDepositEvent = SpvVaultDepositEvent;
