const { ZenkoJsonServiceClient } = require('./src/generated/ZenkoJsonServiceClient');
const { ZenkoXmlServiceClient } = require('./src/generated/ZenkoXmlServiceClient');

const jsonCommands = require('./src/generated/commands');
const xmlCommands = require('./src/generated/commands');

class ZenkoClient {
    constructor(config = {}) {
        const clientConfig = {
            region: config.region || 'us-east-1',
            endpoint: config.endpoint,
            credentials: config.credentials || {
                accessKeyId: config.accessKeyId,
                secretAccessKey: config.secretAccessKey
            },
            forcePathStyle: config.s3ForcePathStyle || config.forcePathStyle
        };
        
        this.config = { apiVersion: config.apiVersion };
        this._jsonClient = new ZenkoJsonServiceClient(clientConfig);
        this._xmlClient = new ZenkoXmlServiceClient(clientConfig);
        
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
            return await this._xmlClient.send(command);
        };
        
        this.searchBucketV2 = async (params) => {
            const command = new xmlCommands.SearchBucketV2Command(params);
            return await this._xmlClient.send(command);
        };
        
        this.searchBucket = async (params) => {
            const command = new xmlCommands.SearchBucketCommand(params);
            return await this._xmlClient.send(command);
        };
        
        this.searchBucketVersions = async (params) => {
            const command = new xmlCommands.SearchBucketVersionsCommand(params);
            return await this._xmlClient.send(command);
        };
    }
    
    _attachJsonMethods() {
        this.checkConnection = async (params = {}) => {
            const command = new jsonCommands.CheckConnectionCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.getLocationsStatus = async (params = {}) => {
            const command = new jsonCommands.GetLocationsStatusCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.getIngestionStatus = async (params = {}) => {
            const command = new jsonCommands.GetIngestionStatusCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.listFailed = async (params = {}) => {
            const command = new jsonCommands.ListFailedCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.getFailedObject = async (params) => {
            const command = new jsonCommands.GetFailedObjectCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.retryFailedObjects = async (params) => {
            const command = new jsonCommands.RetryFailedObjectsCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.pauseReplication = async (params) => {
            const command = new jsonCommands.PauseReplicationCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.pauseIngestion = async (params) => {
            const command = new jsonCommands.PauseIngestionCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.pauseReplicationSite = async (params) => {
            const command = new jsonCommands.PauseReplicationSiteCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.resumeReplication = async (params) => {
            const command = new jsonCommands.ResumeReplicationCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.resumeIngestion = async (params) => {
            const command = new jsonCommands.ResumeIngestionCommand(params);
            return await this._jsonClient.send(command);
        };
        
        this.resumeReplicationSite = async (params) => {
            const command = new jsonCommands.ResumeReplicationSiteCommand(params);
            return await this._jsonClient.send(command);
        };
    }

    validateService() {
        if (!this.config.region) {
            this.config.region = 'us-east-1';
        }
    }
}

module.exports = ZenkoClient;
