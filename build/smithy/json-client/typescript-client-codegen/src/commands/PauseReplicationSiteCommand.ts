// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  PauseReplicationSiteInput,
  PauseReplicationSiteOutput,
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
 * The input for {@link PauseReplicationSiteCommand}.
 */
export interface PauseReplicationSiteCommandInput extends PauseReplicationSiteInput {}
/**
 * @public
 *
 * The output of {@link PauseReplicationSiteCommand}.
 */
export interface PauseReplicationSiteCommandOutput extends PauseReplicationSiteOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, PauseReplicationSiteCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, PauseReplicationSiteCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // PauseReplicationSiteInput
 *   Site: "STRING_VALUE", // required
 * };
 * const command = new PauseReplicationSiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PauseReplicationSiteCommandInput - {@link PauseReplicationSiteCommandInput}
 * @returns {@link PauseReplicationSiteCommandOutput}
 * @see {@link PauseReplicationSiteCommandInput} for command's `input` shape.
 * @see {@link PauseReplicationSiteCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class PauseReplicationSiteCommand extends $Command.classBuilder<PauseReplicationSiteCommandInput, PauseReplicationSiteCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "PauseReplicationSite", {

  })
  .n("ZenkoJsonServiceClient", "PauseReplicationSiteCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
