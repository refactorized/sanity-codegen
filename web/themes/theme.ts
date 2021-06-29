import * as buttons from './variants/buttons';
import colors, {ThemeColorList} from './colors';

type spaceScale = number[] & {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  x5: number;
  x6: number;
  x7: number;
  x8: number;
  x10: number;
  x12: number;
};

export type Theme = {
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
  space: spaceScale;
  spaces: spaceScale;
  buttons: any;
};

//                     0  1   2   3   4   5   6   7   8   9  10
const spaceArr: any = [0, 8, 16, 32, 40, 48, 56, 64, 72, 80, 96];
spaceArr.sm = spaceArr[1];
spaceArr.md = spaceArr[2];
spaceArr.lg = spaceArr[3];
spaceArr.xl = spaceArr[4];
spaceArr.x5 = spaceArr[5];
spaceArr.x6 = spaceArr[6];
spaceArr.x7 = spaceArr[7];
spaceArr.x8 = spaceArr[8];
spaceArr.x10 = spaceArr[9];
spaceArr.x12 = spaceArr[10];

const space: spaceScale = spaceArr;

//                [ 0   1   2   3   4   5   6   7]
const fontSizes = [14, 16, 18, 24, 27, 42, 56, 64];

const theme: Theme = {
  colors,
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

  // renamed fontSize to fontSizes
  fontSizes,
  fontSize: fontSizes,

  // renamed spaces to space ()
  space,
  spaces: space,

  buttons,
};

export default theme;
