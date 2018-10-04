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


// Jimp.read('./image-rec/img/test1.png', (err, image) => {
//   if (err) throw err;
//
//   var yArrRB =[];
//   var yArrBR =[];
//   //Right to bot
//   // ----> format      >>>>>>
//       // |             >>>>>>
//       // |             >>>>>>
//       // v             >>>>>>
//     for(var y = 0 ; y < image.bitmap.height; y++){
//       var xArrRB =[];
//       for(var x =0; x < image.bitmap.width ; x++){
//         xArrRB.push(Jimp.intToRGBA(image.getPixelColor(x, y)));
//       }
//       yArrRB.push(xArrRB);
//     }
//     console.log(yArrRB.length);
//
// });


Jimp.read('./image-rec/img/b510dc0d5cd3906018c4dd49b98643.jpg', (err, image) => {
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
    image.setPixelColor(0xF44242FF, item[0], item[1]);
   });

   image.write('lena-small-bw.jpg',(e,res) =>{
      if (e)
      console.log(e);
      else
      console.log('Success');
   });
    //console.log(specialArr);

});
var doneBool = false;
var theShape = [];
function checker(arr) {
  // 10 is the threshhold
  var a = [];
  var threshhold = 10;
  for(var y =0; y < arr.length ; y++){
    for(var x =0; x < arr[y].length ; x++){
      if(!arr[y][x+1]){
        // ignore non pixiel comparer , at the end of the picture
        // can increase speed by doing some function
      }else{
        if ((arr[y][x].r+threshhold > arr[y][x+1].r && arr[y][x].r-threshhold < arr[y][x+1].r)&&
        (arr[y][x].g+threshhold > arr[y][x+1].g && arr[y][x].g-threshhold < arr[y][x+1].g )&&
        (arr[y][x].b+threshhold > arr[y][x+1].b && arr[y][x].b-threshhold < arr[y][x+1].b )){
          //console.log('Yes it is normal to the next pixel');
        }
        else {
          // it comes here when colour change
          if (!doneBool ){
            theShape.push({
              smallX : x+1,
              largerX: x+1,
              differenceRange: 0,
              yAxis: y
            });
            //console.log(theShape.length);
            doneBool = true;
          }

           theShape[theShape.length-1].largerX = x;
           theShape[theShape.length-1].differenceRange = x - theShape[theShape.length-1].smallX ;
          // can do a +1 to x and y for the exact change
          //x+1 and y+1 is the change of colour

          areaFinder(arr ,x+1, y+1);
          // console.log('no is not normal to the next pixel');
        }
      }
    }
    doneBool = false;
  }
  //GET RAID OF THE RANDOM EXTRA speckle first
  // console.log(
  //
  // Math.max.apply(Math, theShape.map((o)=> o.largerX)));
  var countThreshhold = 0 ;
  var countChangeThreshhold = 0 ;
  var changeThreshhold = 50 ;
  var holder = 0;
  //var changeThreshhold = 0 ;
  var changed = false;
  for(var i=0 ; i < theShape.length ; i++){
    if(theShape[i+1]){
      if (theShape[i].differenceRange < theShape[i+1].differenceRange+changeThreshhold && theShape[i].differenceRange > theShape[i+1].differenceRange-changeThreshhold ){
       // compare the first vs next array too see if it fall within the changeThreshhold ,we setted manually @50
       if(changed){
         //we will test if the norm is idea for a reconized change
         if(countThreshhold < countChangeThreshhold){ // should not be here
           // the new norm
           countThreshhold = countChangeThreshhold;
           changed = false;
         }
         countChangeThreshhold++;
       }
       countThreshhold++;
      }else{
       // tell the system that it did not fall within the changeThreshhold
       countChangeThreshhold = 1;
       holder = countThreshhold; // after it change it will hold the old count
       changed = true;
      }
    }


  }
  // theShape.forEach((element)=>{
  //
  // });


  //console.log(theShape);
  //console.log(specialArr);
}


async function areaFinder(arr,x,y) {
  // create a virus-like loop that will find the threshold
  // range of colour and map it out on specialArr
  var threshhold = 10;

  if(!arr[y][x+1]){
    // ignore non pixiel comparer , at the end of the picture
  }else{
    //console.log(arr[y][x+1]);
    if ((arr[y][x].r+threshhold > arr[y][x+1].r && arr[y][x].r-threshhold < arr[y][x+1].r)&&
    (arr[y][x].g+threshhold > arr[y][x+1].g && arr[y][x].g-threshhold < arr[y][x+1].g )&&
    (arr[y][x].b+threshhold > arr[y][x+1].b && arr[y][x].b-threshhold < arr[y][x+1].b )){
      //console.log('1 pixeled miss at' ,arr[y][x]);
      specialArr.push([x,y]);
    }
    else {

      specialArr.push([x,y]);
    }
  }

}
