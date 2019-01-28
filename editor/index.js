const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const handlebars = require('handlebars');
// const mongoose = require('mongoose');
const parser = require('node-html-parser');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('save', (html) => {
    console.log(html);
    var struct = parser.parse(html);
    var nodes = struct.firstChild.childNodes;
    nodes.forEach((node)=>{
      if (node.nodeType == 1) {
        console.log(node);
      }
    })
  });

});

PORT = 8081;

http.listen(PORT, () => {
  console.log('on air 8081');
});
