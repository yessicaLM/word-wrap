import { wordWrapCalculator } from '../core/wordWrap';

// wordWrap('',5) -> '' --> DONE
// wordWrap('hello',5) -> 'hello' --> DONE
// wordWrap('longword',4) -> 'long\nword'
// wordWrap('reallylongword',4) ->'real\nlylo\nngwo\nrd'
// wordWrap('abc def',4) -> 'abc\ndef' 
// wordWrap('abc def ghi',4) -> 'abc\ndef\nghi'
// wordWrap('' abcdf',4) -> '\nabcd'
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
});