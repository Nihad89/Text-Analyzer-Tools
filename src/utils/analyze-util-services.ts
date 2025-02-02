export function countWords(text: string): number {
  const words = text.trim().match(/\b\w+\b/g);
  return words ? words.length : 0;
}
  
  export function countCharacters(text: string): number {
    return text.replace(/[^a-zA-Z0-9]/g, '').length;
  }
  
  export function countSentences(text: string): number {
    return text.split(/[.!?]+/).filter(s => s.trim()).length;
  }
  
  export function countParagraphs(text: string): number {
    return text.split(/\n+/).filter(p => p.trim()).length;
  }
  
  export function findLongestWord(text: string): string {
    return text.split(/\s+/).reduce((longest, word) =>
      word.length > longest.length ? word : longest, ''
    );
  }
  