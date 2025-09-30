// Example usage of ZenkoCloudserverClient
import { ZenkoCloudserverClient } from './zenko-cloudserver-client';

// Example configuration
const client = new ZenkoCloudserverClient({
  credentials: {
    accessKeyId: "your-access-key-id",
    secretAccessKey: "your-secret-access-key",
    // sessionToken: "optional-session-token", // Only if using temporary credentials
  },
  region: "us-east-1",
  endpoint: "https://your-zenko-endpoint.com",
  service: "s3", // Optional, defaults to "s3"
});

async function examples() {
  try {
    // Check connection health
    await client.checkConnection();
    console.log("Connection is healthy");

    // Get replication status for all locations
    const replicationStatus = await client.getLocationsStatus();
    console.log("Replication status:", replicationStatus);

    // Get ingestion status for all locations
    const ingestionStatus = await client.getLocationsIngestionStatus();
    console.log("Ingestion status:", ingestionStatus);

    // List failed replication objects
    const failedObjects = await client.listFailed({
      Marker: "optional-marker",
      Sitename: "optional-site-name"
    });
    console.log("Failed objects:", failedObjects);

    // Get details of a specific failed object
    const failedObjectDetails = await client.getFailedObject({
      Bucket: "my-bucket",
      Key: "my-object-key",
      VersionId: "object-version-id"
    });
    console.log("Failed object details:", failedObjectDetails);

    // Retry failed objects
    const retryResult = await client.retryFailedObjects({
      Body: JSON.stringify([
        {
          Bucket: "my-bucket",
          Key: "my-object-key",
          VersionId: "object-version-id",
          StorageClass: "STANDARD"
        }
      ])
    });
    console.log("Retry result:", retryResult);

    // Pause replication for a specific site
    await client.pauseSite({
      Site: "my-site-name",
      Body: JSON.stringify({ reason: "Maintenance" })
    });
    console.log("Site paused");

    // Resume replication for a specific site
    await client.resumeSite({
      Site: "my-site-name",
      Body: JSON.stringify({ reason: "Maintenance complete" })
    });
    console.log("Site resumed");

    // Schedule site resume
    await client.scheduleSiteResume({
      Site: "my-site-name",
      Body: JSON.stringify({ 
        scheduleTime: "2024-01-01T12:00:00Z",
        reason: "Scheduled maintenance end"
      })
    });
    console.log("Site resume scheduled");

    // Pause all replication sites
    await client.pauseAllSites({
      Body: JSON.stringify({ reason: "Global maintenance" })
    });
    console.log("All replication sites paused");

    // Resume all replication sites
    await client.resumeAllSites({
      Body: JSON.stringify({ reason: "Global maintenance complete" })
    });
    console.log("All replication sites resumed");

    // Ingestion operations work similarly
    await client.pauseIngestionSite({
      Site: "my-ingestion-site",
      Body: JSON.stringify({ reason: "Ingestion maintenance" })
    });
    console.log("Ingestion site paused");

    await client.resumeIngestionSite({
      Site: "my-ingestion-site",
      Body: JSON.stringify({ reason: "Ingestion maintenance complete" })
    });
    console.log("Ingestion site resumed");

  } catch (error) {
    console.error("Error:", error);
  }
}

// Uncomment to run examples
// examples();
