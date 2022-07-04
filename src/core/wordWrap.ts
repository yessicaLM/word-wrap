export const wordWrapCalculator = (stringValue: string, columnWide: number): string => {
  if (!stringValue) return '';
  if (stringValue.length <= columnWide) return stringValue;

  const listOfWords = [];
  let columnLimit = columnWide;

  while (stringValue.length > 0) {
    let word = stringValue.substring(0, columnLimit);
    if (word.charAt(0) === ' ') {
      columnLimit ++;
      word = stringValue.substring(1, columnLimit);
      word = '\n' + word;
    }
    if (word.charAt(word.length - 1) === ' ') {
      word = word.trimEnd();      
    }
    listOfWords.push(word);
    stringValue = stringValue.substring(columnLimit);
  }
  return listOfWords.join('\n');
}