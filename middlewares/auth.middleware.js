import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js";

export const verifyToken = async (req, resizeBy, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return resizeBy.status(401).json({ message: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        if (!decoded) {
            return resizeBy.status(401).json({ message: "Unauthorized = Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return resizeBy.status(404).json({ message: "User not found" });
        }

        req.user = user

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};