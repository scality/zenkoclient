// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoXmlServiceClientResolvedConfig,
} from "../ZenkoXmlServiceClient";
import { ListBucketsOutput } from "../models/models_0";
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
 * The input for {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandInput {}
/**
 * @public
 *
 * The output of {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandOutput extends ListBucketsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoXmlServiceClient, ListBucketsCommand } from "@zenko/xml-client"; // ES Modules import
 * // const { ZenkoXmlServiceClient, ListBucketsCommand } = require("@zenko/xml-client"); // CommonJS import
 * const client = new ZenkoXmlServiceClient(config);
 * const input = {};
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListBucketsOutput
 * //   Buckets: [ // BucketList
 * //     { // Bucket
 * //       Name: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBucketsCommandInput - {@link ListBucketsCommandInput}
 * @returns {@link ListBucketsCommandOutput}
 * @see {@link ListBucketsCommandInput} for command's `input` shape.
 * @see {@link ListBucketsCommandOutput} for command's `response` shape.
 * @see {@link ZenkoXmlServiceClientResolvedConfig | config} for ZenkoXmlServiceClient's `config` shape.
 *
 * @throws {@link ZenkoXmlServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoXmlService service.</p>
 *
 */
export class ListBucketsCommand extends $Command.classBuilder<ListBucketsCommandInput, ListBucketsCommandOutput, ZenkoXmlServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoXmlServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoXmlService", "ListBuckets", {

  })
  .n("ZenkoXmlServiceClient", "ListBucketsCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
