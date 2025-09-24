// smithy-typescript generated code
/**
 * @public
 */
export interface Bucket {
  Name?: string;
  CreationDate?: Date;
}

/**
 * @public
 */
export interface ListBucketsOutput {
  Buckets?: (Bucket)[];
}

/**
 * @public
 */
export interface S3Object {
  Key?: string;
  LastModified?: Date;
  Size?: number;
  StorageClass?: string;
}

/**
 * @public
 */
export interface ObjectVersion {
  Key?: string;
  VersionId?: string;
  IsLatest?: boolean;
  LastModified?: Date;
  Size?: number;
}

/**
 * @public
 */
export interface SearchBucketInput {
  Bucket: string | undefined;
  Query?: string;
  MaxKeys?: number;
  Marker?: string;
}

/**
 * @public
 */
export interface SearchBucketOutput {
  IsTruncated?: boolean;
  Contents?: (S3Object)[];
  MaxKeys?: number;
  Marker?: string;
  NextMarker?: string;
}

/**
 * @public
 */
export interface SearchBucketV2Input {
  Bucket: string | undefined;
  Query?: string;
  MaxKeys?: number;
  ContinuationToken?: string;
}

/**
 * @public
 */
export interface SearchBucketV2Output {
  IsTruncated?: boolean;
  Contents?: (S3Object)[];
  MaxKeys?: number;
  ContinuationToken?: string;
  NextContinuationToken?: string;
}

/**
 * @public
 */
export interface SearchBucketVersionsInput {
  Bucket: string | undefined;
  Query?: string;
  MaxKeys?: number;
  KeyMarker?: string;
  VersionIdMarker?: string;
}

/**
 * @public
 */
export interface SearchBucketVersionsOutput {
  IsTruncated?: boolean;
  Versions?: (ObjectVersion)[];
  MaxKeys?: number;
  KeyMarker?: string;
  NextKeyMarker?: string;
  VersionIdMarker?: string;
  NextVersionIdMarker?: string;
}
