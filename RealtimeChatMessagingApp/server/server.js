import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import './src/connectDB/connectDB.js';
import userRouter from './src/routes/userRoute.js';

const app = express();

const rooms = ['general', 'tech', 'finance', 'crypto'];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('hello');
});
const server = http.createServer(app);
const PORT = 5001;
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

server.listen(PORT, () => console.log(`server is running on ${PORT}`));
