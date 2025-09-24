"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZenkoXmlServiceClient = exports.__Client = void 0;
const runtimeConfig_1 = require("./runtimeConfig");
const runtimeExtensions_1 = require("./runtimeExtensions");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "__Client", { enumerable: true, get: function () { return smithy_client_1.Client; } });
class ZenkoXmlServiceClient extends smithy_client_1.Client {
    constructor(...[configuration]) {
        let _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        let _config_1 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_0, configuration?.extensions || []);
        super(_config_1);
        this.config = _config_1;
    }
    destroy() {
        super.destroy();
    }
}
exports.ZenkoXmlServiceClient = ZenkoXmlServiceClient;
