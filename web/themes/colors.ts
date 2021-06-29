export type ThemeColorName =
  | 'text'
  | 'background'
  | 'primary'
  | 'secondary'
  | 'navy'
  | 'blue'
  | 'yellow'
  | 'cream'
  | 'green'
  | 'sky'
  | 'orange';

export type ThemeColorList = {
  [index in ThemeColorName]: string;
};

const colors: ThemeColorList = {
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
};

export default colors;
