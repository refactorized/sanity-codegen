export const primary = {
    bg: 'blue',
    color: 'text',
    fontSize: 1,
    borderRadius: 'square',
    letterSpacing: 4,
    border: `1px solid`,
    borderColor: 'text',
    px: 5,
    py: '24px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: `color 0.3s ease-in-out,
          background-color 0.3s ease-in-out,
          border-color 0.3s ease-in-out`,
  
    ':not(:disabled):hover': {
      bg: 'navy',
      color: 'text',
    },
  
    ':disabled': {
      border: 'none',
      cursor: 'default',
      bg: 'backgroundDisabled',
    },
  };