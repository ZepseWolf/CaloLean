var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const fs = require('fs');

var info = {
  "apikey": "1ImX0abYJPqlYzm56WzIr7O0Hd8UmAjPMV96GRuhuo9s",
  "iam_apikey_description": "Auto generated apikey during resource-key operation for Instance - crn:v1:bluemix:public:discovery:au-syd:a/2260cae2bac240a19bc4c6a437af23b3:41a8b30e-6777-46d7-8695-1023c2e6f9fa::",
  "iam_apikey_name": "auto-generated-apikey-780a114f-e0bd-46c0-9985-b547fc75c349",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/2260cae2bac240a19bc4c6a437af23b3::serviceid:ServiceId-f29b1801-1044-46a8-87a1-3821913670fb",
  "url": "https://gateway-syd.watsonplatform.net/discovery/api"
};

var discovery = new DiscoveryV1({
    version: '{version}',
    iam_apikey: '{iam_api_key}',
    url: '{url}'
});
console.log(info.url);
