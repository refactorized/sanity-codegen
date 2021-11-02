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
  | 'x12'
  | 'margin'
  | 'marginMobile'
  | 'marginWide'
  | 'marginTablet';

export type ThemeBreakpointName = 'tablet' | 'desktop' | 'max';

// combined array scale with named keys
export type ThemeSpaceScale = number[] & {
  [index in ThemeSpaceName]: number;
};

// combined array scale with named keys
export type ThemeBreakpointScale = string[] & {
  [index in ThemeBreakpointName]: string;
};

export type ThemeLetterSpacingName =
  | 'narrow'
  | 'xs'
  | 'sm'
  | 'md'
  | 'standard'
  | 'wide'
  | 'xw'
  | 'xxw';

// combined array scale with named keys
export type ThemeLetterSpacingScale = number[] & {
  [index in ThemeLetterSpacingName]: number;
};

export type ThemeFontSizeName =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'x5'
  | 'x6'
  | 'x7'
  | 'x8'
  | 'x9';

export type ThemeFontSizeScale = number[] & {
  [index in ThemeFontSizeName]: number;
};

export type Theme = {
  breakpoints: ThemeBreakpointScale;
  buttons: any;
  colors: ThemeColorList;
  lineHeights: {
    // maybe lineheights are not a good thing to quantize
    body: number;
    heading: number;
    headingSecondary: number;
  };
  letterSpacings: ThemeLetterSpacingScale;
  fonts: {
    // this really should be called something like fontFamilies
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
  fontSizes: ThemeFontSizeScale;
  fontSize: ThemeFontSizeScale;
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
space.margin = 80;
space.marginMobile = 20;
space.marginWide = 200;
space.marginTablet = 64;

const breakpoints = ['768px', '1024px', '1440px'] as ThemeBreakpointScale;
breakpoints.tablet = breakpoints[0];
breakpoints.desktop = breakpoints[1];
breakpoints.max = breakpoints[2];

const letterSpacing = [
  -3, -1.5, -1, -0.5, 0, 1, 4, 12,
] as ThemeLetterSpacingScale;
letterSpacing.xs = space[1];
letterSpacing.sm = space[2];
letterSpacing.md = space[3];
letterSpacing.standard = space[4];
letterSpacing.wide = space[5];
letterSpacing.xw = space[6];
letterSpacing.xxw = space[7];

//                [ 0   1   2   3   4   5   6   7   8]
const fontSizes = [14, 16, 18, 24, 27, 42, 56, 64, 72] as ThemeFontSizeScale;
fontSizes.sm = fontSizes[0];
fontSizes.md = fontSizes[1];
fontSizes.lg = fontSizes[2];
fontSizes.xl = fontSizes[3];
fontSizes.x5 = fontSizes[4];
fontSizes.x6 = fontSizes[5];
fontSizes.x7 = fontSizes[6];
fontSizes.x8 = fontSizes[7];
fontSizes.x9 = fontSizes[8];

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
    headline: 'mrs-eaves-xl-serif',
    body: 'proxima-nova', // TODO: add bold variant?
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
  letterSpacings: letterSpacing,
  space,
  spaces: space, // renamed spaces to space ()
};

// ADDITIONAL TYPING
export type ThemeLineHeights = keyof typeof theme.lineHeights;
export type ThemeFontWeights = keyof typeof theme.fontWeights;
export type ThemeFonts = keyof typeof theme.fonts;

export default theme;
