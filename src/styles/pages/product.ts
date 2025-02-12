import { styled } from '..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  padding: '0.25rem',
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > img': {
    objectFit: 'cover',
  },
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
    lineHeight: 1.4,
  },

  span: {
    marginTop: '1rem',
    fontSize: '$2xl',
    color: '$green300',
    lineHeight: 1.4,
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6,
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    fontSize: '$md',
    lineHeight: 1.6,
    fontWeight: 'bold',
    transition: 'background-color 200ms',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
});
