// smithy-typescript generated code
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoXmlServiceClientResolvedConfig,
} from "../ZenkoXmlServiceClient";
import {
  SearchBucketVersionsInput,
  SearchBucketVersionsOutput,
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
 * The input for {@link SearchBucketVersionsCommand}.
 */
export interface SearchBucketVersionsCommandInput extends SearchBucketVersionsInput {}
/**
 * @public
 *
 * The output of {@link SearchBucketVersionsCommand}.
 */
export interface SearchBucketVersionsCommandOutput extends SearchBucketVersionsOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ZenkoXmlServiceClient, SearchBucketVersionsCommand } from "@zenko/xml-client"; // ES Modules import
 * // const { ZenkoXmlServiceClient, SearchBucketVersionsCommand } = require("@zenko/xml-client"); // CommonJS import
 * const client = new ZenkoXmlServiceClient(config);
 * const input = { // SearchBucketVersionsInput
 *   Bucket: "STRING_VALUE", // required
 *   Query: "STRING_VALUE",
 *   MaxKeys: Number("int"),
 *   KeyMarker: "STRING_VALUE",
 *   VersionIdMarker: "STRING_VALUE",
 * };
 * const command = new SearchBucketVersionsCommand(input);
 * const response = await client.send(command);
 * // { // SearchBucketVersionsOutput
 * //   IsTruncated: true || false,
 * //   Versions: [ // ObjectVersionList
 * //     { // ObjectVersion
 * //       Key: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       IsLatest: true || false,
 * //       LastModified: new Date("TIMESTAMP"),
 * //       Size: Number("long"),
 * //     },
 * //   ],
 * //   MaxKeys: Number("int"),
 * //   KeyMarker: "STRING_VALUE",
 * //   NextKeyMarker: "STRING_VALUE",
 * //   VersionIdMarker: "STRING_VALUE",
 * //   NextVersionIdMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchBucketVersionsCommandInput - {@link SearchBucketVersionsCommandInput}
 * @returns {@link SearchBucketVersionsCommandOutput}
 * @see {@link SearchBucketVersionsCommandInput} for command's `input` shape.
 * @see {@link SearchBucketVersionsCommandOutput} for command's `response` shape.
 * @see {@link ZenkoXmlServiceClientResolvedConfig | config} for ZenkoXmlServiceClient's `config` shape.
 *
 * @throws {@link ZenkoXmlServiceServiceException}
 * <p>Base exception class for all service exceptions from ZenkoXmlService service.</p>
 *
 */
export class SearchBucketVersionsCommand extends $Command.classBuilder<SearchBucketVersionsCommandInput, SearchBucketVersionsCommandOutput, ZenkoXmlServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
      .m(function (this: any, Command: any, cs: any, config: ZenkoXmlServiceClientResolvedConfig, o: any) {
          return [

  getSerdePlugin(config, this.serialize, this.deserialize),
      ];
  })
  .s("ZenkoXmlService", "SearchBucketVersions", {

  })
  .n("ZenkoXmlServiceClient", "SearchBucketVersionsCommand")
  .f(void 0, void 0)
  .ser(() => { throw new Error("No supported protocol was found"); })
  .de(() => { throw new Error("No supported protocol was found"); })
.build() {
}
