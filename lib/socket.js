import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: ["https://obscura-chat.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

const io = new Server(server, {
  cors: {
    origin: ["https://obscura-chat.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// used to store online users
const userSocketMap = {}; // {userId: socketId}


export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}



io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.auth.userId;

  if (!userId) {
    console.log("❌ No userId provided in socket auth.");
    socket.disconnect();
    return;
  }

  console.log(`✅ User connected. Socket ID: ${socket.id}, User ID: ${userId}`);

  userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log(`🔌 User disconnected. Socket ID: ${socket.id}, User ID: ${userId}`);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };