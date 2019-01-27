const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const handlebars = require('handlebars');
const mongoose = require('mongoose');

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
  });

});

PORT = 8081;

http.listen(PORT, () => {
  console.log('on air 8081');
});
