// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  PauseIngestionInput,
  PauseIngestionOutput,
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
 * The input for {@link PauseIngestionCommand}.
 */
export interface PauseIngestionCommandInput extends PauseIngestionInput {}
/**
 * @public
 *
 * The output of {@link PauseIngestionCommand}.
 */
export interface PauseIngestionCommandOutput extends PauseIngestionOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, PauseIngestionCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, PauseIngestionCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // PauseIngestionInput
 *   site: "STRING_VALUE",
 * };
 * const command = new PauseIngestionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PauseIngestionCommandInput - {@link PauseIngestionCommandInput}
 * @returns {@link PauseIngestionCommandOutput}
 * @see {@link PauseIngestionCommandInput} for command's `input` shape.
 * @see {@link PauseIngestionCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class PauseIngestionCommand extends $Command.classBuilder<PauseIngestionCommandInput, PauseIngestionCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "PauseIngestion", {

  })
  .n("ZenkoJsonServiceClient", "PauseIngestionCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
