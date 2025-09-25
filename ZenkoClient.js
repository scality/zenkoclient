const { SignatureV4 } = require('@aws-sdk/signature-v4');
const { Sha256 } = require('@aws-crypto/sha256-browser');

const jsonApiModel = require('./zenko-2018-07-08-json.api.json');
const xmlApiModel = require('./zenko-2018-07-11-xml.api.json');

class ZenkoClient {
    constructor(config = {}) {
        this._baseConfig = {
            region: config.region || 'us-east-1',
            endpoint: config.endpoint,
            credentials: {
                accessKeyId: config.accessKeyId || '',
                secretAccessKey: config.secretAccessKey || '',
                sessionToken: config.sessionToken,
            },
            forcePathStyle: config.s3ForcePathStyle || config.forcePathStyle,
        };

        // Initialize AWS SDK v3 SignatureV4 for browser
        this._signer = new SignatureV4({
            service: 's3',
            region: this._baseConfig.region,
            credentials: this._baseConfig.credentials,
            sha256: Sha256,
        });

        this.config = { 
            apiVersion: config.apiVersion,
            update: this.updateCredentials.bind(this)
        };

        this._attachMethods();
    }

    updateCredentials(newConfig) {
        if (newConfig.accessKeyId !== undefined) {
            this._baseConfig.credentials.accessKeyId = newConfig.accessKeyId;
        }
        if (newConfig.secretAccessKey !== undefined) {
            this._baseConfig.credentials.secretAccessKey = newConfig.secretAccessKey;
        }
        if (newConfig.sessionToken !== undefined) {
            this._baseConfig.credentials.sessionToken = newConfig.sessionToken;
        }

        // Recreate signer with new credentials
        this._signer = new SignatureV4({
            service: 's3',
            region: this._baseConfig.region,
            credentials: this._baseConfig.credentials,
            sha256: Sha256,
        });

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
            return this._makeRequest('ListBuckets', params, xmlApiModel);
        };

        this.searchBucketV2 = async params => {
            return this._makeRequest('SearchBucketV2', params, xmlApiModel);
        };

        this.searchBucket = async params => {
            return this._makeRequest('SearchBucket', params, xmlApiModel);
        };

        this.searchBucketVersions = async params => {
            return this._makeRequest('SearchBucketVersions', params, xmlApiModel);
        };
    }

    _attachJsonMethods() {
        const operations = jsonApiModel.operations || {};

        Object.keys(operations).forEach(operationName => {
            const methodName = operationName.charAt(0).toLowerCase() + operationName.slice(1);
            this[methodName] = async (params = {}) => {
                return this._makeRequest(operationName, params, jsonApiModel);
            };
        });
    }

    async _makeRequest(operationName, params, apiModel) {
        const operation = apiModel.operations[operationName];
        if (!operation) {
            throw new Error(`Operation ${operationName} not found`);
        }

        const httpConfig = operation.http || {};
        const method = httpConfig.method || 'GET';
        const path = this._buildPath(httpConfig.requestUri || '/', params, operation);
        
        const url = new URL(path, this._baseConfig.endpoint);
        
        // Build headers
        const headers = {
            'Content-Type': apiModel.metadata.protocol === 'rest-json' ? 'application/json' : 'application/xml',
            'User-Agent': 'zenkoclient/2.0.0',
            'Host': url.host,
        };

        // Build request body
        let body;
        if (method !== 'GET' && method !== 'HEAD') {
            if (apiModel.metadata.protocol === 'rest-json') {
                body = JSON.stringify(params);
            } else {
                body = this._buildXmlBody(params, operation);
            }
        }

        // Create request object for AWS SDK v3 signing
        const request = {
            method,
            protocol: url.protocol,
            hostname: url.hostname,
            port: url.port || (url.protocol === 'https:' ? 443 : 80),
            path: url.pathname + url.search,
            headers,
            body,
        };

        // Sign request using AWS SDK v3 SignatureV4
        const signedRequest = await this._signer.sign(request);

        // Execute request using browser-native fetch()
        const fetchUrl = `${signedRequest.protocol}//${signedRequest.hostname}:${signedRequest.port}${signedRequest.path}`;
        
        const response = await fetch(fetchUrl, {
            method: signedRequest.method,
            headers: signedRequest.headers,
            body: signedRequest.body,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        // Parse response
        const responseText = await response.text();
        
        if (apiModel.metadata.protocol === 'rest-json') {
            return JSON.parse(responseText);
        } else {
            return this._parseXmlResponse(responseText);
        }
    }

    _buildPath(template, params, operation) {
        let path = template;
        
        // Replace path parameters
        if (operation.input && operation.input.members) {
            Object.keys(operation.input.members).forEach(paramName => {
                const paramConfig = operation.input.members[paramName];
                if (paramConfig.location === 'uri' && params[paramName]) {
                    path = path.replace(`{${paramConfig.locationName || paramName}}`, encodeURIComponent(params[paramName]));
                }
            });
        }

        // Add query parameters
        const queryParams = new URLSearchParams();
        if (operation.input && operation.input.members) {
            Object.keys(operation.input.members).forEach(paramName => {
                const paramConfig = operation.input.members[paramName];
                if (paramConfig.location === 'querystring' && params[paramName] !== undefined) {
                    queryParams.set(paramConfig.locationName || paramName, params[paramName]);
                }
            });
        }

        // Add Query parameter for search operations
        if (params.Query) {
            queryParams.set('query', params.Query);
        }

        const queryString = queryParams.toString();
        return queryString ? `${path}?${queryString}` : path;
    }

    _buildXmlBody(params, operation) {
        if (!params || Object.keys(params).length === 0) {
            return '';
        }

        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<Request>\n';
        
        Object.keys(params).forEach(key => {
            if (key !== 'Bucket' && key !== 'Query') {
                xml += `  <${key}>${params[key]}</${key}>\n`;
            }
        });
        
        xml += '</Request>';
        return xml;
    }

    _parseXmlResponse(xmlText) {
        if (!xmlText) return {};
        
        try {
            const result = {};
            const matches = xmlText.match(/<(\w+)>([^<]+)<\/\1>/g);
            if (matches) {
                matches.forEach(match => {
                    const tagMatch = match.match(/<(\w+)>([^<]+)<\/\1>/);
                    if (tagMatch) {
                        result[tagMatch[1]] = tagMatch[2];
                    }
                });
            }
            return result;
        } catch (error) {
            return { rawResponse: xmlText };
        }
    }

    validateService() {
        if (!this.config.region) {
            this.config.region = 'us-east-1';
        }
    }
}

module.exports = ZenkoClient;