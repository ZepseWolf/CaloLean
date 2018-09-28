const {visualRecognition} = require('./setUp.js');
const fs = require('fs');

//var images_file = fs.createReadStream('./watson-visual-recognition/img/lisa.jpg');

visualRecognition.getClassifier({
  classifier_id: 'humans'
},
  function (err, response) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response, null, 2))
  }
);
