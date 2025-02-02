import { Request, Response } from 'express';
import { textAnalyser } from '../services/text-service.js';
import TextModel from '../models/text-model.js';

export async function analyzeText(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const analysis = await textAnalyser(id);
    res.json(analysis);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
}




export const addText = async (req: Request, res: Response): Promise<void> => {
  try {
    const { content, userId } = req.body;

    // If content is missing, return a 400 error
    if (!content) {
      res.status(400).json({ message: 'Content is required' });
      return;
    }

    // If userId is missing, set a default userId
    const defaultUserId = '60c72b2f9b1e8f4af5d3b79f'; // Replace with an actual default user ID (could be a valid user ID from your DB)

    const newText = new TextModel({
      content,
      userId: userId || defaultUserId,  // Use the provided userId or defaultUserId
    });

    await newText.save();

    res.status(201).json({ message: 'Text saved successfully', text: newText });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
};





