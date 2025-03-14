import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getMessages, getOtherUsers, sendMessage } from "../controllers/messages.controller.js";

const messagesRoutes = express.Router();

messagesRoutes.get("/users", verifyToken, getOtherUsers);
messagesRoutes.get("/:id", verifyToken, getMessages);

messagesRoutes.post("/send/:id", verifyToken, sendMessage);


export default messagesRoutes;

