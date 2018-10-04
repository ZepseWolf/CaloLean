const request = require('request');
const rp = require('request-promise');
const Jimp = require('jimp');

new Jimp(360, 180, (err, image) => {
  var coordObj = [];

  var yArr = [];
  var url = 'https://maps.googleapis.com/maps/api/elevation/json?locations=';
  //360 is x 180 is a rectangle
  // this image is 360 x 180, every pixel is set to 0x00000000
  for(var y = 0 ; y < 90; y++){
    var xArr = [];
    for(var x =0; x < 60 ; x++){
      rp({
        url: `https://maps.googleapis.com/maps/api/elevation/json?locations=${y},${x}&key=AIzaSyAQXJN3cAEQYF3tabX4bYKH7p7ZG1YCZRA`,
        json: true
      }, (error, response, body) => {
        if (error) {
          console.log('Unable to connect to Google servers.');
        } else if (body.status  === 'ZERO_RESULTS') {
          console.log('Unable to find that address.');
        } else {
          coordObj.push({
            altitude : body.results[0].elevation,
            y  : body.results[0].location.lat,
            x : body.results[0].location.lng
          })
          //console.log('yes',body.results[0].elevation,body.results[0].location.lat,body.results[0].location.lng);
          return(body.results[0]);
        //image.setPixelColor(parseInt(`0x${body.results[0].formatted_address}FF`), x, y);
        }
      }).then((res)=>{
        rp({
          url: `https://maps.googleapis.com/maps/api/elevation/json?locations=${res.results[0].location.lat},${res.results[0].location.lng+60}&key=AIzaSyAQXJN3cAEQYF3tabX4bYKH7p7ZG1YCZRA`,
          json: true
        }, (error, response, body) => {
          if (error) {
            console.log('Unable to connect to Google servers.');
          } else if (body.status  === 'ZERO_RESULTS') {
            console.log('Unable to find that address.');
          } else {
            coordObj.push({
              altitude : body.results[0].elevation,
              y  : body.results[0].location.lat,
              x : body.results[0].location.lng
            });
            //console.log('yes 2nd loop',body.results[0].elevation,body.results[0].location.lat,body.results[0].location.lng);
            return(body.results[0]);
          //image.setPixelColor(parseInt(`0x${body.results[0].formatted_address}FF`), x, y);
          }
        }).then((data)=>{
          rp({
            url: `https://maps.googleapis.com/maps/api/elevation/json?locations=${data.results[0].location.lat},${data.results[0].location.lng+120}&key=AIzaSyAQXJN3cAEQYF3tabX4bYKH7p7ZG1YCZRA`,
            json: true
          }, (error, response, body) => {
            if (error) {
              console.log('Unable to connect to Google servers.');
            } else if (body.status  === 'ZERO_RESULTS') {
              console.log('Unable to find that address.');
            } else {
              coordObj.push({
                altitude : body.results[0].elevation,
                y  : body.results[0].location.lat,
                x : body.results[0].location.lng
              });
              //console.log('yes 2nd loop',body.results[0].elevation,body.results[0].location.lat,body.results[0].location.lng);
              return(body.results[0]);
            //image.setPixelColor(parseInt(`0x${body.results[0].formatted_address}FF`), x, y);
            }
          }).then((res)=>{
            //console.log(coordObj);
            //xArr.push(res.elevation);
            //console.log('yes',res.elevation);
          });
        });
      });


    }//x loop
    //yArr.push(xArr);
  }
  $q.all(coordObj).then((res)=>{
    console.log(res);
  })
    //console.log(yArr);
  // image.write('map.jpg',(e,res) =>{
  //    if (e)
  //    console.log(e);
  //    else
  //    console.log('Success');
  // });
});
