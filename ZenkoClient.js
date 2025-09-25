const { ZenkoJsonServiceClient } = require('./src/generated/ZenkoJsonServiceClient');
const { ZenkoXmlServiceClient } = require('./src/generated/ZenkoXmlServiceClient');
const { fromCredentials } = require('@aws-sdk/credential-providers');

const jsonCommands = require('./src/generated/commands');
const xmlCommands = require('./src/generated/commands');

class ZenkoClient {
    constructor(config = {}) {
        this._credentialsProvider = fromCredentials({
            accessKeyId: config.accessKeyId || '',
            secretAccessKey: config.secretAccessKey || '',
            sessionToken: config.sessionToken,
        });

        this._baseConfig = {
            region: config.region || 'us-east-1',
            endpoint: config.endpoint,
            credentials: this._credentialsProvider,
            forcePathStyle: config.s3ForcePathStyle || config.forcePathStyle,
        };

        this.config = { 
            apiVersion: config.apiVersion,
            update: this.updateCredentials.bind(this)
        };

        this._jsonClient = new ZenkoJsonServiceClient(this._baseConfig);
        this._xmlClient = new ZenkoXmlServiceClient(this._baseConfig);

        this._attachMethods();
    }

    updateCredentials(newConfig) {
        this._credentialsProvider = fromCredentials({
            accessKeyId: newConfig.accessKeyId || '',
            secretAccessKey: newConfig.secretAccessKey || '',
            sessionToken: newConfig.sessionToken,
        });

        this._baseConfig.credentials = this._credentialsProvider;

        this._jsonClient = new ZenkoJsonServiceClient(this._baseConfig);
        this._xmlClient = new ZenkoXmlServiceClient(this._baseConfig);

        this._attachMethods();
    }

    _attachMethods() {
        if (!this.config.apiVersion || this.config.apiVersion === '2018-07-11-xml') {
            this._attachXmlMethods();
        } else if (this.config.apiVersion === '2018-07-08-json') {
            this._attachJsonMethods();
        }
    }

    _attachXmlMethods() {
        this.listBuckets = async (params = {}) => {
            const command = new xmlCommands.ListBucketsCommand(params);
            return this._xmlClient.send(command);
        };

        this.searchBucketV2 = async params => {
            const command = new xmlCommands.SearchBucketV2Command(params);
            return this._xmlClient.send(command);
        };

        this.searchBucket = async params => {
            const command = new xmlCommands.SearchBucketCommand(params);
            return this._xmlClient.send(command);
        };

        this.searchBucketVersions = async params => {
            const command = new xmlCommands.SearchBucketVersionsCommand(params);
            return this._xmlClient.send(command);
        };
    }

    _attachJsonMethods() {
        this.checkConnection = async (params = {}) => {
            const command = new jsonCommands.CheckConnectionCommand(params);
            return this._jsonClient.send(command);
        };

        this.getLocationsStatus = async (params = {}) => {
            const command = new jsonCommands.GetLocationsStatusCommand(params);
            return this._jsonClient.send(command);
        };

        this.getIngestionStatus = async (params = {}) => {
            const command = new jsonCommands.GetIngestionStatusCommand(params);
            return this._jsonClient.send(command);
        };

        this.listFailed = async (params = {}) => {
            const command = new jsonCommands.ListFailedCommand(params);
            return this._jsonClient.send(command);
        };

        this.getFailedObject = async params => {
            const command = new jsonCommands.GetFailedObjectCommand(params);
            return this._jsonClient.send(command);
        };

        this.retryFailedObjects = async params => {
            const command = new jsonCommands.RetryFailedObjectsCommand(params);
            return this._jsonClient.send(command);
        };

        this.pauseReplication = async params => {
            const command = new jsonCommands.PauseReplicationCommand(params);
            return this._jsonClient.send(command);
        };

        this.pauseIngestion = async params => {
            const command = new jsonCommands.PauseIngestionCommand(params);
            return this._jsonClient.send(command);
        };

        this.pauseReplicationSite = async params => {
            const command = new jsonCommands.PauseReplicationSiteCommand(params);
            return this._jsonClient.send(command);
        };

        this.resumeReplication = async params => {
            const command = new jsonCommands.ResumeReplicationCommand(params);
            return this._jsonClient.send(command);
        };

        this.resumeIngestion = async params => {
            const command = new jsonCommands.ResumeIngestionCommand(params);
            return this._jsonClient.send(command);
        };

        this.resumeReplicationSite = async params => {
            const command = new jsonCommands.ResumeReplicationSiteCommand(params);
            return this._jsonClient.send(command);
        };
    }

    validateService() {
        if (!this.config.region) {
            this.config.region = 'us-east-1';
        }
    }
}

module.exports = ZenkoClient;
