//todo: decide best way to export types, (here, types file, individually, ambient)
export {default} from './theme';
export type {Theme as Theme} from './theme';
export type {ThemeColorList, ThemeColorName} from './colors';
export {default as query} from './query';

// also import Theme Type here
import {Theme} from './theme';
export interface PropsWithTheme {
  theme: Theme;
}
