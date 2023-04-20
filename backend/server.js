const express =require('express');
const app= express();
const http = require('http');
const server= http.createServer(app);

const { socketServer } = require('./socketconfig');

const Port=8000;
server.listen(Port, ()=>console.log(`listening on Port ${Port}`));

app.get('/hello', (req, res) => {
  res.send('hello world');
});
socketServer(server);