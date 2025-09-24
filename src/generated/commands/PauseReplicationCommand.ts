// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  PauseReplicationInput,
  PauseReplicationOutput,
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
 * The input for {@link PauseReplicationCommand}.
 */
export interface PauseReplicationCommandInput extends PauseReplicationInput {}
/**
 * @public
 *
 * The output of {@link PauseReplicationCommand}.
 */
export interface PauseReplicationCommandOutput extends PauseReplicationOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, PauseReplicationCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, PauseReplicationCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // PauseReplicationInput
 *   site: "STRING_VALUE",
 * };
 * const command = new PauseReplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PauseReplicationCommandInput - {@link PauseReplicationCommandInput}
 * @returns {@link PauseReplicationCommandOutput}
 * @see {@link PauseReplicationCommandInput} for command's `input` shape.
 * @see {@link PauseReplicationCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class PauseReplicationCommand extends $Command.classBuilder<PauseReplicationCommandInput, PauseReplicationCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "PauseReplication", {

  })
  .n("ZenkoJsonServiceClient", "PauseReplicationCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
