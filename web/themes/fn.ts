import theme, {ThemeColorName} from './';
import {default as queryObj} from './query';
import {ThemeBreakpointName} from './theme';
/**
 * for when you just need a color string
 * @param color - Theme color name
 * @returns css color string, e.g. '#663399'
 */
export const color = (color: ThemeColorName) => () => theme.colors[color];

const atLeast = (breakpoint: ThemeBreakpointName) => (/*props*/) =>
  queryObj.atLeast[breakpoint];

const below = (breakpoint: ThemeBreakpointName) => (/*props*/) =>
  queryObj.below[breakpoint];

export const query = {
  atLeast,
  below,
};
