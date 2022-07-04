# Code Kata: Word Wrap


## Description
Word wrap implements a function that given a word and a column width, inserts '\n' (line-break) where the column ends and returns a new string.


## Cases

- **wordWrap('',5)** -> '[empty string]'
- **wordWrap('hello',5)** -> 'hello'
- **wordWrap('longword',4)** -> 'long\nword'
- **wordWrap('reallylongword',4)** -> 'real\nlylo\nngwo\nrd'
- **wordWrap('abc def',4)** -> 'abc\ndef'
- **wordWrap('abc def ghi',4)** -> 'abc\ndef\nghi'
- **wordWrap(' abcdf',4)** -> '\nabcd\nf'
- **wordWrap(null,5)** -> '[empty string]'
- **wordWrap('hello',-5)** -> throw exception

## Run project
Install project dependencies:

`
npm install
`

To run all test in watch mode, run next command:

`
npm run test:watch
`
