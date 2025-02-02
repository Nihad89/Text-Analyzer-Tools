import express from 'express';
import cors from 'cors';
import textRoutes from './routes/text-routes';
import connectDB from './config/database';
import morgan from 'morgan'

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
app.use(morgan('dev'));


export default app;
