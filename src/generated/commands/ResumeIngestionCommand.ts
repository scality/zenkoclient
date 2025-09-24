// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  ResumeIngestionInput,
  ResumeIngestionOutput,
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
 * The input for {@link ResumeIngestionCommand}.
 */
export interface ResumeIngestionCommandInput extends ResumeIngestionInput {}
/**
 * @public
 *
 * The output of {@link ResumeIngestionCommand}.
 */
export interface ResumeIngestionCommandOutput extends ResumeIngestionOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, ResumeIngestionCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, ResumeIngestionCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // ResumeIngestionInput
 *   site: "STRING_VALUE",
 * };
 * const command = new ResumeIngestionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResumeIngestionCommandInput - {@link ResumeIngestionCommandInput}
 * @returns {@link ResumeIngestionCommandOutput}
 * @see {@link ResumeIngestionCommandInput} for command's `input` shape.
 * @see {@link ResumeIngestionCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class ResumeIngestionCommand extends $Command.classBuilder<ResumeIngestionCommandInput, ResumeIngestionCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "ResumeIngestion", {

  })
  .n("ZenkoJsonServiceClient", "ResumeIngestionCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
