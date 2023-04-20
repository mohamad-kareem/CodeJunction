const { Server } = require('socket.io');
const DoList = require('../../frontend/src/SocketConnections/DoList');

const userSocketMap = {};

function getAllConnectedClients(io, roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
}

function socketServer(server) {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
    socket.on(DoList.JOIN, ({ roomId, username }) => {
      userSocketMap[socket.id] = username;
      socket.join(roomId);
      const clients = getAllConnectedClients(io, roomId);

      clients.forEach(({ socketId }) => {
        io.to(socketId).emit(DoList.JOINED, {
          clients,
          username,
          socketId: socket.id,
        });
      });
    });

    socket.on(DoList.CODE_CHANGE, ({ roomId, code }) => {
      socket.in(roomId).emit(DoList.CODE_CHANGE, { code });
    });

    socket.on('disconnecting', () => {
      const rooms = [...socket.rooms];
      rooms.forEach((roomId) => {
        socket.in(roomId).emit(DoList.DISCONNECTED, {
          socketId: socket.id,
          username: userSocketMap[socket.id],
        });
      });
      delete userSocketMap[socket.id];
      socket.leave();
    });
  });
}

module.exports = { socketServer };
