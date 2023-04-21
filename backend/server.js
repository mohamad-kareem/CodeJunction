const express =require('express');
const app= express();

require("dotenv").config();
app.use(express.json())

const http = require('http');
const server= http.createServer(app);

const { socketServer } = require('./configs/socketconfig');

const authRouter=require("./routes/auth.routes")
app.use("/auth",authRouter)


server.listen(process.env.PORT, (err)=>{
  if (err) console.error(err)
    console.log("listening on Port" ,process.env.PORT)});

require("./configs/db.config")

socketServer(server);