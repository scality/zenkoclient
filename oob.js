const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({ profile: 'account1' });
const ZenkoClientBase = require('./ZenkoClient.js');

const client = new ZenkoClientBase({
    credentials,
    apiVersion: '2018-07-08-json',
    endpoint: 'http://127.0.0.1:8000',
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
    maxRetries: 0,
});

const params = { Site: 'wontwork-location' };
// client.pauseIngestionSite(params).promise().catch(err => {
//     console.log('error!!!', err);
// });


client.resumeIngestionSite(params).promise().catch(err => {
    console.log('error!!!', err);
});


// client.getLocationsIngestionStatus().promise().then(res => {
//     console.log('resumeIngestionSite res!!!', res);
// });
