import { wordWrapCalculator } from '../core/wordWrap';

// wordWrap('',5) -> '' --> DONE
// wordWrap('hello',5) -> 'hello' --> DONE
// wordWrap('longword',4) -> 'long\nword' --> DONE
// wordWrap('reallylongword',4) ->'real\nlylo\nngwo\nrd' -->DONE
// wordWrap('abc def',4) -> 'abc\ndef' --> DONE
// wordWrap('abc def ghi',4) -> 'abc\ndef\nghi' --> DONE
// wordWrap(' abcdf',4) -> '\nabcd' --> DONE
// wordWrap(null,5) ->''
// wordWrap('hello',-5) -> throw exception


describe('Word wrap', () => {
  it('empty string returns empty string', () => {
    expect(wordWrapCalculator('', 5)).toEqual('');
  });

  it('returns complete word when is not longer than column wide', () => {
    expect(wordWrapCalculator('hello',5)).toEqual('hello');
  });

  it('separate column is created when the word is wider than the column', () => {
    expect(wordWrapCalculator('longword',4)).toEqual('long\nword');
  });

  it('separate columns are created when the words are wider than the columns', () => {
    expect(wordWrapCalculator('reallylongword',4)).toEqual('real\nlylo\nngwo\nrd');
  });

  it('a blank space just before the cut creates new a column', () => {
    expect(wordWrapCalculator('abc def',4)).toEqual('abc\ndef');
    expect(wordWrapCalculator('abc def ghi',4)).toEqual('abc\ndef\nghi');
  });

  it('a blank space at the beginning of the word creates new a column', () => {
    expect(wordWrapCalculator(' abcdf',4)).toEqual('\nabcd\nf');
  });

  it('null value returns empty string', () => {
    expect(wordWrapCalculator(null, 5)).toEqual('');
  });
});