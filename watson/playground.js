const {discovery} = require('./utils/setUp.js');
const {environment_id} = require('./utils/setUp.js');
const {collection_id} = require('./utils/setUp.js');
discovery.deleteDocument({ environment_id: environment_id, collection_id: collection_id, document_id: '486908ed3762e57815bf6ad8e5bfa0aa' }, function(error, data) {
  console.log(JSON.stringify(data, null, 2));
});
