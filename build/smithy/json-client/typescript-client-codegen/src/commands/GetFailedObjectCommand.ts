// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  GetFailedObjectInput,
  GetFailedObjectOutput,
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
 * The input for {@link GetFailedObjectCommand}.
 */
export interface GetFailedObjectCommandInput extends GetFailedObjectInput {}
/**
 * @public
 *
 * The output of {@link GetFailedObjectCommand}.
 */
export interface GetFailedObjectCommandOutput extends GetFailedObjectOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, GetFailedObjectCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, GetFailedObjectCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // GetFailedObjectInput
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new GetFailedObjectCommand(input);
 * const response = await client.send(command);
 * // { // GetFailedObjectOutput
 * //   bucket: "STRING_VALUE",
 * //   key: "STRING_VALUE",
 * //   versionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFailedObjectCommandInput - {@link GetFailedObjectCommandInput}
 * @returns {@link GetFailedObjectCommandOutput}
 * @see {@link GetFailedObjectCommandInput} for command's `input` shape.
 * @see {@link GetFailedObjectCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class GetFailedObjectCommand extends $Command.classBuilder<GetFailedObjectCommandInput, GetFailedObjectCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "GetFailedObject", {

  })
  .n("ZenkoJsonServiceClient", "GetFailedObjectCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
