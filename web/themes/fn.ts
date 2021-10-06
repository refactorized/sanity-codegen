import theme, {ThemeColorName} from './';
import {default as queryObj, mq} from './query';
import {
  ThemeBreakpointName,
  ThemeSpaceName,
  ThemeFontWeights,
  ThemeLineHeights,
  ThemeFonts,
  ThemeLetterSpacingName,
  ThemeFontSizeName,
} from './theme';
import fontDefs, {FontDef, FontDefName} from './fontDefs';
import facepaint from 'facepaint';

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

// export const letterSpacing = (name: ThemeLetterSpacingName) => () => ({
//   letterSpacing: theme.letterSpacings[name],
// });

export const fontSize = (name: ThemeFontSizeName) => () => ({
  fontSize: `${theme.fontSizes[name]}px`,
});

export const fontDef = (name: FontDefName) => () => {
  const def = fontDefs[name];
  return {
    fontFamily: theme.fonts[def.themeFontFamily],
    fontWeight: theme.fontWeights[def.themeFontWeight],
    fontSize: def.fontSize,
    letterSpacing: def.letterSpacing,
    lineHeight: def.lineHeight,
  };
};

export const fontStack = (names: FontDefName[]) => () => {
  const defs = names.map((name) => fontDefs[name]);
  return mq({
    fontFamily: defs.map((d) => theme.fonts[d.themeFontFamily]),
    fontWeight: defs.map((d) => theme.fonts[d.themeFontWeight]),
    fontSize: defs.map((d) => d.fontSize),
    letterSpacing: defs.map((d) => d.letterSpacing),
    lineHeight: defs.map((d) => d.lineHeight),
  });
};

const atLeast = (breakpoint: ThemeBreakpointName) => () =>
  queryObj.atLeast[breakpoint];

const below = (breakpoint: ThemeBreakpointName) => () =>
  queryObj.below[breakpoint];

export const query = {
  atLeast,
  below,
};
