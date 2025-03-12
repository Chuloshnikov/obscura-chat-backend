import { config } from 'dotenv';


config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })

export const { 
PORT,
ORIGIN,
MONGODB_URI,
JWT_SECRET,
CLOUDINARY_CLOUD_NAME,
CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET,
NODE_ENV
} = process.env;