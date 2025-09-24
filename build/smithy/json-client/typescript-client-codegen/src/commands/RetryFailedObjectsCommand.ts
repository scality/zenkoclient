// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  RetryFailedObjectsInput,
  RetryFailedObjectsOutput,
} from "../models/models_0";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RetryFailedObjectsCommand}.
 */
export interface RetryFailedObjectsCommandInput extends RetryFailedObjectsInput {}
/**
 * @public
 *
 * The output of {@link RetryFailedObjectsCommand}.
 */
export interface RetryFailedObjectsCommandOutput extends RetryFailedObjectsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, RetryFailedObjectsCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, RetryFailedObjectsCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // RetryFailedObjectsInput
 *   bucket: "STRING_VALUE",
 *   key: "STRING_VALUE",
 *   versionId: "STRING_VALUE",
 * };
 * const command = new RetryFailedObjectsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RetryFailedObjectsCommandInput - {@link RetryFailedObjectsCommandInput}
 * @returns {@link RetryFailedObjectsCommandOutput}
 * @see {@link RetryFailedObjectsCommandInput} for command's `input` shape.
 * @see {@link RetryFailedObjectsCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class RetryFailedObjectsCommand extends $Command.classBuilder<RetryFailedObjectsCommandInput, RetryFailedObjectsCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "RetryFailedObjects", {

  })
  .n("ZenkoJsonServiceClient", "RetryFailedObjectsCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
