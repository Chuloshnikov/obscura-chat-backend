import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ORIGIN, PORT } from "./config/env.js";

import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/messages.route.js";
import { connectDB } from "./database/mongodb.js";


const app = express();
const port = PORT || 8081;


app.use(
    cors({
        origin: ORIGIN, 
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
        allowedHeaders: ['Content-Type', 'Authorization'], 
        credentials: true, 
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messagesRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Obscura chat api v2.0!');
});

const server = app.listen(port, async () => {
    console.log(`Server running on http://localhost:${port}`);
    await connectDB();
});


export default app;