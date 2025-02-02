import express from 'express';
import { analyzeText } from '../controllers/text-controller';
import rateLimitMiddleware from '../middlewares/rateLimit-middleware';
const router = express.Router();

router.get('/:id', rateLimitMiddleware, analyzeText);

export default router;
