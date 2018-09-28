var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'XCrptCYZXqbaaaQ7N3cWrVllbBT49SzT_RZbst0lucGj'
  });

module.exports={visualRecognition};
