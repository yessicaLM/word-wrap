const isNullOrEmptyValue = (value: string | null): boolean => !value;

const stringIsSmallerThanColumnWidth = (value: string, columnWidth: number): boolean => value.length <= columnWidth;

const columnBreakIsPositiveNumber = (columnWidth: number): boolean => columnWidth > 0;

const stringValueHasLength = (stringValue: string): boolean => stringValue.length > 0;

const charIsEmpty = (word: string, index: number): boolean => word.charAt(index) === ' ';

export const wordWrapCalculator = (stringValue: string, columnWidth: number): string => {
  const EMPTY_STRING = '';
  const LINE_BREAK = '\n';

  if (isNullOrEmptyValue(stringValue)) return EMPTY_STRING;

  if (stringIsSmallerThanColumnWidth(stringValue, columnWidth)) return stringValue;

  if (columnBreakIsPositiveNumber(columnWidth)) {
    const listOfWords = [];
    let columnLimit = columnWidth;

    while (stringValueHasLength(stringValue)) {
      let word = stringValue.substring(0, columnLimit);
      if (charIsEmpty(word, 0)) {
        columnLimit++;
        word = LINE_BREAK.concat(stringValue.substring(1, columnLimit));
      }
      if (charIsEmpty(word, word.length - 1)) {
        word = word.trimEnd()
      }

      listOfWords.push(word);
      stringValue = stringValue.substring(columnLimit);
    }
    return listOfWords.join(LINE_BREAK);
  } else {
    throw new Error('Negative numbers are not allowed');
  }
}