import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    lineHeight: 1.4,
  },

  p: {
    marginTop: '2rem',
    fontSize: '$xl',
    color: '$gray300',
    lineHeight: 1.4,
    maxWidth: 560,
    textAlign: 'center',
  },

  a: {
    display: 'block',
    marginTop: '5.5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    transition: 'color 200ms',
    lineHeight: 1.6,

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImageContainer = styled('div', {
  marginTop: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  img: {
    objectFit: 'cover',
  },
});
