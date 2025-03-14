import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { getUsers } from "../controllers/messages.controller.js";

const messagesRoutes = express.Router();

messagesRoutes.get("/users", verifyToken, getUsers);


export default messagesRoutes;

