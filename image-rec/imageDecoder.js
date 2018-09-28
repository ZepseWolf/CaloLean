// var getPixels = require("get-pixels")
// var pixel = [];
// var rgbArr =[];
// var count = 0;
// getPixels("./image-rec/img/fourCon2.png", function(err, pixels) {
//   if(err) {
//     console.log("Bad image path");
//     return
//   }
//
//   for(var i=0; i<pixels.shape[0];i++){
//     var x =0
//     for(x ; x<3;x++){
//       rgbArr.push(pixels.data[count]);
//       count++;
//     }
//     pixel.push(rgbArr);
//
//   }
//
//   console.log("got pixels 2.0", pixels.data);
//   console.log("got pixels", pixels.shape);
// })

var Jimp = require('jimp');
var specialArr = [];
// open a file called "lenna.png"


Jimp.read('./image-rec/img/test1.png', (err, image) => {
  if (err) throw err;

  var yArrRB =[];
  var yArrBR =[];
  //Right to bot
  // ----> format      >>>>>>
      // |             >>>>>>
      // |             >>>>>>
      // v             >>>>>>
    for(var y = 0 ; y < image.bitmap.height; y++){
      var xArrRB =[];
      for(var x =0; x < image.bitmap.width ; x++){
        xArrRB.push(Jimp.intToRGBA(image.getPixelColor(x, y)));
      }
      yArrRB.push(xArrRB);
    }
    console.log(yArrRB.length);

});


Jimp.read('./image-rec/img/black2.png', (err, image) => {
  if (err) throw err;
  var yArrRB =[];
  var yArrBR =[];
  //Right to bot
  // ----> format      >>>>>>
      // |             >>>>>>
      // |             >>>>>>
      // v             >>>>>>

    for(var y = 0 ; y < image.bitmap.height; y++){
      var xArrRB =[];
      for(var x =0; x < image.bitmap.width ; x++){
        xArrRB.push(Jimp.intToRGBA(image.getPixelColor(x, y)));
      }

      yArrRB.push(xArrRB);
    }
    checker(yArrRB);
    specialArr.forEach(function(item){
      image.setPixelColor(0xf44242, item[1], item[0]);
    });
console.log(specialArr);

});

function checker(arr ) {
  // 10 is the threshhold
  var a = [];
  var threshhold = 10;
  for(var y =0; y < arr.length-1 ; y++){
    for(var x =0; x < arr[y].length-1 ; x++){
      if ((arr[y][x].r+threshhold > arr[y][x+1].r && arr[y][x].r-threshhold < arr[y][x+1].r)&&
      (arr[y][x].g+threshhold > arr[y][x+1].g && arr[y][x].g-threshhold < arr[y][x+1].g )&&
      (arr[y][x].b+threshhold > arr[y][x+1].b && arr[y][x].b-threshhold < arr[y][x+1].b )){

        console.log('Yes it is normal to the next pixel');
      }
      else {
        areaFinder( arr ,x, y);
         console.log('no is not normal to the next pixel');
      }
    }
  }
}

async function areaFinder(arr,x,y) {

  var threshhold = 10;
  specialArr.push([x,y]);
  console.log(arr[y][x+1]);
  if ((arr[y][x].r+threshhold > arr[y][x+1].r && arr[y][x].r-threshhold < arr[y][x+1].r)&&
  (arr[y][x].g+threshhold > arr[y][x+1].g && arr[y][x].g-threshhold < arr[y][x+1].g )&&
  (arr[y][x].b+threshhold > arr[y][x+1].b && arr[y][x].b-threshhold < arr[y][x+1].b )){
    console.log('1 pixeled miss');
  }
  else {
    specialArr.push([x+1,y]);
  }
    arr[y+1][x+1]
    arr[y][x+1]
    arr[y+1][x]
    arr[y-1][x]
    arr[y-1][x+1]
    arr[y-1][x-1]
    arr[y-1][x+1]
}
