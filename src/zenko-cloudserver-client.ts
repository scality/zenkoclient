import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Sha256 } from "@aws-crypto/sha256-js";
import { HttpRequest } from "@smithy/protocol-http";
import { AwsCredentialIdentity } from "@aws-sdk/types";

// Types for API operations
export interface ZenkoCloudserverClientConfig {
  credentials: AwsCredentialIdentity;
  region: string;
  endpoint: string;
  service?: string;
}

// Shape types from the API specification
export interface ResponseShape {
  Bucket?: string;
  Key?: string;
  VersionId?: string;
  StorageClass?: string;
  Size?: number;
  LastModified?: Date;
}

export interface RequestShape {
  Bucket?: string;
  Key?: string;
  VersionId?: string;
  StorageClass?: string;
}

export interface RetryResponseShape extends ResponseShape {
  ReplicationStatus?: string;
}

// Input/Output types for operations
export interface ListFailedInput {
  Marker?: string;
  Sitename?: string;
}

export interface ListFailedOutput {
  IsTruncated?: boolean;
  NextMarker?: string;
  Versions?: ResponseShape[];
}

export interface GetFailedObjectInput {
  Bucket: string;
  Key: string;
  VersionId: string;
}

export interface GetFailedObjectOutput {
  IsTruncated?: boolean;
  Versions?: ResponseShape[];
}

export interface RetryFailedObjectsInput {
  Body: string | Buffer | Uint8Array;
}

export interface RetryFailedObjectsOutput {
  Results?: RetryResponseShape[];
}

export interface PauseSiteInput {
  Site: string;
  Body?: string | Buffer | Uint8Array;
}

export interface ResumeSiteInput {
  Site: string;
  Body?: string | Buffer | Uint8Array;
}

export interface ScheduleSiteResumeInput {
  Site: string;
  Body?: string | Buffer | Uint8Array;
}

export interface PauseAllSitesInput {
  Body?: string | Buffer | Uint8Array;
}

export interface ResumeAllSitesInput {
  Body?: string | Buffer | Uint8Array;
}

export type LocationsStatusOutput = Record<string, any>;
export type LocationsIngestionStatusOutput = Record<string, any>;
export type SiteOperationOutput = Record<string, any>;

export class ZenkoCloudserverClient {
  private config: ZenkoCloudserverClientConfig;
  private signer: SignatureV4;

  constructor(config: ZenkoCloudserverClientConfig) {
    this.config = {
      service: "s3",
      ...config,
    };
    
    this.signer = new SignatureV4({
      credentials: this.config.credentials,
      region: this.config.region,
      service: this.config.service!,
      sha256: Sha256,
    });
  }

  private async makeRequest(
    method: string,
    path: string,
    queryParams?: Record<string, string>,
    body?: string | Buffer | Uint8Array
  ): Promise<any> {
    const url = new URL(path, this.config.endpoint);
    
    // Add query parameters
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.set(key, value);
        }
      });
    }

    const request = new HttpRequest({
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port ? parseInt(url.port) : undefined,
      method,
      path: url.pathname + url.search,
      headers: {
        host: url.host,
        ...(body && { "content-type": "application/json" }),
      },
      body,
    });

    const signedRequest = await this.signer.sign(request);
    
    // Make the actual HTTP request
    const response = await fetch(url.toString(), {
      method: signedRequest.method,
      headers: signedRequest.headers as Record<string, string>,
      body: signedRequest.body,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
    
    return await response.text();
  }

  // Health check operation
  async checkConnection(): Promise<void> {
    await this.makeRequest("GET", "/_/backbeat/api/healthcheck");
  }

  // Get locations replication status
  async getLocationsStatus(): Promise<LocationsStatusOutput> {
    return await this.makeRequest("GET", "/_/backbeat/api/crr/status");
  }

  // Alias for getLocationsStatus
  async getLocationsReplicationStatus(): Promise<LocationsStatusOutput> {
    return this.getLocationsStatus();
  }

  // Get locations ingestion status
  async getLocationsIngestionStatus(): Promise<LocationsIngestionStatusOutput> {
    return await this.makeRequest("GET", "/_/backbeat/api/ingestion/status");
  }

  // List failed replication objects
  async listFailed(input: ListFailedInput = {}): Promise<ListFailedOutput> {
    const queryParams: Record<string, string> = {};
    if (input.Marker) queryParams.marker = input.Marker;
    if (input.Sitename) queryParams.sitename = input.Sitename;

    return await this.makeRequest("GET", "/_/backbeat/api/crr/failed", queryParams);
  }

  // Get specific failed object
  async getFailedObject(input: GetFailedObjectInput): Promise<GetFailedObjectOutput> {
    const path = `/_/backbeat/api/crr/failed/${encodeURIComponent(input.Bucket)}/${encodeURIComponent(input.Key)}`;
    const queryParams = { versionId: input.VersionId };

    return await this.makeRequest("GET", path, queryParams);
  }

  // Retry failed objects
  async retryFailedObjects(input: RetryFailedObjectsInput): Promise<RetryFailedObjectsOutput> {
    return await this.makeRequest("POST", "/_/backbeat/api/crr/failed", undefined, input.Body);
  }

  // Pause all replication sites
  async pauseAllSites(input: PauseAllSitesInput = {}): Promise<SiteOperationOutput> {
    return await this.makeRequest("POST", "/_/backbeat/api/crr/pause", undefined, input.Body);
  }

  // Alias for pauseAllSites
  async pauseAllReplicationSites(input: PauseAllSitesInput = {}): Promise<SiteOperationOutput> {
    return this.pauseAllSites(input);
  }

  // Pause all ingestion sites
  async pauseAllIngestionSites(input: PauseAllSitesInput = {}): Promise<SiteOperationOutput> {
    return await this.makeRequest("POST", "/_/backbeat/api/ingestion/pause", undefined, input.Body);
  }

  // Pause specific replication site
  async pauseSite(input: PauseSiteInput): Promise<SiteOperationOutput> {
    const path = `/_/backbeat/api/crr/pause/${encodeURIComponent(input.Site)}`;
    return await this.makeRequest("POST", path, undefined, input.Body);
  }

  // Alias for pauseSite
  async pauseReplicationSite(input: PauseSiteInput): Promise<SiteOperationOutput> {
    return this.pauseSite(input);
  }

  // Pause specific ingestion site
  async pauseIngestionSite(input: PauseSiteInput): Promise<SiteOperationOutput> {
    const path = `/_/backbeat/api/ingestion/pause/${encodeURIComponent(input.Site)}`;
    return await this.makeRequest("POST", path, undefined, input.Body);
  }

  // Resume all replication sites
  async resumeAllSites(input: ResumeAllSitesInput = {}): Promise<SiteOperationOutput> {
    return await this.makeRequest("POST", "/_/backbeat/api/crr/resume", undefined, input.Body);
  }

  // Alias for resumeAllSites
  async resumeAllReplicationSites(input: ResumeAllSitesInput = {}): Promise<SiteOperationOutput> {
    return this.resumeAllSites(input);
  }

  // Resume all ingestion sites
  async resumeAllIngestionSites(input: ResumeAllSitesInput = {}): Promise<SiteOperationOutput> {
    return await this.makeRequest("POST", "/_/backbeat/api/ingestion/resume", undefined, input.Body);
  }

  // Resume specific replication site
  async resumeSite(input: ResumeSiteInput): Promise<SiteOperationOutput> {
    const path = `/_/backbeat/api/crr/resume/${encodeURIComponent(input.Site)}`;
    return await this.makeRequest("POST", path, undefined, input.Body);
  }

  // Alias for resumeSite
  async resumeReplicationSite(input: ResumeSiteInput): Promise<SiteOperationOutput> {
    return this.resumeSite(input);
  }

  // Resume specific ingestion site
  async resumeIngestionSite(input: ResumeSiteInput): Promise<SiteOperationOutput> {
    const path = `/_/backbeat/api/ingestion/resume/${encodeURIComponent(input.Site)}`;
    return await this.makeRequest("POST", path, undefined, input.Body);
  }

  // Schedule replication site resume
  async scheduleSiteResume(input: ScheduleSiteResumeInput): Promise<SiteOperationOutput> {
    const path = `/_/backbeat/api/crr/resume/${encodeURIComponent(input.Site)}/schedule`;
    return await this.makeRequest("POST", path, undefined, input.Body);
  }

  // Alias for scheduleSiteResume
  async scheduleReplicationSiteResume(input: ScheduleSiteResumeInput): Promise<SiteOperationOutput> {
    return this.scheduleSiteResume(input);
  }

  // Schedule ingestion site resume
  async scheduleIngestionSiteResume(input: ScheduleSiteResumeInput): Promise<SiteOperationOutput> {
    const path = `/_/backbeat/api/ingestion/resume/${encodeURIComponent(input.Site)}/schedule`;
    return await this.makeRequest("POST", path, undefined, input.Body);
  }
}
