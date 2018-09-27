const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

var discovery = new DiscoveryV1({
  username: '8f4a2bd4-3242-457e-9ea3-5afb265480fa',
  password: '0XcLhwfUwLxP',
  version_date: '2018-03-05'
});
var environment_id = 'f4071c52-6b36-433a-bb2f-93a71ca4e2ee';
var collection_id = '2df62c77-fa5f-4486-823b-acd8c26880c3';

module.exports = {
   discovery,
   environment_id,
   collection_id
}
