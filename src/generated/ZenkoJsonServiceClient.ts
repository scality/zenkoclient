// smithy-typescript generated code
import {
  CheckConnectionCommandInput,
  CheckConnectionCommandOutput,
} from "./commands/CheckConnectionCommand";
import {
  GetFailedObjectCommandInput,
  GetFailedObjectCommandOutput,
} from "./commands/GetFailedObjectCommand";
import {
  GetIngestionStatusCommandInput,
  GetIngestionStatusCommandOutput,
} from "./commands/GetIngestionStatusCommand";
import {
  GetLocationsStatusCommandInput,
  GetLocationsStatusCommandOutput,
} from "./commands/GetLocationsStatusCommand";
import {
  ListFailedCommandInput,
  ListFailedCommandOutput,
} from "./commands/ListFailedCommand";
import {
  PauseIngestionCommandInput,
  PauseIngestionCommandOutput,
} from "./commands/PauseIngestionCommand";
import {
  PauseReplicationCommandInput,
  PauseReplicationCommandOutput,
} from "./commands/PauseReplicationCommand";
import {
  PauseReplicationSiteCommandInput,
  PauseReplicationSiteCommandOutput,
} from "./commands/PauseReplicationSiteCommand";
import {
  ResumeIngestionCommandInput,
  ResumeIngestionCommandOutput,
} from "./commands/ResumeIngestionCommand";
import {
  ResumeReplicationCommandInput,
  ResumeReplicationCommandOutput,
} from "./commands/ResumeReplicationCommand";
import {
  ResumeReplicationSiteCommandInput,
  ResumeReplicationSiteCommandOutput,
} from "./commands/ResumeReplicationSiteCommand";
import {
  RetryFailedObjectsCommandInput,
  RetryFailedObjectsCommandOutput,
} from "./commands/RetryFailedObjectsCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  RuntimeExtension,
  RuntimeExtensionsConfig,
  resolveRuntimeExtensions,
} from "./runtimeExtensions";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@smithy/types";

export { __Client }

/**
 * @public
 */
export type ServiceInputTypes =
  | CheckConnectionCommandInput
  | GetFailedObjectCommandInput
  | GetIngestionStatusCommandInput
  | GetLocationsStatusCommandInput
  | ListFailedCommandInput
  | PauseIngestionCommandInput
  | PauseReplicationCommandInput
  | PauseReplicationSiteCommandInput
  | ResumeIngestionCommandInput
  | ResumeReplicationCommandInput
  | ResumeReplicationSiteCommandInput
  | RetryFailedObjectsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CheckConnectionCommandOutput
  | GetFailedObjectCommandOutput
  | GetIngestionStatusCommandOutput
  | GetLocationsStatusCommandOutput
  | ListFailedCommandOutput
  | PauseIngestionCommandOutput
  | PauseReplicationCommandOutput
  | PauseReplicationSiteCommandOutput
  | ResumeIngestionCommandOutput
  | ResumeReplicationCommandOutput
  | ResumeReplicationSiteCommandOutput
  | RetryFailedObjectsCommandOutput;

/**
 * @public
 */
export interface ClientDefaults
  extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

}

/**
 * @public
 */
export type ZenkoJsonServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
/**
 * @public
 *
 *  The configuration interface of ZenkoJsonServiceClient class constructor that set the region, credentials and other options.
 */
export interface ZenkoJsonServiceClientConfig extends ZenkoJsonServiceClientConfigType {}

/**
 * @public
 */
export type ZenkoJsonServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RuntimeExtensionsConfig
/**
 * @public
 *
 *  The resolved configuration interface of ZenkoJsonServiceClient class. This is resolved and normalized from the {@link ZenkoJsonServiceClientConfig | constructor configuration interface}.
 */
export interface ZenkoJsonServiceClientResolvedConfig extends ZenkoJsonServiceClientResolvedConfigType {}

/**
 * @public
 */
export class ZenkoJsonServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ZenkoJsonServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of ZenkoJsonServiceClient class. This is resolved and normalized from the {@link ZenkoJsonServiceClientConfig | constructor configuration interface}.
   */
  readonly config: ZenkoJsonServiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ZenkoJsonServiceClientConfig>) {
    let _config_0 = __getRuntimeConfig(configuration || {});
    let _config_1 = resolveRuntimeExtensions(_config_0, configuration?.extensions || []);
    super(_config_1);
    this.config = _config_1;
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
