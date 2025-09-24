$version: "2"

namespace com.zenko.xml

service ZenkoXmlService {
    version: "2018-07-11"
    operations: [
        ListBuckets
        SearchBucketV2  
        SearchBucket
        SearchBucketVersions
    ]
}

@readonly
@http(method: "GET", uri: "/")
operation ListBuckets {
    output: ListBucketsOutput
}

@readonly
@http(method: "GET", uri: "/{Bucket}?list-type=2")
operation SearchBucketV2 {
    input: SearchBucketV2Input
    output: SearchBucketV2Output
}

@readonly
@http(method: "GET", uri: "/{Bucket}")
operation SearchBucket {
    input: SearchBucketInput
    output: SearchBucketOutput
}

@readonly
@http(method: "GET", uri: "/{Bucket}?versions")
operation SearchBucketVersions {
    input: SearchBucketVersionsInput
    output: SearchBucketVersionsOutput
}

// Input structures
@input
structure SearchBucketV2Input {
    @httpLabel
    @required
    Bucket: String
    
    @httpQuery("query")
    Query: String
    
    @httpQuery("max-keys") 
    MaxKeys: Integer
    
    @httpQuery("continuation-token")
    ContinuationToken: String
}

@input
structure SearchBucketInput {
    @httpLabel
    @required
    Bucket: String
    
    @httpQuery("query")
    Query: String
    
    @httpQuery("max-keys")
    MaxKeys: Integer
    
    @httpQuery("marker")
    Marker: String
}

@input  
structure SearchBucketVersionsInput {
    @httpLabel
    @required
    Bucket: String
    
    @httpQuery("query")
    Query: String
    
    @httpQuery("max-keys")
    MaxKeys: Integer
    
    @httpQuery("key-marker")
    KeyMarker: String
    
    @httpQuery("version-id-marker") 
    VersionIdMarker: String
}

// Output structures  
@output
structure ListBucketsOutput {
    Buckets: BucketList
}

@output
structure SearchBucketV2Output {
    IsTruncated: Boolean
    Contents: ObjectList
    MaxKeys: Integer
    ContinuationToken: String
    NextContinuationToken: String
}

@output
structure SearchBucketOutput {
    IsTruncated: Boolean
    Contents: ObjectList  
    MaxKeys: Integer
    Marker: String
    NextMarker: String
}

@output
structure SearchBucketVersionsOutput {
    IsTruncated: Boolean
    Versions: ObjectVersionList
    MaxKeys: Integer
    KeyMarker: String
    NextKeyMarker: String
    VersionIdMarker: String
    NextVersionIdMarker: String
}

// Data structures
list BucketList {
    member: Bucket
}

list ObjectList {
    member: S3Object  
}

list ObjectVersionList {
    member: ObjectVersion
}

structure Bucket {
    Name: String
    CreationDate: Timestamp
}

structure S3Object {
    Key: String
    LastModified: Timestamp  
    Size: Long
    StorageClass: String
}

structure ObjectVersion {
    Key: String
    VersionId: String
    IsLatest: Boolean
    LastModified: Timestamp
    Size: Long
}
