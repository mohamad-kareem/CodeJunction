const express =require('express');
const app= express();
const http = require('http');
const server= http.createServer(app);

const {Server}=require('socket.io');
const DoList = require('../frontend/src/SocketConnections/DoList');
const io=new Server(server);

const userSocketMap={};



io.on('connection', (socket) => {
    console.log('socket connected' , socket.io);
    socket.on(DoList.JOIN , ({roomId,username})=>{
        userSocketMap[socket.id]=username;
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId)
    })
});

const Port=8000;
server.listen(Port, ()=>console.log(`listening on Port ${Port}`));