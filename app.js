var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var pdf2image = require('pdf2image');
var fs = require("fs");

pdf2image.convertPDF('document.pdf',{
    density : 400,
    quality : 200,
    outputFormat : 'presentation/assets/%d',
    outputType : 'jpg'
})
.then(function(data){
  console.log('OK. Listo para usar');
  data.sort(function(a,b){
    return a.page - b.page;
  });
  fs.writeFile('presentation/data.js','var images='+JSON.stringify(data)+';');
})
.catch(function(err){
  console.log('error',err);
});

server.listen(2500);

app.use('/presentation', express.static(path.join(__dirname + '/presentation')));
app.use('/control', express.static(path.join(__dirname + '/control')));

app.get('/', function (req, res) {
  res.send('No te pases p');
});

io.on('connection', function (socket) {
  console.log('Nueva conexion');
  socket.on('next', function () {
    io.emit('next');
  });
  socket.on('prev', function () {
    io.emit('prev');
  });
});


