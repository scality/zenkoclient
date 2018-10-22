const express = require('express');
const uuid = require('uuid/v4');

const ZenkoClient = require('../index');

const testPort = '4242';
const app = express();

const refResponse = {
    IsTruncated: false,
    Versions: [{
        Bucket: 'testbucket',
        Key: 'testkey',
        VersionId: 'abcdefghij1234567890',
        Size: 1024,
        LastModified: new Date('2018-07-09T18:40:12.277Z'),
    }],
};

const testQueryValue = uuid().replace(/-/g, '');

const Bucket = 'testbucket';
const Key = 'testkey';
const VersionId = 'abcdefghij1234567890';

const refResponseMarker = {
    IsTruncated: false,
    NextMarker: testQueryValue,
    Versions: [{
        Bucket,
        Key,
        VersionId,
        Size: 1024,
        StorageClass: 'testbackend',
        LastModified: new Date('2018-07-09T18:40:12.277Z'),
    }],
};

const refSpecResponse = {
    IsTruncated: false,
    Versions: [{
        Bucket,
        Key,
        VersionId,
        Size: 1024,
        StorageClass: 'testbackend1',
        LastModified: new Date('2018-07-09T18:40:12.277Z'),
    }, {
        Bucket,
        Key,
        VersionId,
        Size: 1024,
        StorageClass: 'testbackend2',
        LastModified: new Date('2018-07-09T18:40:12.277Z'),
    }],
};

const refRetryResponse = [
    {
        Bucket,
        Key,
        VersionId: 'versionid1',
        Size: 1024,
        StorageClass: 'testbackend1',
        LastModified: new Date('2018-07-09T18:40:12.277Z'),
        ReplicationStatus: 'PENDING',
    },
    {
        Bucket,
        Key,
        VersionId: 'versionid2',
        Size: 1024,
        StorageClass: 'testbackend2',
        LastModified: new Date('2018-07-09T18:40:12.277Z'),
        ReplicationStatus: 'PENDING',
    },
];

const refRetryRequest = [
    {
        Bucket,
        Key,
        VersionId: 'versionid1',
        StorageClass: 'testbackend1',
    },
    {
        Bucket,
        Key,
        VersionId: 'versionid2',
        StorageClass: 'testbackend2',
    },
];

const emptyResp = {
    IsTruncated: false,
    Versions: [],
};

const expectedSite = 'testLocation';
const pauseResumeServices = ['crr', 'ingestion'];

const expectedMarkerValue = {
    marker: testQueryValue,
    sitename: expectedSite,
};

app.get('/_/backbeat/api/crr/failed', (req, resp) => {
    if (req.query.marker || req.query.sitename) {
        let expectedResponse = refResponse;
        if (req.query.sitename) {
            expect(req.query.sitename).toEqual(expectedMarkerValue.sitename);
        }
        if (req.query.marker) {
            expect(req.query.marker).toEqual(expectedMarkerValue.marker);
            expectedResponse = refResponseMarker;
        }
        resp.send(JSON.stringify(expectedResponse));
    } else {
        expect(Object.keys(req.query)).toHaveLength(0);
        resp.send(JSON.stringify(emptyResp));
    }
});

app.get('/_/backbeat/api/crr/failed/:Bucket/:Key', (req, resp) => {
    expect(req.params).toEqual({ Bucket, Key });
    resp.send(JSON.stringify(refSpecResponse));
});

app.post('/_/backbeat/api/crr/failed', (req, resp) => {
    let body = '';
    req.on('data', data => { body += data; });
    req.on('end', () => {
        expect(body).toEqual(JSON.stringify(refRetryRequest));
        resp.send(JSON.stringify(refRetryResponse));
    });
});

app.get('/_/backbeat/api/:service/status', (req, resp) => {
    expect(pauseResumeServices).toContain(req.params.service);
    resp.send(JSON.stringify(
        { response: `get ${req.params.service} test response` }));
});

app.post('/_/backbeat/api/:service/:type(pause|resume)',
(req, resp) => {
    expect(pauseResumeServices).toContain(req.params.service);
    resp.send(JSON.stringify({
        response: `${req.params.service} ${req.params.type} test response`,
    }));
});

app.post('/_/backbeat/api/:service/:type(pause|resume)/:Site', (req, resp) => {
    expect(pauseResumeServices).toContain(req.params.service);
    expect(req.params.Site).toEqual(expectedSite);
    resp.send(JSON.stringify(
        { response: `${req.params.service} ${req.params.type} ` +
                    `${expectedSite} test response` }));
});

const resumeScheduleReq = { hours: 10 };

app.post('/_/backbeat/api/crr/resume/:Site/schedule', (req, resp) => {
    let body = '';
    req.on('data', data => { body += data; });
    req.on('end', () => {
        expect(req.params).toEqual({ Site: expectedSite });
        expect(body).toEqual(JSON.stringify(resumeScheduleReq));
        resp.send(JSON.stringify(
            { response: `schedule ${expectedSite} test response` }));
    });
});
const ownerId =
    '19f06f46b3fbd39f51187e962a028da7ed3b29cf13faf2919d90907b2dafdabf';

const searchResp = `
<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <Name>testbucketsearch</Name>
    <Prefix/>
    <Marker/>
    <MaxKeys>1000</MaxKeys>
    <IsTruncated>false</IsTruncated>
    <Contents>
        <Key>testKeySearch</Key>
        <LastModified>2018-07-09T07:22:07.961Z</LastModified>
        <ETag>&quot;55bbda19c4bc7ff178158760005a53d9&quot;</ETag>
        <Size>1024</Size>
        <Owner>
            <ID>${ownerId}</ID>
            <DisplayName>orbit</DisplayName>
        </Owner>
        <StorageClass>STANDARD</StorageClass>
    </Contents>
</ListBucketResult>
`;

const expectedSearchResult = {
    Name: 'testbucketsearch',
    Prefix: '',
    Marker: '',
    MaxKeys: 1000,
    IsTruncated: false,
    CommonPrefixes: [],
    Contents: [{
        Key: 'testKeySearch',
        LastModified: new Date('2018-07-09T07:22:07.961Z'),
        ETag: '"55bbda19c4bc7ff178158760005a53d9"',
        Size: 1024,
        Owner: {
            ID: ownerId,
            DisplayName: 'orbit',
        },
        StorageClass: 'STANDARD',
    }],
};

const testQueryString = 'key LIKE search';

app.get('/:Bucket', (req, resp) => {
    expect(req.params.Bucket).toEqual('testbucketsearch');
    expect(req.query.search).toEqual(testQueryString);
    resp.send(searchResp);
});

describe('class ZenkoClient behavior', () => {
    let zenkoClient;

    it('should default to xml api version when api version is not specified',
        () => {
            zenkoClient = new ZenkoClient({
                accessKeyId: 'accessKey1',
                secretAccessKey: 'verySecretKey1',
                endpoint: `http://localhost:${testPort}`,
                s3ForcePathStyle: true,
                signatureVersion: 'v4',
            });
            expect(zenkoClient.searchBucket).toBeTruthy();
            expect(zenkoClient.listFailed).toBeFalsy();
        }
    );

    it('should use xml api version',
        () => {
            zenkoClient = new ZenkoClient({
                apiVersion: '2018-07-11-xml',
                accessKeyId: 'accessKey1',
                secretAccessKey: 'verySecretKey1',
                endpoint: `http://localhost:${testPort}`,
                s3ForcePathStyle: true,
                signatureVersion: 'v4',
            });
            expect(zenkoClient.config.apiVersion).toEqual('2018-07-11-xml');
            expect(zenkoClient.searchBucket).toBeTruthy();
            expect(zenkoClient.listFailed).toBeFalsy();
        }
    );

    it('should use json api version',
        () => {
            zenkoClient = new ZenkoClient({
                apiVersion: '2018-07-08-json',
                accessKeyId: 'accessKey1',
                secretAccessKey: 'verySecretKey1',
                endpoint: `http://localhost:${testPort}`,
                s3ForcePathStyle: true,
                signatureVersion: 'v4',
            });
            expect(zenkoClient.config.apiVersion).toEqual('2018-07-08-json');
            expect(zenkoClient.searchBucket).toBeFalsy();
            expect(zenkoClient.listFailed).toBeTruthy();
        }
    );
});

describe('class ZenkoClient JSON api', () => {
    jest.setTimeout(30000);
    let zenkoClient;
    let server;

    beforeAll(done => {
        server = app.listen(testPort);
        return done();
    });

    beforeEach(() => {
        zenkoClient = new ZenkoClient({
            apiVersion: '2018-07-08-json',
            accessKeyId: 'accessKey1',
            secretAccessKey: 'verySecretKey1',
            endpoint: `http://localhost:${testPort}`,
            s3ForcePathStyle: true,
            signatureVersion: 'v4',
        });
    });

    afterAll(done => {
        server.once('close', done);
        server.close();
    });

    describe('ZenkoClient::listFailed', () => {
        it('should return empty list when sitename is undefined', done => {
            zenkoClient.listFailed({}).promise().then(res => {
                expect(res).toEqual(emptyResp);
                return done();
            }).catch(err => {
                expect(err).not.toBeTruthy();
                return done();
            });
        });

        it('should return correct response with sitename', done => {
            zenkoClient.listFailed({
                Sitename: expectedSite,
            }).promise().then(res => {
                expect(res).toEqual(refResponse);
                return done();
            }).catch(err => {
                expect(err).not.toBeTruthy();
                return done();
            });
        });

        it('should return correct reponse with marker', done => {
            zenkoClient.listFailed({
                Marker: testQueryValue,
            }).promise().then(res => {
                expect(res).toEqual(refResponseMarker);
                return done();
            }).catch(err => {
                expect(err).not.toBeTruthy();
                return done();
            });
        });
    });

    describe('ZenkoClient::getFailedObject', () => {
        const missingParamTests = [
            {
                it: 'should fail if "Bucket" prop is missing',
                params: { Key, VersionId: 'versionid' },
                missing: 'Bucket',
            },
            {
                it: 'should fail if "Key" prop is missing',
                params: { Bucket, VersionId: 'versionid' },
                missing: 'Key',
            },
            {
                it: 'should fail if "VersionId" prop is missing',
                params: { Bucket, Key },
                missing: 'VersionId',
            },
        ];

        missingParamTests.forEach(test => it(test.it, done => {
            zenkoClient.getFailedObject(test.params).promise().catch(err => {
                const expectedMessage =
                    `Missing required key '${test.missing}' in params`;
                expect(err.code).toEqual('MissingRequiredParameter');
                expect(err.message).toEqual(expectedMessage);
                return done();
            });
        }));

        it('should return correct response', done => {
            zenkoClient.getFailedObject({
                Bucket,
                Key,
                VersionId,
            }).promise().then(res => {
                expect(res).toEqual(refSpecResponse);
                return done();
            }).catch(err => {
                expect(err).not.toBeTruthy();
                return done();
            });
        });
    });

    describe('ZenkoClient::retryFailedObjects', () => {
        it('should return correct response', done => {
            zenkoClient.retryFailedObjects({
                Body: JSON.stringify(refRetryRequest),
            }).promise().then(res => {
                expect(res).toEqual({
                    Results: refRetryResponse,
                });
                return done();
            });
        });
    });

    describe('ZenkoClient::getLocationsStatus', () => {
        it('should return correct response for crr service',
        done => {
            zenkoClient.getLocationsStatus().promise()
                .then(res => {
                    expect(res).toEqual(
                        { response: 'get crr test response' });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });

        it('should return correct response for ingestion service',
        done => {
            zenkoClient.getLocationsIngestionStatus().promise()
                .then(res => {
                    expect(res).toEqual(
                        { response: 'get ingestion test response' });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });
    });

    describe('ZenkoClient::pauseAllSites', () => {
        it('should return correct response for crr service', done => {
            zenkoClient.pauseAllSites().promise()
                .then(res => {
                    expect(res).toEqual(
                        { response: 'crr pause test response' });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });

        it('should return correct response for ingestion service', done => {
            zenkoClient.pauseAllIngestionSites().promise()
                .then(res => {
                    expect(res).toEqual(
                        { response: 'ingestion pause test response' });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });
    });

    describe('ZenkoClient::pauseSite', () => {
        it('should return correct response for crr service', done => {
            zenkoClient.pauseSite({
                Site: expectedSite,
            }).promise()
                .then(res => {
                    expect(res).toEqual({
                        response: `crr pause ${expectedSite} test response`,
                    });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });

        it('should return correct response for ingestion service', done => {
            zenkoClient.pauseIngestionSite({
                Site: expectedSite,
            }).promise()
                .then(res => {
                    expect(res).toEqual({
                        response: `ingestion pause ${expectedSite} ` +
                                  'test response',
                    });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });
    });

    describe('ZenkoClient::resumeAllSites', () => {
        it('should return correct response for crr service', done => {
            zenkoClient.resumeAllSites().promise()
                .then(res => {
                    expect(res).toEqual({
                        response: 'crr resume test response',
                    });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });

        it('should return correct response for ingestion service', done => {
            zenkoClient.resumeAllIngestionSites().promise()
                .then(res => {
                    expect(res).toEqual({
                        response: 'ingestion resume test response',
                    });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });
    });

    describe('ZenkoClient::resumeSite', () => {
        it('should return correct response for crr service', done => {
            zenkoClient.resumeSite({
                Site: expectedSite,
            }).promise()
                .then(res => {
                    expect(res).toEqual({
                        response: `crr resume ${expectedSite} test response`,
                    });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });

        it('should return correct response for ingestion service', done => {
            zenkoClient.resumeIngestionSite({
                Site: expectedSite,
            }).promise()
                .then(res => {
                    expect(res).toEqual({
                        response: `ingestion resume ${expectedSite} ` +
                                  'test response',
                    });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });
    });

    describe('ZenkoClient::scheduleSiteResume', () => {
        it('should return correct response', done => {
            zenkoClient.scheduleSiteResume({
                Site: expectedSite,
                Body: JSON.stringify({ hours: 10 }),
            }).promise()
                .then(res => {
                    expect(res).toEqual(
                        { response: `schedule ${expectedSite} test response` });
                    return done();
                }).catch(err => {
                    expect(err).not.toBeTruthy();
                    return done();
                });
        });
    });
});

describe('class ZenkoClient XML api', () => {
    jest.setTimeout(30000);
    let zenkoClient;
    let server;

    beforeAll(done => {
        server = app.listen(testPort);
        return done();
    });

    beforeEach(() => {
        zenkoClient = new ZenkoClient({
            apiVersion: '2018-07-11-xml',
            accessKeyId: 'accessKey1',
            secretAccessKey: 'verySecretKey1',
            endpoint: `http://localhost:${testPort}`,
            s3ForcePathStyle: true,
            signatureVersion: 'v4',
        });
    });

    afterAll(done => {
        server.once('close', done);
        server.close();
    });

    describe('ZenkoClient::searchBucket', () => {
        it('shoud return error if "Query" is missing', done => {
            zenkoClient.searchBucket({
                Bucket: 'testbucketsearch',
            }).promise().catch(err => {
                const expectedMessage =
                    "Missing required key 'Query' in params";
                expect(err.code).toEqual('MissingRequiredParameter');
                expect(err.message).toEqual(expectedMessage);
                return done();
            });
        });

        it('should return correct response', done => {
            zenkoClient.searchBucket({
                Bucket: 'testbucketsearch',
                Query: 'key LIKE search',
            }).promise().then(res => {
                expect(res).toEqual(expectedSearchResult);
                return done();
            });
        });
    });
});
