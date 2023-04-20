const express =require('express');
const app= express();
require("dotenv").config();

const http = require('http');
const server= http.createServer(app);

const { socketServer } = require('./configs/socketconfig');


server.listen(process.env.PORT, (err)=>{
  if (err) console.error(err)
    console.log("listening on Port" ,process.env.PORT)});

require("./configs/db.config")

socketServer(server);