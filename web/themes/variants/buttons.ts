export const solid = {
  backgroundColor: 'blue',
  color: 'background',
  fontSize: 2,
  borderRadius: '4px',
  letterSpacing: 4,
  border: `1px solid`,
  borderColor: 'blue',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `color 0.3s ease-in-out,
          background-color 0.3s ease-in-out,
          border-color 0.3s ease-in-out`,

  ':not(:disabled):hover': {
    bg: 'navy',
    color: 'background',
  },
  fontFamily: 'inherit',

  ':disabled': {
    border: 'none',
    cursor: 'default',
    bg: 'backgroundDisabled',
  },
  fontWeight: 'bold',
};

export const outlined = {
  ...solid,
  borderColor: 'primary',
  color: 'primary',
  bg: 'background',
};

export const text = {
  ...solid,
  color: 'primary',
  bg: 'transparent',
  borderColor: 'transparent',
};
