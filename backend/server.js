const express =require('express');
const app= express();
const http = require('http');
const server= http.createServer(app);

const {Server}=require('socket.io');
const DoList = require('../frontend/src/SocketConnections/DoList');
const { Socket } = require('dgram');
const io=new Server(server);

const userSocketMap={};

function getAllConnectedClients(roomId){
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
      (socketId)=>{
        return {
          socketId,
          username:userSocketMap[socketId],
        };
      }
    );
  
  }


io.on('connection', (socket) => {
    console.log('socket connected' , socket.id);
    socket.on(DoList.JOIN , ({roomId,username})=>{
        userSocketMap[socket.id]=username;
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);

        clients.forEach(({socketId})=>{
            io.to(socketId).emit(DoList.JOINED,{
              clients,
              username,
              socketId:socket.id,
            });
      
           });

    })
    socket.on("disconnecting", ()=>{
      const rooms =[...socket.rooms];
      rooms.forEach((roomId)=>{
        socket.in(roomId).emit(DoList.Disconnected,{
          socketId:socket.id,
          username:userSocketMap[socket.id],
        });
      })
      delete userSocketMap[socket.id];
      socket.leave();
    })
});

const Port=8000;
server.listen(Port, ()=>console.log(`listening on Port ${Port}`));