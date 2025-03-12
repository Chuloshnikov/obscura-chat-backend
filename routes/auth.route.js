import express from "express";
import { logIn, logOut, signUp } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUp);

authRouter.post("/sign-in", logIn);

authRouter.post("/sign-out", logOut);

export default authRouter;