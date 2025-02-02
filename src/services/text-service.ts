import Text from '../models/text-model.js';
import redis from '../config/cache.js';
import { countWords, countCharacters, countSentences, countParagraphs, findLongestWord } from '../utils/analyze-util-services.js';

export async function textAnalyser(id: string) {
  const cacheKey = `text-analysis-${id}`;
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const textEntry = await Text.findById(id);
  if (!textEntry) throw new Error('Text not found');

  const analysis = {
    words: countWords(textEntry.content),
    characters: countCharacters(textEntry.content),
    sentences: countSentences(textEntry.content),
    paragraphs: countParagraphs(textEntry.content),
    longestWord: findLongestWord(textEntry.content),
  };

  await redis.setEx(cacheKey, 3600, JSON.stringify(analysis));
  return analysis;
}



export async function WordCount(id: string) {

  const cacheKey = `word-count-${id}`;
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }
  const textEntry = await Text.findById(id);
  if (!textEntry) throw new Error('Text not found');

  const analysis = {
    words: countWords(textEntry.content),
    
  };

  await redis.setEx(cacheKey, 3600, JSON.stringify(analysis));
  return analysis;
}


export async function CharacterCount(id: string) {
  
  const cacheKey = `character-count-${id}`;
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }
  const textEntry = await Text.findById(id);
  if (!textEntry) throw new Error('Text not found');

  const analysis = {
    characters: countCharacters(textEntry.content),
    
  };
  await redis.setEx(cacheKey, 3600, JSON.stringify(analysis));

  
  return analysis;
}





export async function SentenceCount(id: string) {
  const cacheKey = `sentence-count-${id}`;
  const cachedData = await redis.get(cacheKey);

  const textEntry = await Text.findById(id);
  if (!textEntry) throw new Error('Text not found');

  const analysis = {

    sentences: countSentences(textEntry.content),
    
  };

  await redis.setEx(cacheKey, 3600, JSON.stringify(analysis));
  return analysis;
}


export async function ParagraphCount(id: string) {
  const cacheKey = `paragraph-count-${id}`;
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const textEntry = await Text.findById(id);
  if (!textEntry) throw new Error('Text not found');

  const analysis = {
    
    paragraphs: countParagraphs(textEntry.content),
    
  };

  await redis.setEx(cacheKey, 3600, JSON.stringify(analysis));
  return analysis;
}




export async function LongestWord(id: string) {
  const cacheKey = `find-longest-${id}`;
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const textEntry = await Text.findById(id);
  if (!textEntry) throw new Error('Text not found');

  const analysis = {
    
    longestWord: findLongestWord(textEntry.content),
    
  };

  await redis.setEx(cacheKey, 3600, JSON.stringify(analysis));
  return analysis;
}
