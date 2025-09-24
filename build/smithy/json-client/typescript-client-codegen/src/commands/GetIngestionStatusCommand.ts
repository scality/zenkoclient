// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import { GetIngestionStatusOutput } from "../models/models_0";
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
 * The input for {@link GetIngestionStatusCommand}.
 */
export interface GetIngestionStatusCommandInput {}
/**
 * @public
 *
 * The output of {@link GetIngestionStatusCommand}.
 */
export interface GetIngestionStatusCommandOutput extends GetIngestionStatusOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, GetIngestionStatusCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, GetIngestionStatusCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = {};
 * const command = new GetIngestionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestionStatusOutput
 * //   ingestion: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIngestionStatusCommandInput - {@link GetIngestionStatusCommandInput}
 * @returns {@link GetIngestionStatusCommandOutput}
 * @see {@link GetIngestionStatusCommandInput} for command's `input` shape.
 * @see {@link GetIngestionStatusCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class GetIngestionStatusCommand extends $Command.classBuilder<GetIngestionStatusCommandInput, GetIngestionStatusCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "GetIngestionStatus", {

  })
  .n("ZenkoJsonServiceClient", "GetIngestionStatusCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
