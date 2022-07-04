export const wordWrapCalculator = (stringValue: string, columnWide: number): string => {
  if (stringValue === '') return '';
  if (stringValue.length <= columnWide) return stringValue;

  const listOfWords = [];

  while (stringValue.length > 0) {
    const word = stringValue.substring(0, columnWide);
    listOfWords.push(word);
    stringValue = stringValue.substring(columnWide);
  }
  return listOfWords.join('\n');
}