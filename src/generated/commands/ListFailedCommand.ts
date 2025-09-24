// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig,
} from "../ZenkoJsonServiceClient";
import {
  ListFailedInput,
  ListFailedOutput,
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
 * The input for {@link ListFailedCommand}.
 */
export interface ListFailedCommandInput extends ListFailedInput {}
/**
 * @public
 *
 * The output of {@link ListFailedCommand}.
 */
export interface ListFailedCommandOutput extends ListFailedOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoJsonServiceClient, ListFailedCommand } from "@zenko/json-client"; // ES Modules import
 * // const { ZenkoJsonServiceClient, ListFailedCommand } = require("@zenko/json-client"); // CommonJS import
 * const client = new ZenkoJsonServiceClient(config);
 * const input = { // ListFailedInput
 *   marker: "STRING_VALUE",
 *   storageType: "STRING_VALUE",
 *   storageClass: "STRING_VALUE",
 * };
 * const command = new ListFailedCommand(input);
 * const response = await client.send(command);
 * // { // ListFailedOutput
 * //   isTruncated: true || false,
 * //   marker: "STRING_VALUE",
 * //   nextMarker: "STRING_VALUE",
 * //   versions: [ // FailedObjectList
 * //     { // FailedObject
 * //       bucket: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       versionId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFailedCommandInput - {@link ListFailedCommandInput}
 * @returns {@link ListFailedCommandOutput}
 * @see {@link ListFailedCommandInput} for command's `input` shape.
 * @see {@link ListFailedCommandOutput} for command's `response` shape.
 * @see {@link ZenkoJsonServiceClientResolvedConfig | config} for ZenkoJsonServiceClient's `config` shape.
 *
 * @throws {@link ZenkoJsonServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoJsonService service.</p>
 *
 */
export class ListFailedCommand extends $Command.classBuilder<ListFailedCommandInput, ListFailedCommandOutput, ZenkoJsonServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoJsonServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoJsonService", "ListFailed", {

  })
  .n("ZenkoJsonServiceClient", "ListFailedCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
