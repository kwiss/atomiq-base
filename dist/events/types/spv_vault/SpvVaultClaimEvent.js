"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpvVaultClaimEvent = void 0;
const SpvVaultEvent_1 = require("./SpvVaultEvent");
class SpvVaultClaimEvent extends SpvVaultEvent_1.SpvVaultEvent {
    constructor(owner, vaultId, btcTxId, recipient, executionHash, amounts, caller, frontingAddress) {
        super(owner, vaultId);
        this.eventType = SpvVaultEvent_1.SpvVaultEventType.CLAIM;
        this.btcTxId = btcTxId;
        this.recipient = recipient;
        this.executionHash = executionHash;
        this.amounts = amounts;
        this.caller = caller;
        this.frontingAddress = frontingAddress;
    }
}
exports.SpvVaultClaimEvent = SpvVaultClaimEvent;
