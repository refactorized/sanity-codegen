export const solid = {
  backgroundColor: 'blue',
  color: 'background',
  fontSize: 0,
  letterSpacing: 4,
  border: `1px solid`,
  borderColor: 'blue',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `color 0.3s ease-in-out,
          background-color 0.3s ease-in-out,
          border-color 0.3s ease-in-out`,

  ':not(:disabled):hover': {
    bg: '#133453',
    borderColor: '#133453',
  },
  fontFamily: 'body',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ':disabled': {
    border: 'none',
    cursor: 'default',
    bg: 'backgroundDisabled',
  },
  fontWeight: 'bold',
  px: [2, 2],
  py: [1, 2],
  lineHeight: 'heading',
  whiteSpace: 'nowrap',
};

export const secondary = {
  backgroundColor: 'white',
  color: 'black',
  fontSize: 0,
  letterSpacing: 4,
  border: `1px solid`,
  borderColor: 'white',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `color 0.3s ease-in-out,
          background-color 0.3s ease-in-out,
          border-color 0.3s ease-in-out`,

  ':not(:disabled):hover': {
    bg: '#e2985b',
    borderColor: '#e2985b',
  },
  fontFamily: 'body',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ':disabled': {
    border: 'none',
    cursor: 'default',
    bg: 'backgroundDisabled',
  },
  fontWeight: 'bold',
  px: [1, 2],
  py: [2, 2],
  lineHeight: 'heading',
  stroke: '#D15D34',
  whiteSpace: 'nowrap',
};

export const outlined = {
  ...solid,
  borderColor: 'primary',
  color: 'primary',
  bg: 'background',
};

export const text = {
  ...solid,
  color: 'secondary',
  bg: 'transparent',
  borderColor: 'transparent',
  px: 0,
  py: 0,
  ':not(:disabled):hover': {
    bg: 'transparent',
    borderColor: 'transparent',
  },
};
