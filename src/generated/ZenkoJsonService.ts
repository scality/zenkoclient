// smithy-typescript generated code
import {
  ZenkoJsonServiceClient,
  ZenkoJsonServiceClientConfig,
} from "./ZenkoJsonServiceClient";
import {
  CheckConnectionCommand,
  CheckConnectionCommandInput,
  CheckConnectionCommandOutput,
} from "./commands/CheckConnectionCommand";
import {
  GetFailedObjectCommand,
  GetFailedObjectCommandInput,
  GetFailedObjectCommandOutput,
} from "./commands/GetFailedObjectCommand";
import {
  GetIngestionStatusCommand,
  GetIngestionStatusCommandInput,
  GetIngestionStatusCommandOutput,
} from "./commands/GetIngestionStatusCommand";
import {
  GetLocationsStatusCommand,
  GetLocationsStatusCommandInput,
  GetLocationsStatusCommandOutput,
} from "./commands/GetLocationsStatusCommand";
import {
  ListFailedCommand,
  ListFailedCommandInput,
  ListFailedCommandOutput,
} from "./commands/ListFailedCommand";
import {
  PauseIngestionCommand,
  PauseIngestionCommandInput,
  PauseIngestionCommandOutput,
} from "./commands/PauseIngestionCommand";
import {
  PauseReplicationCommand,
  PauseReplicationCommandInput,
  PauseReplicationCommandOutput,
} from "./commands/PauseReplicationCommand";
import {
  PauseReplicationSiteCommand,
  PauseReplicationSiteCommandInput,
  PauseReplicationSiteCommandOutput,
} from "./commands/PauseReplicationSiteCommand";
import {
  ResumeIngestionCommand,
  ResumeIngestionCommandInput,
  ResumeIngestionCommandOutput,
} from "./commands/ResumeIngestionCommand";
import {
  ResumeReplicationCommand,
  ResumeReplicationCommandInput,
  ResumeReplicationCommandOutput,
} from "./commands/ResumeReplicationCommand";
import {
  ResumeReplicationSiteCommand,
  ResumeReplicationSiteCommandInput,
  ResumeReplicationSiteCommandOutput,
} from "./commands/ResumeReplicationSiteCommand";
import {
  RetryFailedObjectsCommand,
  RetryFailedObjectsCommandInput,
  RetryFailedObjectsCommandOutput,
} from "./commands/RetryFailedObjectsCommand";
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

const commands = {
  CheckConnectionCommand,
  GetFailedObjectCommand,
  GetIngestionStatusCommand,
  GetLocationsStatusCommand,
  ListFailedCommand,
  PauseIngestionCommand,
  PauseReplicationCommand,
  PauseReplicationSiteCommand,
  ResumeIngestionCommand,
  ResumeReplicationCommand,
  ResumeReplicationSiteCommand,
  RetryFailedObjectsCommand,
}

export interface ZenkoJsonService {
  /**
   * @see {@link CheckConnectionCommand}
   */
  checkConnection(): Promise<CheckConnectionCommandOutput>;
  checkConnection(
    args: CheckConnectionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CheckConnectionCommandOutput>;
  checkConnection(
    args: CheckConnectionCommandInput,
    cb: (err: any, data?: CheckConnectionCommandOutput) => void
  ): void;
  checkConnection(
    args: CheckConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFailedObjectCommand}
   */
  getFailedObject(
    args: GetFailedObjectCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetFailedObjectCommandOutput>;
  getFailedObject(
    args: GetFailedObjectCommandInput,
    cb: (err: any, data?: GetFailedObjectCommandOutput) => void
  ): void;
  getFailedObject(
    args: GetFailedObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFailedObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIngestionStatusCommand}
   */
  getIngestionStatus(): Promise<GetIngestionStatusCommandOutput>;
  getIngestionStatus(
    args: GetIngestionStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetIngestionStatusCommandOutput>;
  getIngestionStatus(
    args: GetIngestionStatusCommandInput,
    cb: (err: any, data?: GetIngestionStatusCommandOutput) => void
  ): void;
  getIngestionStatus(
    args: GetIngestionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIngestionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLocationsStatusCommand}
   */
  getLocationsStatus(): Promise<GetLocationsStatusCommandOutput>;
  getLocationsStatus(
    args: GetLocationsStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<GetLocationsStatusCommandOutput>;
  getLocationsStatus(
    args: GetLocationsStatusCommandInput,
    cb: (err: any, data?: GetLocationsStatusCommandOutput) => void
  ): void;
  getLocationsStatus(
    args: GetLocationsStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLocationsStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFailedCommand}
   */
  listFailed(): Promise<ListFailedCommandOutput>;
  listFailed(
    args: ListFailedCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ListFailedCommandOutput>;
  listFailed(
    args: ListFailedCommandInput,
    cb: (err: any, data?: ListFailedCommandOutput) => void
  ): void;
  listFailed(
    args: ListFailedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFailedCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseIngestionCommand}
   */
  pauseIngestion(): Promise<PauseIngestionCommandOutput>;
  pauseIngestion(
    args: PauseIngestionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PauseIngestionCommandOutput>;
  pauseIngestion(
    args: PauseIngestionCommandInput,
    cb: (err: any, data?: PauseIngestionCommandOutput) => void
  ): void;
  pauseIngestion(
    args: PauseIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseReplicationCommand}
   */
  pauseReplication(): Promise<PauseReplicationCommandOutput>;
  pauseReplication(
    args: PauseReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PauseReplicationCommandOutput>;
  pauseReplication(
    args: PauseReplicationCommandInput,
    cb: (err: any, data?: PauseReplicationCommandOutput) => void
  ): void;
  pauseReplication(
    args: PauseReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link PauseReplicationSiteCommand}
   */
  pauseReplicationSite(
    args: PauseReplicationSiteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<PauseReplicationSiteCommandOutput>;
  pauseReplicationSite(
    args: PauseReplicationSiteCommandInput,
    cb: (err: any, data?: PauseReplicationSiteCommandOutput) => void
  ): void;
  pauseReplicationSite(
    args: PauseReplicationSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseReplicationSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeIngestionCommand}
   */
  resumeIngestion(): Promise<ResumeIngestionCommandOutput>;
  resumeIngestion(
    args: ResumeIngestionCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ResumeIngestionCommandOutput>;
  resumeIngestion(
    args: ResumeIngestionCommandInput,
    cb: (err: any, data?: ResumeIngestionCommandOutput) => void
  ): void;
  resumeIngestion(
    args: ResumeIngestionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeIngestionCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeReplicationCommand}
   */
  resumeReplication(): Promise<ResumeReplicationCommandOutput>;
  resumeReplication(
    args: ResumeReplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ResumeReplicationCommandOutput>;
  resumeReplication(
    args: ResumeReplicationCommandInput,
    cb: (err: any, data?: ResumeReplicationCommandOutput) => void
  ): void;
  resumeReplication(
    args: ResumeReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeReplicationSiteCommand}
   */
  resumeReplicationSite(
    args: ResumeReplicationSiteCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<ResumeReplicationSiteCommandOutput>;
  resumeReplicationSite(
    args: ResumeReplicationSiteCommandInput,
    cb: (err: any, data?: ResumeReplicationSiteCommandOutput) => void
  ): void;
  resumeReplicationSite(
    args: ResumeReplicationSiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeReplicationSiteCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryFailedObjectsCommand}
   */
  retryFailedObjects(): Promise<RetryFailedObjectsCommandOutput>;
  retryFailedObjects(
    args: RetryFailedObjectsCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<RetryFailedObjectsCommandOutput>;
  retryFailedObjects(
    args: RetryFailedObjectsCommandInput,
    cb: (err: any, data?: RetryFailedObjectsCommandOutput) => void
  ): void;
  retryFailedObjects(
    args: RetryFailedObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryFailedObjectsCommandOutput) => void
  ): void;

}

/**
 * @public
 */
export class ZenkoJsonService extends ZenkoJsonServiceClient implements ZenkoJsonService {}
createAggregatedClient(commands, ZenkoJsonService);
