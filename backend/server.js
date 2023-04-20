const express =require('express');
const app= express();
const http = require('http');
const server= http.createServer(app);
require("dotenv").config();
const { socketServer } = require('./configs/socketconfig');


server.listen(process.env.PORT, ()=>console.log("listening on Port" ,process.env.PORT));

app.get('/hello', (req, res) => {
  res.send('hello world');
});
socketServer(server);