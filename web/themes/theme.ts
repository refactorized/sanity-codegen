import * as buttons from './variants/buttons';
import colors, {ThemeColorList} from './colors';

export type ThemeSpaceName =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'x5'
  | 'x6'
  | 'x7'
  | 'x8'
  | 'x10'
  | 'x12';

export type ThemeBreakpointName = 'tablet' | 'desktop' | 'max';

// combined array scale with named keys
export type ThemeSpaceScale = number[] &
  {
    [index in ThemeSpaceName]: number;
  };

// combined array scale with named keys
export type ThemeBreakpointScale = string[] &
  {
    [index in ThemeBreakpointName]: string;
  };

export type Theme = {
  breakpoints: ThemeBreakpointScale;
  buttons: any;
  colors: ThemeColorList;
  lineHeights: {
    body: number;
    heading: number;
    headingSecondary: number;
  };
  letterSpacings: number[];
  fonts: {
    body: string;
    headline: string;
  };
  fontWeights: {
    bold: number;
    semiBold: number;
    medium: number;
    regular: number;
    light: number;
  };
  fontSizes: number[];
  fontSize: number[];
  space: ThemeSpaceScale;
  spaces: ThemeSpaceScale;
};

//             0  1   2   3   4   5   6   7   8   9  10
const space = [0, 8, 16, 32, 40, 48, 56, 64, 72, 80, 96] as ThemeSpaceScale;
space.sm = space[1];
space.md = space[2];
space.lg = space[3];
space.xl = space[4];
space.x5 = space[5];
space.x6 = space[6];
space.x7 = space[7];
space.x8 = space[8];
space.x10 = space[9];
space.x12 = space[10];

const breakpoints = ['768px', '1024px', '1440px'] as ThemeBreakpointScale;
breakpoints.tablet = breakpoints[0];
breakpoints.desktop = breakpoints[1];
breakpoints.max = breakpoints[2];

//                [ 0   1   2   3   4   5   6   7]
const fontSizes = [14, 16, 18, 24, 27, 42, 56, 64];

const theme: Theme = {
  breakpoints,
  buttons,
  colors,
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    headingSecondary: 1.125,
  },
  fonts: {
    body: 'Mrs Eaves XL Serif OT',
    headline: 'Proxima Nova',
  },
  fontSizes,
  fontSize: fontSizes, // renamed fontSize to fontSizes
  fontWeights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
  letterSpacings: [-3, -2, -1, -0.5, 0, 1],
  space,
  spaces: space, // renamed spaces to space ()
};

export default theme;
