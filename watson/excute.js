const {discovery} = require('./utils/setUp.js');
const {environment_id} = require('./utils/setUp.js');
const {collection_id} = require('./utils/setUp.js');

discovery.query({ environment_id: `${environment_id}`, collection_id: `${collection_id}`, natural_language_query: 'brain', passages:true }, function(error, data) {
//console.log(JSON.stringify(data,undefined, 2));
  data.passages.forEach(function(element) {
    console.log(element.passage_text);
  });
});
