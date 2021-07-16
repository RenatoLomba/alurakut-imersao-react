export const styles = {
  global: () => ({
    '*::-webkit-scrollbar': {
      width: '0.5rem',
    },
    '*::-webkit-scrollbar-track': {
      bg: '#f1f1f1',
    },
    '*::-webkit-scrollbar-thumb': {
      bg: '#888',
      borderRadius: '0.625rem',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      bg: '#555',
    },
    body: {
      // bg: mode('background.primary', 'crimson')(props),
      backgroundImage: 'url("/images/wallpaper.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      fontFamily: 'sans-serif',
    },
    'a, button': {
      cursor: 'pointer',
      transition: '.3s',
      outline: '0',
      '&:hover, &:focus': {
        opacity: '.8',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '.5',
      },
    },
    input: {
      transition: '.3s',
      outline: '0',
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '.5',
      },
      '&:hover, &:focus': {
        boxShadow: '0px 0px 5px #33333357',
      },
    },
  }),
};
