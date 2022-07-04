// wordWrap('',5) -> ''
// wordWrap('hello',5) -> 'hello'
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
  })
});