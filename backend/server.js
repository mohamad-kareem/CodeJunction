const { Socket } = require('dgram');
const express =require('express');
const app= express();
const http = require('http');
const server= http.createServer(app);

const {Server}=require('socket.io');
const io=new Server(server);

io.on('connection', (socket) => {
    console.log('socket connected' , socket.io);
});

const Port=8000;
server.listen(Port, ()=>console.log(`listening on Port ${Port}`));