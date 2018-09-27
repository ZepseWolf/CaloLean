const Regex = require("regex");
const request = require('request');

var htmlData = function (url){
  request({
    url: url
  }, (error, response, body) => {
    if (error) {
      console.error('Unable to connect to google server.',error);
    } else if (response.statusCode === 400) {
      console.error('Unable to fetch google scholar html.');
    } else if (response.statusCode === 200) {
      var regex = new Regex(/pdf/);
      var htmlArr  = [];
        var s = body;
        //Cleaning datas to get html---------------------------------
          var text = s.match(/-1"><a href="(.*?)"/g);
          text.forEach(function(x){
            x = x.replace(/-1"><a href="/g, "")
            x = x.replace(/"/g, "")

            if (regex.test("x")){
              htmlArr.push(x.replace(/&amp;/g, "&"));
              console.log("Html file");
            }
            else {
              htmlArr.push(x.replace(/&amp;/g, "&"));
              console.log("Pdf file");
            }
            console.log(`The html > ${x.replace(/&amp;/g, "&")}`);
          });
        //Cleaned and pushed in to htmlArr-----------------------------

    }
  })
};

module.exports = {htmlData};
