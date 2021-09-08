import theme, {ThemeColorName} from './';
import {default as queryObj} from './query';
import {
  ThemeBreakpointName,
  ThemeSpaceName,
  ThemeFontWeights,
  ThemeLineHeights,
  ThemeFonts,
  ThemeLetterSpacingName,
  ThemeFontSizeName,
} from './theme';

// TODO: allow passing of theme for all these functions

export const color = (name: ThemeColorName) => () => theme.colors[name];

export const space = (name: ThemeSpaceName) => () => `${theme.spaces[name]}px`;

export const fontWeight = (name: ThemeFontWeights) => () => ({
  fontWeight: theme.fontWeights[name],
});

export const lineHeight = (name: ThemeLineHeights) => () => ({
  lineHeight: theme.lineHeights[name],
});

export const fontFamily = (name: ThemeFonts) => () => ({
  fontFamily: theme.fonts[name],
});

export const letterSpacing = (name: ThemeLetterSpacingName) => () => ({
  letterSpacing: theme.letterSpacings[name],
});

export const fontSize = (name: ThemeFontSizeName) => () => ({
  fontSize: `${theme.fontSizes[name]}px`,
});

const atLeast = (breakpoint: ThemeBreakpointName) => () =>
  queryObj.atLeast[breakpoint];

const below = (breakpoint: ThemeBreakpointName) => () =>
  queryObj.below[breakpoint];

export const query = {
  atLeast,
  below,
};
