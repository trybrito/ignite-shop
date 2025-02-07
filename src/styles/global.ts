import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    border: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '::placeholder': {
    color: 'inherit',
  },

  ':focus': {
    outline: 0,
    boxShadow: '0 0 0 2px #00b37e',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    '-mos-osx-font-smoothing': 'gray-scale',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
  },

  button: {
    border: 0,
  },

  a: {
    textDecoration: 'none',
    curser: 'pointer',
  },

  'a, button': {
    color: 'inherit',
  },
});
