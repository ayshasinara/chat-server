const { Server } = require('socket.io');
const io = new Server(3030, {
  cors: {
    origin: '*', 
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');


  socket.on('joinRoom', (roomId) => {
    socket.join(roomId); 
    console.log(`User joined room: ${roomId}`);
  });


  socket.on('markdownUpdate', ({ roomId, markdown }) => {

    socket.to(roomId).emit('markdownUpdate', markdown);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


io.listen(3030, () => {
  console.log('Socket.io server running on port 3030');
});
