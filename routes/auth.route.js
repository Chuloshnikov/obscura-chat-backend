import express from "express";
import { logIn, logOut, signUp, updateProfile } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", logIn);
authRouter.post("/sign-out", logOut);

authRouter.put("/update-profile", updateProfile);

export default authRouter;