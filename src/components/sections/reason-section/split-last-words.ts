  export const splitLastWords = (text?: string, wordCount: number = 2) => {
  if (!text) return { mainText: '', lastWords: '' };
  
  const words = text.trim().split(/\s+/);
  
  if (words.length <= wordCount) {
    return { mainText: '', lastWords: text };
  }
  
  const lastWords = words.slice(-wordCount).join(' ');
  const mainText = words.slice(0, -wordCount).join(' ');
  
  return { mainText, lastWords };
};