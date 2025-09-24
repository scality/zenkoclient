"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZenkoJsonService = void 0;
const ZenkoJsonServiceClient_1 = require("./ZenkoJsonServiceClient");
const CheckConnectionCommand_1 = require("./commands/CheckConnectionCommand");
const GetFailedObjectCommand_1 = require("./commands/GetFailedObjectCommand");
const GetIngestionStatusCommand_1 = require("./commands/GetIngestionStatusCommand");
const GetLocationsStatusCommand_1 = require("./commands/GetLocationsStatusCommand");
const ListFailedCommand_1 = require("./commands/ListFailedCommand");
const PauseIngestionCommand_1 = require("./commands/PauseIngestionCommand");
const PauseReplicationCommand_1 = require("./commands/PauseReplicationCommand");
const PauseReplicationSiteCommand_1 = require("./commands/PauseReplicationSiteCommand");
const ResumeIngestionCommand_1 = require("./commands/ResumeIngestionCommand");
const ResumeReplicationCommand_1 = require("./commands/ResumeReplicationCommand");
const ResumeReplicationSiteCommand_1 = require("./commands/ResumeReplicationSiteCommand");
const RetryFailedObjectsCommand_1 = require("./commands/RetryFailedObjectsCommand");
const smithy_client_1 = require("@smithy/smithy-client");
const commands = {
    CheckConnectionCommand: CheckConnectionCommand_1.CheckConnectionCommand,
    GetFailedObjectCommand: GetFailedObjectCommand_1.GetFailedObjectCommand,
    GetIngestionStatusCommand: GetIngestionStatusCommand_1.GetIngestionStatusCommand,
    GetLocationsStatusCommand: GetLocationsStatusCommand_1.GetLocationsStatusCommand,
    ListFailedCommand: ListFailedCommand_1.ListFailedCommand,
    PauseIngestionCommand: PauseIngestionCommand_1.PauseIngestionCommand,
    PauseReplicationCommand: PauseReplicationCommand_1.PauseReplicationCommand,
    PauseReplicationSiteCommand: PauseReplicationSiteCommand_1.PauseReplicationSiteCommand,
    ResumeIngestionCommand: ResumeIngestionCommand_1.ResumeIngestionCommand,
    ResumeReplicationCommand: ResumeReplicationCommand_1.ResumeReplicationCommand,
    ResumeReplicationSiteCommand: ResumeReplicationSiteCommand_1.ResumeReplicationSiteCommand,
    RetryFailedObjectsCommand: RetryFailedObjectsCommand_1.RetryFailedObjectsCommand,
};
class ZenkoJsonService extends ZenkoJsonServiceClient_1.ZenkoJsonServiceClient {
}
exports.ZenkoJsonService = ZenkoJsonService;
(0, smithy_client_1.createAggregatedClient)(commands, ZenkoJsonService);
