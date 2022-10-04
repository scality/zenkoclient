import {AWSError, Request, S3, Service} from 'aws-sdk';
type QueryRequest = {Query: string};
export declare class ZenkoClient extends Service {
    listBuckets(): Request<S3.ListBucketsOutput, AWSError>;
    searchBucketV2(params: S3.ListObjectsV2Request & QueryRequest): Request<S3.ListObjectsV2Output, AWSError>;
    searchBucket(params: S3.ListObjectsRequest & QueryRequest): Request<S3.ListObjectsOutput, AWSError>;
    searchBucketVersions(params: S3.ListObjectVersionsRequest & QueryRequest): Request<S3.ListObjectVersionsOutput, AWSError>;
}
