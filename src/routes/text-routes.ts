import express from 'express';
import { analyzeText,addText } from '../controllers/text-controller.js';
import rateLimitMiddleware from '../middlewares/rateLimit-middleware.js';
const router = express.Router();

router.get('/:id', rateLimitMiddleware, analyzeText);
router.post('/texts', rateLimitMiddleware, addText);

export default router;
