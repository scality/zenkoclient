// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoXmlServiceClientResolvedConfig,
} from "../ZenkoXmlServiceClient";
import {
  SearchBucketV2Input,
  SearchBucketV2Output,
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
 * The input for {@link SearchBucketV2Command}.
 */
export interface SearchBucketV2CommandInput extends SearchBucketV2Input {}
/**
 * @public
 *
 * The output of {@link SearchBucketV2Command}.
 */
export interface SearchBucketV2CommandOutput extends SearchBucketV2Output, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoXmlServiceClient, SearchBucketV2Command } from "@zenko/xml-client"; // ES Modules import
 * // const { ZenkoXmlServiceClient, SearchBucketV2Command } = require("@zenko/xml-client"); // CommonJS import
 * const client = new ZenkoXmlServiceClient(config);
 * const input = { // SearchBucketV2Input
 *   Bucket: "STRING_VALUE", // required
 *   Query: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   ContinuationToken: "STRING_VALUE",
 * };
 * const command = new SearchBucketV2Command(input);
 * const response = await client.send(command);
 * // { // SearchBucketV2Output
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
 * //   ContinuationToken: "STRING_VALUE",
 * //   NextContinuationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchBucketV2CommandInput - {@link SearchBucketV2CommandInput}
 * @returns {@link SearchBucketV2CommandOutput}
 * @see {@link SearchBucketV2CommandInput} for command's `input` shape.
 * @see {@link SearchBucketV2CommandOutput} for command's `response` shape.
 * @see {@link ZenkoXmlServiceClientResolvedConfig | config} for ZenkoXmlServiceClient's `config` shape.
 *
 * @throws {@link ZenkoXmlServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoXmlService service.</p>
 *
 */
export class SearchBucketV2Command extends $Command.classBuilder<SearchBucketV2CommandInput, SearchBucketV2CommandOutput, ZenkoXmlServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoXmlServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoXmlService", "SearchBucketV2", {

  })
  .n("ZenkoXmlServiceClient", "SearchBucketV2Command")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
