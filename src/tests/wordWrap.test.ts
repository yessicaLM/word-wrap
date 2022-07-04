import { wordWrapCalculator } from '../core/wordWrap';

describe('Word wrap', () => {
  it('empty string returns empty string', () => {
    const currentValue = '';
    const columnBreakPosition = 5;
    const expectedValue = '';

    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);
  });

  it('returns complete word when is not longer than column wide', () => {
    const currentValue = 'hello';
    const columnBreakPosition = 5;
    const expectedValue = 'hello';

    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);
  });

  it('separate column is created when the word is wider than the column', () => {
    const currentValue = 'longword';
    const columnBreakPosition = 4;
    const expectedValue = 'long\nword';

    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);
  });

  it('separate columns are created when the words are wider than the columns', () => {
    const currentValue = 'reallylongword';
    const columnBreakPosition = 4;
    const expectedValue = 'real\nlylo\nngwo\nrd';

    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);
  });

  it('a blank space just before the cut creates new a column', () => {
    let currentValue = 'abc def';
    const columnBreakPosition = 4;
    let expectedValue = 'abc\ndef';
    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);

    currentValue = 'abc def ghi';
    expectedValue = 'abc\ndef\nghi';
    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);
  });

  it('a blank space at the beginning of the word creates new a column', () => {
    const currentValue = ' abcdf';
    const columnBreakPosition = 4;
    const expectedValue = '\nabcd\nf';

    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);
  });

  it('null value returns empty string', () => {
    const currentValue = null;
    const columnBreakPosition = 5;
    const expectedValue = '';

    expect(wordWrapCalculator(currentValue, columnBreakPosition)).toEqual(expectedValue);
  });

  it('negative numbers for columns breaks are not allowed', () => {
    const currentValue = 'hello';
    const columnBreakPosition = -5;

    expect(() => wordWrapCalculator(currentValue, columnBreakPosition)).toThrow();
  });
});