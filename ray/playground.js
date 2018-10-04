const Jimp = require('jimp');
new Jimp(360, 180, (err, image) => {
  image.write('lena-small-bw.jpg',(e,res) =>{
   if (e)
   console.log(e);
   else
   console.log('Success');
 });
});
