import * as buttons from './variants/buttons';

export default {
  colors: {
    text: '#111',
    background: '#fff',
    primary: '#000000',
    secondary: '#FFFFFF',
    navy: '#204568',
    blue: '#1B76B0',
    yellow: '#F2CA7B',
    cream: '#F7F3E8',
    green: '#71976B',
    sky: '#E7EDF5',
    orange: '#D15D34',
  },

  lineHeights: {
    body: 1.5,
    heading: 1.25,
    headingSecondary: 1.125,
  },

  letterSpacings: [-3, -2, -1, -0.5, 0, 1],

  fonts: {
    body: 'Mrs. Eaves XL Serif OT',
    headline: 'Proxima Nova',
  },

  fontWeights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },

  //        [ 0   1   2   3   4   5   6   7]
  fontSize: [14, 16, 18, 24, 27, 42, 56, 64],

  spaces: [0, 8, 16, 31, 40, 48, 56, 64, 72, 80, 86, 104],

  buttons,
};
