// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[],
[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cbc8b277-0001-0049-574e-cfa567000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2fab42d8-0001-0001-504e-cf97fa000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:13:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a596b879-0001-0046-3e4e-cf2820000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b1dcc325-0001-0026-264e-cf6d02000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'abf6150f-0001-003f-434e-cf21db000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '74313069-0001-0047-0e4e-cf496c000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e204af52-0001-002f-324e-cf778c000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '11fbe66f-0001-0048-134e-cfc42b000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f9e94860-0001-0021-504e-cffb36000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f8cb5142-0001-0029-184e-cfe045000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'efa1950d-0001-0005-6c4e-cf02c9000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:80')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4553f7fa-0001-0045-6c4e-cf2b27000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:14:04 GMT',
  connection: 'close' });
 return result; }]];