const express =require('express');
const app= express();

const cors = require('cors');
app.use(cors());

require("dotenv").config();
app.use(express.json())

const http = require('http');
const server= http.createServer(app);

const { socketServer } = require('./configs/socketconfig');

const authRouter=require("./routes/auth.routes")
app.use("/auth",authRouter)

const userRouter=require("./routes/users.routes")
app.use("/",userRouter)

const openaiRouter=require("./routes/openai.routes")
app.use("/",openaiRouter)

const statisticsRouter=require("./routes/statistics.routes")
app.use("/",statisticsRouter)

server.listen(process.env.PORT, (err)=>{
  if (err) console.error(err)
    console.log("listening on Port" ,process.env.PORT)});

require("./configs/db.config")

socketServer(server);