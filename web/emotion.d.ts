import {Theme as _Theme} from './themes';

declare module '@emotion/react' {
  export interface Theme extends _Theme {}
}
