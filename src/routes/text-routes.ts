import express from 'express';
import { analyzeText, addText, getWordCount, getCharacterCount, getSentenceCount, getParagraphCount, getLongestWord } from '../controllers/text-controller.js';
import rateLimitMiddleware from '../middlewares/rateLimit-middleware.js';
const router = express.Router();

router.get('/:id', rateLimitMiddleware, analyzeText);
router.post('/texts', rateLimitMiddleware, addText);
router.get('/texts/word-count/:id', rateLimitMiddleware, getWordCount); // Get word count
router.get('/texts/character-count/:id', rateLimitMiddleware, getCharacterCount); // Get character count
router.get('/texts/sentence-count/:id', rateLimitMiddleware, getSentenceCount); // Get sentence count
router.get('/texts/paragraph-count/:id', rateLimitMiddleware, getParagraphCount); // Get paragraph count
router.get('/texts/longest-word/:id', rateLimitMiddleware, getLongestWord); // Get longest word


export default router;
