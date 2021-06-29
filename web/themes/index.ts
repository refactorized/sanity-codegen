export {default} from './theme';
export type {Theme as Theme} from './theme';
export type {ThemeColorList, ThemeColorName} from './colors';

import {Theme} from './theme'; // make Theme type available in this module

export interface PropsWithTheme {
  theme: Theme;
}
