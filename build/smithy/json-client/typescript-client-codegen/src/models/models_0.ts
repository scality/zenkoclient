// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

/**
 * @public
 */
export interface CheckConnectionOutput {
}

/**
 * @public
 */
export interface FailedObject {
  bucket?: string;
  key?: string;
  versionId?: string;
}

/**
 * @public
 */
export interface GetFailedObjectInput {
  Bucket: string | undefined;
  Key: string | undefined;
  versionId?: string;
}

/**
 * @public
 */
export interface GetFailedObjectOutput {
  bucket?: string;
  key?: string;
  versionId?: string;
}

/**
 * @public
 */
export interface GetIngestionStatusOutput {
  ingestion?: __DocumentType;
}

/**
 * @public
 */
export interface GetLocationsStatusOutput {
  locations?: __DocumentType;
}

/**
 * @public
 */
export interface ListFailedInput {
  marker?: string;
  storageType?: string;
  storageClass?: string;
}

/**
 * @public
 */
export interface ListFailedOutput {
  isTruncated?: boolean;
  marker?: string;
  nextMarker?: string;
  versions?: (FailedObject)[];
}

/**
 * @public
 */
export interface PauseIngestionInput {
  site?: string;
}

/**
 * @public
 */
export interface PauseIngestionOutput {
}

/**
 * @public
 */
export interface PauseReplicationInput {
  site?: string;
}

/**
 * @public
 */
export interface PauseReplicationOutput {
}

/**
 * @public
 */
export interface PauseReplicationSiteInput {
  Site: string | undefined;
}

/**
 * @public
 */
export interface PauseReplicationSiteOutput {
}

/**
 * @public
 */
export interface ResumeIngestionInput {
  site?: string;
}

/**
 * @public
 */
export interface ResumeIngestionOutput {
}

/**
 * @public
 */
export interface ResumeReplicationInput {
  site?: string;
}

/**
 * @public
 */
export interface ResumeReplicationOutput {
}

/**
 * @public
 */
export interface ResumeReplicationSiteInput {
  Site: string | undefined;
}

/**
 * @public
 */
export interface ResumeReplicationSiteOutput {
}

/**
 * @public
 */
export interface RetryFailedObjectsInput {
  bucket?: string;
  key?: string;
  versionId?: string;
}

/**
 * @public
 */
export interface RetryFailedObjectsOutput {
}
