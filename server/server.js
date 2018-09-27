const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {htmlData} = require('../watson/dataParser.js');
const {queryData} = require('../watson/queryDoc.js');
const {searchDoc} = require('../watson/queryDoc.js');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection',(socket)=>{
  socket.on('createSearch',(search)=>{
    htmlData(search.url);
  });

  socket.on('createQuery',(search)=>{
       var data = queryData(search.search).then((data,e)=>{
         if(e){
           console.log(e);
         }else {
           //console.log(data);
           socket.emit('display',data);
         }
       });
  });
  /*socket.on('seachDoc',(search)=>{
    console.log('searching');
       var data = searchDoc(search.docId).then((data,e)=>{
         if(e){
           console.log(e);
         }else {
           console.log(data.description);
           socket.emit('popout',data.description);
         }
       });
  }); */

});


server.listen(port , ()=> console.log('Server started on', port));
