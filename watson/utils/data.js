const request = require('request');

var getHTML = (url,callback ) => {
  request({
    url: `https://scholar.google.com.vn/scholar?hl=en&as_sdt=0%2C5&q=meow`
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to google server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch google scholar html.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        html: body
      });
    }
  });
};

module.exports.getHTML = getHTML;
