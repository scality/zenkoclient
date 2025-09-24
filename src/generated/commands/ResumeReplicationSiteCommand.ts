// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  ResumeReplicationSiteInput,
  ResumeReplicationSiteOutput,
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
 * The input for {@link ResumeReplicationSiteCommand}.
 */
export interface ResumeReplicationSiteCommandInput extends ResumeReplicationSiteInput {}
/**
 * @public
 *
 * The output of {@link ResumeReplicationSiteCommand}.
 */
export interface ResumeReplicationSiteCommandOutput extends ResumeReplicationSiteOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, ResumeReplicationSiteCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, ResumeReplicationSiteCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // ResumeReplicationSiteInput
 *   Site: "STRING_VALUE", // required
 * };
 * const command = new ResumeReplicationSiteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeReplicationSiteCommandInput - {@link ResumeReplicationSiteCommandInput}
 * @returns {@link ResumeReplicationSiteCommandOutput}
 * @see {@link ResumeReplicationSiteCommandInput} for command's `input` shape.
 * @see {@link ResumeReplicationSiteCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class ResumeReplicationSiteCommand extends $Command.classBuilder<ResumeReplicationSiteCommandInput, ResumeReplicationSiteCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "ResumeReplicationSite", {

  })
  .n("ZenkoJsonServiceClient", "ResumeReplicationSiteCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
