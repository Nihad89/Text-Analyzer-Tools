import express from 'express';
import cors from 'cors';

import connectDB from './config/database';

try {
    connectDB();
    console.log('Connected to the database');
} catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());


export default app;
