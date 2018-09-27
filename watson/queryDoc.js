const {discovery} = require('./utils/setUp.js');
const {environment_id} = require('./utils/setUp.js');
const {collection_id} = require('./utils/setUp.js');

// function collect(text){
//   return new Promise(resolve => {
//         discovery.query({ environment_id: `${environment_id}`, collection_id: `${collection_id}`, natural_language_query: text, passages:true }, function(error, data) {
//         //console.log(JSON.stringify(data,undefined, 2));
//         resolve(data.passages);
//     });
//   });
// }
var queryData = function(text){
  return new Promise((resolve,error) => {
    discovery.query({ environment_id: `${environment_id}`, collection_id: `${collection_id}`, natural_language_query: text, passages:true }, function(error, data) {
      console.log(data,undefined,2);
       resolve(data.passages);
    });
  });
}
var searchDoc = function(id){
  return new Promise((resolve,error) => {
    discovery.query({ environment_id: `${environment_id}`, collection_id: `${collection_id}`, document_id: id}, function(error, data) {
      console.log("SUCCESSSSS");
       console.log(data);
    });
  });
}



module.exports = {queryData , searchDoc};
