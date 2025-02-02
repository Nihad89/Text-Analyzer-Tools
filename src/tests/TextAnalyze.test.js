import { 
  countWords, 
  countCharacters, 
  countSentences, 
  countParagraphs, 
  findLongestWord 
} from '../utils/analyze-util-services';

describe("Text Analyzer Utility Functions", () => {

  test('countWords should return correct word count', () => {
    expect(countWords('Hello world')).toBe(2);
    expect(countWords('Hello   world')).toBe(2); // Handles multiple spaces
    expect(countWords('   ')).toBe(0); // Handles empty spaces
    expect(countWords('')).toBe(0); // Handles empty string
    expect(countWords('Hello, world! This is a test.')).toBe(6); // Ignores punctuation
  });

  test('countCharacters should return correct character count', () => {
    expect(countCharacters('Hello world')).toBe(10);
    expect(countCharacters('')).toBe(0); // Empty string
    expect(countCharacters(' ')).toBe(0); // Single space
    expect(countCharacters('Hello, world!')).toBe(10); // Ignores punctuation
  });

  test('countSentences should return correct sentence count', () => {
    expect(countSentences('Hello world. How are you?')).toBe(2);
    expect(countSentences('')).toBe(0); // Empty string
    expect(countSentences('...')).toBe(0); // Only punctuation
    expect(countSentences('Hello world. This is a test. Another sentence!')).toBe(3);
    expect(countSentences('What? Really! No way.')).toBe(3); // Handles different sentence endings
  });

  test('countParagraphs should return correct paragraph count', () => {
    expect(countParagraphs('Hello world\n\nHow are you?')).toBe(2);
    expect(countParagraphs('')).toBe(0); // Empty string
    expect(countParagraphs('No paragraph breaks')).toBe(1); // Single paragraph
    expect(countParagraphs('First paragraph.\n\nSecond paragraph.\n\nThird paragraph.')).toBe(3);
  });

  test('findLongestWord should return the longest word', () => {
    expect(findLongestWord('Hello world amazing')).toBe('amazing');
    expect(findLongestWord('A very extraordinary longwordinthissentence')).toBe('longwordinthissentence');
    expect(findLongestWord('')).toBe(''); // Empty string
    expect(findLongestWord('Short tiny big')).toBe('Short'); // First longest word
    expect(findLongestWord('word longest longest')).toBe('longest'); // Picks the first occurrence
  });

});
