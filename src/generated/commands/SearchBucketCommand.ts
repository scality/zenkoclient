// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoXmlServiceClientResolvedConfig,
} from "../ZenkoXmlServiceClient";
import {
  SearchBucketInput,
  SearchBucketOutput,
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
 * The input for {@link SearchBucketCommand}.
 */
export interface SearchBucketCommandInput extends SearchBucketInput {}
/**
 * @public
 *
 * The output of {@link SearchBucketCommand}.
 */
export interface SearchBucketCommandOutput extends SearchBucketOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoXmlServiceClient, SearchBucketCommand } from "@zenko/xml-client"; // ES Modules import
 * // const { ZenkoXmlServiceClient, SearchBucketCommand } = require("@zenko/xml-client"); // CommonJS import
 * const client = new ZenkoXmlServiceClient(config);
 * const input = { // SearchBucketInput
 *   Bucket: "STRING_VALUE", // required
 *   Query: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new SearchBucketCommand(input);
 * const response = await client.send(command);
 * // { // SearchBucketOutput
 * //   IsTruncated: true || false,
 * //   Contents: [ // ObjectList
 * //     { // S3Object
 * //       Key: "STRING_VALUE",
 * //       LastModified: new Date("TIMESTAMP"),
 * //       Size: Number("long"),
 * //       StorageClass: "STRING_VALUE",
 * //     },
 * //   ],
 * //   MaxKeys: Number("int"),
 * //   Marker: "STRING_VALUE",
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchBucketCommandInput - {@link SearchBucketCommandInput}
 * @returns {@link SearchBucketCommandOutput}
 * @see {@link SearchBucketCommandInput} for command's `input` shape.
 * @see {@link SearchBucketCommandOutput} for command's `response` shape.
 * @see {@link ZenkoXmlServiceClientResolvedConfig | config} for ZenkoXmlServiceClient's `config` shape.
 *
 * @throws {@link ZenkoXmlServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoXmlService service.</p>
 *
 */
export class SearchBucketCommand extends $Command.classBuilder<SearchBucketCommandInput, SearchBucketCommandOutput, ZenkoXmlServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoXmlServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoXmlService", "SearchBucket", {

  })
  .n("ZenkoXmlServiceClient", "SearchBucketCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
