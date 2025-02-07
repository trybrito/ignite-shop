import { styled } from '..';

export const HomeContainer = styled('div', {
  display: 'flex',
  backgroundColor: 'Red',
  gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw) - 1180px) / 2)',
  marginLeft: 'auto',
  minHeight: 656,
});

export const ProductLink = styled('a', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(32, 32, 36, 0.9)',
    padding: '2rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 300ms ease-in-out',

    strong: {
      fontSize: '$lg',
      lineHeight: 1.6,
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      lineHeight: 1.4,
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
});
