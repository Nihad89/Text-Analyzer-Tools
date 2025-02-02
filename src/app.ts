import express from 'express';
import cors from 'cors';
import textRoutes from './routes/text-routes.js';
import connectDB from './config/database.js';
import morgan from 'morgan'
import fs from 'fs';
import path from 'path'

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
app.use('/api', textRoutes);
//app.use(morgan('dev'));

// const logStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' });
// app.use(morgan('combined', { stream: logStream }));
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
  });
export default app;
