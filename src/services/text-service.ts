import Text from '../models/text-model';
//import redis from '../config/cache';
import { countWords, countCharacters, countSentences, countParagraphs, findLongestWord } from '../utils/analyze-util-services';

export async function textAnalyser(id: string) {
  const cacheKey = `text-analysis-${id}`;
  //const cachedData = await redis.get(cacheKey);

//   if (cachedData) {
//     return JSON.parse(cachedData);
//   }

  const textEntry = await Text.findById(id);
  if (!textEntry) throw new Error('Text not found');

  const analysis = {
    words: countWords(textEntry.content),
    characters: countCharacters(textEntry.content),
    sentences: countSentences(textEntry.content),
    paragraphs: countParagraphs(textEntry.content),
    longestWord: findLongestWord(textEntry.content),
  };

  //await redis.setex(cacheKey, 3600, JSON.stringify(analysis));
  return analysis;
}
