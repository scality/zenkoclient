import { S3 } from '@aws-sdk/client-s3';

type QueryRequest = { Query: string };

export interface ZenkoClientConfig {
    apiVersion?: '2018-07-08-json' | '2018-07-11-xml';
    credentials?: {
        accessKeyId: string;
        secretAccessKey: string;
    };
    accessKeyId?: string;
    secretAccessKey?: string;
    sessionToken?: string;
    region?: string;
    endpoint?: string;
    s3ForcePathStyle?: boolean;
    forcePathStyle?: boolean;
}

export declare class ZenkoClient {
    constructor(config?: ZenkoClientConfig);
    readonly config: { 
        apiVersion?: string;
        update: (config: {
            accessKeyId?: string;
            secretAccessKey?: string;
            sessionToken?: string;
        }) => void;
    };
    
    listBuckets(): Promise<S3.ListBucketsOutput>;
    searchBucketV2(params: S3.ListObjectsV2Request & QueryRequest): Promise<S3.ListObjectsV2Output>;
    searchBucket(params: S3.ListObjectsRequest & QueryRequest): Promise<S3.ListObjectsOutput>;
    searchBucketVersions(params: S3.ListObjectVersionsRequest & QueryRequest): Promise<S3.ListObjectVersionsOutput>;
    
    validateService(): void;
}

export = ZenkoClient;
