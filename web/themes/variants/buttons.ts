export const solid = {
  backgroundColor: 'blue',
  color: 'background',
  fontSize: [1,2],
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
  fontFamily: 'headline',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ':disabled': {
    border: 'none',
    cursor: 'default',
    bg: 'backgroundDisabled',
  },
  fontWeight: 'bold',
  px: [3,3],
  py: [2,3],
  lineHeight: 'heading',
};

export const secondary = {
  backgroundColor: 'white',
  color: 'black',
  fontSize: [1,2],
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
  fontFamily: 'headline',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ':disabled': {
    border: 'none',
    cursor: 'default',
    bg: 'backgroundDisabled',
  },
  fontWeight: 'bold',
  px: [2,2],
  py: [2,3],
  lineHeight: 'heading',
  stroke: '#D15D34'
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
