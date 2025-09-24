// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import { GetLocationsStatusOutput } from "../models/models_0";
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
 * The input for {@link GetLocationsStatusCommand}.
 */
export interface GetLocationsStatusCommandInput {}
/**
 * @public
 *
 * The output of {@link GetLocationsStatusCommand}.
 */
export interface GetLocationsStatusCommandOutput extends GetLocationsStatusOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, GetLocationsStatusCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, GetLocationsStatusCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = {};
 * const command = new GetLocationsStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetLocationsStatusOutput
 * //   locations: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLocationsStatusCommandInput - {@link GetLocationsStatusCommandInput}
 * @returns {@link GetLocationsStatusCommandOutput}
 * @see {@link GetLocationsStatusCommandInput} for command's `input` shape.
 * @see {@link GetLocationsStatusCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class GetLocationsStatusCommand extends $Command.classBuilder<GetLocationsStatusCommandInput, GetLocationsStatusCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "GetLocationsStatus", {

  })
  .n("ZenkoJsonServiceClient", "GetLocationsStatusCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
