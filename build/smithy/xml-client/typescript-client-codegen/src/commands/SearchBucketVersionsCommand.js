"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBucketVersionsCommand = exports.$Command = void 0;
const middleware_serde_1 = require("@smithy/middleware-serde");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "$Command", { enumerable: true, get: function () { return smithy_client_1.Command; } });
class SearchBucketVersionsCommand extends smithy_client_1.Command.classBuilder()
    .m(function (Command, cs, config, o) {
    return [
        (0, middleware_serde_1.getSerdePlugin)(config, this.serialize, this.deserialize),
    ];
})
    .s("ZenkoXmlService", "SearchBucketVersions", {})
    .n("ZenkoXmlServiceClient", "SearchBucketVersionsCommand")
    .f(void 0, void 0)
    .ser(() => { throw new Error("No supported protocol was found"); })
    .de(() => { throw new Error("No supported protocol was found"); })
    .build() {
}
exports.SearchBucketVersionsCommand = SearchBucketVersionsCommand;
