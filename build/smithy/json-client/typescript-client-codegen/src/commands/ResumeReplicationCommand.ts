// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  ResumeReplicationInput,
  ResumeReplicationOutput,
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
 * The input for {@link ResumeReplicationCommand}.
 */
export interface ResumeReplicationCommandInput extends ResumeReplicationInput {}
/**
 * @public
 *
 * The output of {@link ResumeReplicationCommand}.
 */
export interface ResumeReplicationCommandOutput extends ResumeReplicationOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, ResumeReplicationCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, ResumeReplicationCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // ResumeReplicationInput
 *   site: "STRING_VALUE",
 * };
 * const command = new ResumeReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeReplicationCommandInput - {@link ResumeReplicationCommandInput}
 * @returns {@link ResumeReplicationCommandOutput}
 * @see {@link ResumeReplicationCommandInput} for command's `input` shape.
 * @see {@link ResumeReplicationCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class ResumeReplicationCommand extends $Command.classBuilder<ResumeReplicationCommandInput, ResumeReplicationCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "ResumeReplication", {

  })
  .n("ZenkoJsonServiceClient", "ResumeReplicationCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
