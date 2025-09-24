// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import { CheckConnectionOutput } from "../models/models_0";
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
 * The input for {@link CheckConnectionCommand}.
 */
export interface CheckConnectionCommandInput {}
/**
 * @public
 *
 * The output of {@link CheckConnectionCommand}.
 */
export interface CheckConnectionCommandOutput extends CheckConnectionOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, CheckConnectionCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, CheckConnectionCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = {};
 * const command = new CheckConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CheckConnectionCommandInput - {@link CheckConnectionCommandInput}
 * @returns {@link CheckConnectionCommandOutput}
 * @see {@link CheckConnectionCommandInput} for command's `input` shape.
 * @see {@link CheckConnectionCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class CheckConnectionCommand extends $Command.classBuilder<CheckConnectionCommandInput, CheckConnectionCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "CheckConnection", {

  })
  .n("ZenkoJsonServiceClient", "CheckConnectionCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
