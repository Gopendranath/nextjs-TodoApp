import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connection successful.');
}