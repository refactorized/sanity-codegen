import theme, {ThemeColorName} from './';
import {default as queryObj} from './query';
import {ThemeBreakpointName, ThemeSpaceName} from './theme';

export const color = (name: ThemeColorName) => () => theme.colors[name];

export const space = (name: ThemeSpaceName) => () => `${theme.spaces[name]}px`;

const atLeast = (breakpoint: ThemeBreakpointName) => () =>
  queryObj.atLeast[breakpoint];

const below = (breakpoint: ThemeBreakpointName) => () =>
  queryObj.below[breakpoint];

export const query = {
  atLeast,
  below,
};
