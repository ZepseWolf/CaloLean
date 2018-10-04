const {visualRecognition} = require('./setUp.js');
const fs = require('fs');

var images_file = fs.createReadStream('./img/guy.jpg');

var params = {
  images_file: images_file
};

visualRecognition.classify({images_file:images_file, classifier_ids:'humans_1354351809'}, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});
