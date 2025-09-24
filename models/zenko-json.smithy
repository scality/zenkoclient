$version: "2"

namespace com.zenko.json

service ZenkoJsonService {
    version: "2018-07-08"
    operations: [
        CheckConnection
        GetLocationsStatus
        GetIngestionStatus
        ListFailed
        GetFailedObject
        RetryFailedObjects
        PauseReplication
        PauseIngestion
        PauseReplicationSite
        ResumeReplication
        ResumeIngestion
        ResumeReplicationSite
    ]
}

@readonly
@http(method: "GET", uri: "/_/backbeat/api/healthcheck")
operation CheckConnection {
    output: CheckConnectionOutput
}

@readonly
@http(method: "GET", uri: "/_/backbeat/api/crr/status")
operation GetLocationsStatus {
    output: GetLocationsStatusOutput
}

@readonly
@http(method: "GET", uri: "/_/backbeat/api/ingestion/status")
operation GetIngestionStatus {
    output: GetIngestionStatusOutput
}

@readonly
@http(method: "GET", uri: "/_/backbeat/api/crr/failed")
operation ListFailed {
    input: ListFailedInput
    output: ListFailedOutput
}

@readonly
@http(method: "GET", uri: "/_/backbeat/api/crr/failed/{Bucket}/{Key}")
operation GetFailedObject {
    input: GetFailedObjectInput
    output: GetFailedObjectOutput
}

@http(method: "POST", uri: "/_/backbeat/api/crr/failed")
operation RetryFailedObjects {
    input: RetryFailedObjectsInput
    output: RetryFailedObjectsOutput
}

@http(method: "POST", uri: "/_/backbeat/api/crr/pause")
operation PauseReplication {
    input: PauseReplicationInput
    output: PauseReplicationOutput
}

@http(method: "POST", uri: "/_/backbeat/api/ingestion/pause")
operation PauseIngestion {
    input: PauseIngestionInput
    output: PauseIngestionOutput
}

@http(method: "POST", uri: "/_/backbeat/api/crr/pause/{Site}")
operation PauseReplicationSite {
    input: PauseReplicationSiteInput
    output: PauseReplicationSiteOutput
}

@http(method: "POST", uri: "/_/backbeat/api/crr/resume")
operation ResumeReplication {
    input: ResumeReplicationInput
    output: ResumeReplicationOutput
}

@http(method: "POST", uri: "/_/backbeat/api/ingestion/resume")
operation ResumeIngestion {
    input: ResumeIngestionInput
    output: ResumeIngestionOutput
}

@http(method: "POST", uri: "/_/backbeat/api/crr/resume/{Site}")
operation ResumeReplicationSite {
    input: ResumeReplicationSiteInput
    output: ResumeReplicationSiteOutput
}

structure CheckConnectionOutput {}

structure GetLocationsStatusOutput {
    @jsonName("locations")
    locations: Document
}

structure GetIngestionStatusOutput {
    @jsonName("ingestion")
    ingestion: Document
}

@input
structure ListFailedInput {
    @httpQuery("marker")
    marker: String
    
    @httpQuery("storageType")
    storageType: String
    
    @httpQuery("storageClass")
    storageClass: String
}

@output
structure ListFailedOutput {
    @jsonName("IsTruncated")
    isTruncated: Boolean
    
    @jsonName("Marker")
    marker: String
    
    @jsonName("NextMarker") 
    nextMarker: String
    
    @jsonName("Versions")
    versions: FailedObjectList
}

@input
structure GetFailedObjectInput {
    @httpLabel
    @required
    Bucket: String
    
    @httpLabel
    @required
    Key: String
    
    @httpQuery("versionId")
    versionId: String
}

@output
structure GetFailedObjectOutput {
    @jsonName("Bucket")
    bucket: String
    
    @jsonName("Key")
    key: String
    
    @jsonName("VersionId")
    versionId: String
}

@input
structure RetryFailedObjectsInput {
    @jsonName("Bucket")
    bucket: String
    
    @jsonName("Key") 
    key: String
    
    @jsonName("VersionId")
    versionId: String
}

@output
structure RetryFailedObjectsOutput {}

@input
structure PauseReplicationInput {
    @jsonName("site")
    site: String
}

@output
structure PauseReplicationOutput {}

@input
structure PauseIngestionInput {
    @jsonName("site")
    site: String
}

@output
structure PauseIngestionOutput {}

@input
structure PauseReplicationSiteInput {
    @httpLabel
    @required
    Site: String
}

@output
structure PauseReplicationSiteOutput {}

@input
structure ResumeReplicationInput {
    @jsonName("site")
    site: String
}

@output
structure ResumeReplicationOutput {}

@input
structure ResumeIngestionInput {
    @jsonName("site")
    site: String
}

@output
structure ResumeIngestionOutput {}

@input
structure ResumeReplicationSiteInput {
    @httpLabel
    @required
    Site: String
}

@output
structure ResumeReplicationSiteOutput {}

list FailedObjectList {
    member: FailedObject
}

structure FailedObject {
    @jsonName("Bucket")
    bucket: String
    
    @jsonName("Key")
    key: String
    
    @jsonName("VersionId")
    versionId: String
}
