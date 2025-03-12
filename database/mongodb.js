import mongoose from "mongoose";
import { MONGODB_URI, NODE_ENV } from "../config/env.js";

if(!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.<development/production>.local');
}

export const connectDB  = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected ${conn.connection.host}`);
        console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
}