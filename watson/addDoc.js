const request = require('request');
const fs = require('fs');
const pdfreader = require('pdfreader');
const {discovery} = require('./utils/setUp.js');
const {environment_id} = require('./utils/setUp.js');
const {collection_id} = require('./utils/setUp.js');
//var buf = pdfjs.getDocument('test/Molecular mechanisms of calcium-dependent neurodegeneration in excitotoxicity.pdf');
var buf;
// TODO: parse in data from dataParser.
var url  = 'https://academic.oup.com/brain/article/133/2/529/286611';

// new pdfreader.PdfReader().parseFileItems("https://www.researchgate.net/profile/Piotr_Bregestovski/publication/16876291_Nowak_L_P_Bregestovski_P_Ascher_P_Herbert_A_Prochiantz_A_Magnesium_gates_glutamate-activated_channels_in_mouse_central_neurones_Nature_307_462-465/links/546115570cf2c1a63bff7cd5.pdf", function(err, item){
//
//     console.log(item);
// });
fs.readFile("/test/", (e,data)=>{
  buf = data;
  if (e) {
    console.error('This is error',e);
  }
console.log(buf);
// request(url, function(error, response, html){
//   buf = Buffer.from(response.body);
  discovery.addDocument({ environment_id: environment_id, collection_id: collection_id, file: buf, filename: },
    function(error, data) {
      if (!error) {
        console.log(JSON.stringify(data, null, 2), url);
      } else {
        console.log(error);
      }
    }
  );

});


// -------------------------------------------------------------------------GRAVEYARD -----------------------------------------------------------------
 //console.log(JSON.stringify(data.results[x].extracted_metadata.title, null, 2));
