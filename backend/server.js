const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./router/userRoute');
const chatRoutes = require('./router/chatRoute');
const messageRoutes = require('./router/messageRoute');
const { default: mongoose } = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
  },
});

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);

mongoose
  .connect(process.env.MongoUrl)
  .then(() => {
    server.listen(process.env.port, () => {
      console.log('server running');
    });
  })
  .catch((error) => {
    console.log(error);
  });

io.on('connection', (socket) => {
  console.log('Connected to socket.io');
  socket.on('setup', (userData) => {
    socket.join(userData._id);
    socket.emit('connected');
  });

  socket.on('join chat', (chat) => {
    socket.join(chat);
    console.log('User Joined chat: ' + chat);
  });

  socket.on('new message', (message) => {
    console.log(message);
    socket.emit('message Received', message);
  });
});
