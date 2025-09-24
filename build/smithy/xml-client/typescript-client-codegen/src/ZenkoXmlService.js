"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZenkoXmlService = void 0;
const ZenkoXmlServiceClient_1 = require("./ZenkoXmlServiceClient");
const ListBucketsCommand_1 = require("./commands/ListBucketsCommand");
const SearchBucketCommand_1 = require("./commands/SearchBucketCommand");
const SearchBucketV2Command_1 = require("./commands/SearchBucketV2Command");
const SearchBucketVersionsCommand_1 = require("./commands/SearchBucketVersionsCommand");
const smithy_client_1 = require("@smithy/smithy-client");
const commands = {
    ListBucketsCommand: ListBucketsCommand_1.ListBucketsCommand,
    SearchBucketCommand: SearchBucketCommand_1.SearchBucketCommand,
    SearchBucketV2Command: SearchBucketV2Command_1.SearchBucketV2Command,
    SearchBucketVersionsCommand: SearchBucketVersionsCommand_1.SearchBucketVersionsCommand,
};
class ZenkoXmlService extends ZenkoXmlServiceClient_1.ZenkoXmlServiceClient {
}
exports.ZenkoXmlService = ZenkoXmlService;
(0, smithy_client_1.createAggregatedClient)(commands, ZenkoXmlService);
