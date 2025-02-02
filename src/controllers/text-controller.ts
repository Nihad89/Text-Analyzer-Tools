import { Request, Response } from 'express';
import { textAnalyser } from '../services/text-service';

export async function analyzeText(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const analysis = await textAnalyser(id);
    res.json(analysis);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
}
