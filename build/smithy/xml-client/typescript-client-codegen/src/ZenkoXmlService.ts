// smithy-typescript generated code
import {
  ZenkoXmlServiceClient,
  ZenkoXmlServiceClientConfig,
} from "./ZenkoXmlServiceClient";
import {
  ListBucketsCommand,
  ListBucketsCommandInput,
  ListBucketsCommandOutput,
} from "./commands/ListBucketsCommand";
import {
  SearchBucketCommand,
  SearchBucketCommandInput,
  SearchBucketCommandOutput,
} from "./commands/SearchBucketCommand";
import {
  SearchBucketV2Command,
  SearchBucketV2CommandInput,
  SearchBucketV2CommandOutput,
} from "./commands/SearchBucketV2Command";
import {
  SearchBucketVersionsCommand,
  SearchBucketVersionsCommandInput,
  SearchBucketVersionsCommandOutput,
} from "./commands/SearchBucketVersionsCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  ListBucketsCommand,
  SearchBucketCommand,
  SearchBucketV2Command,
  SearchBucketVersionsCommand,
}

export interface ZenkoXmlService {
  /**
   * @see {@link ListBucketsCommand}
   */
  listBuckets(): Promise<ListBucketsCommandOutput>;
  listBuckets(
    args: ListBucketsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListBucketsCommandOutput>;
  listBuckets(
    args: ListBucketsCommandInput,
    cb: (err: any, data?: ListBucketsCommandOutput) => void
  ): void;
  listBuckets(
    args: ListBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchBucketCommand}
   */
  searchBucket(
    args: SearchBucketCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SearchBucketCommandOutput>;
  searchBucket(
    args: SearchBucketCommandInput,
    cb: (err: any, data?: SearchBucketCommandOutput) => void
  ): void;
  searchBucket(
    args: SearchBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchBucketV2Command}
   */
  searchBucketV2(
    args: SearchBucketV2CommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SearchBucketV2CommandOutput>;
  searchBucketV2(
    args: SearchBucketV2CommandInput,
    cb: (err: any, data?: SearchBucketV2CommandOutput) => void
  ): void;
  searchBucketV2(
    args: SearchBucketV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchBucketV2CommandOutput) => void
  ): void;

  /**
   * @see {@link SearchBucketVersionsCommand}
   */
  searchBucketVersions(
    args: SearchBucketVersionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<SearchBucketVersionsCommandOutput>;
  searchBucketVersions(
    args: SearchBucketVersionsCommandInput,
    cb: (err: any, data?: SearchBucketVersionsCommandOutput) => void
  ): void;
  searchBucketVersions(
    args: SearchBucketVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchBucketVersionsCommandOutput) => void
  ): void;

}

/**
 * @public
 */
export class ZenkoXmlService extends ZenkoXmlServiceClient implements ZenkoXmlService {}
createAggregatedClient(commands, ZenkoXmlService);
