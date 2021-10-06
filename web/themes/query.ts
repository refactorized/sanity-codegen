import theme, {Theme, ThemeBreakpointName} from './theme';
import facepaint from 'facepaint';

type ThemeWidthQuery = {
  [index in ThemeBreakpointName]: string;
} & {
  (px: number): string;
};

export type ThemeQueryMethods = {
  below: ThemeWidthQuery;
  atLeast: ThemeWidthQuery;
};

const belowFn = (brk: string) => `max-width: calc(${brk} - 1px)`;
const atLeastFn = (brk: string) => `min-width: ${brk}`;

// note that these constants will also include '0'-'10' which are extra-typal
const belowConstants = Object.fromEntries(
  Object.entries(theme.breakpoints).map(([k, px]) => [k, belowFn(px)]),
);

const atLeastConstants = Object.fromEntries(
  Object.entries(theme.breakpoints).map(([k, px]) => [k, atLeastFn(px)]),
);

const below = Object.assign(
  belowFn,
  belowConstants,
) as unknown as ThemeWidthQuery;

const atLeast = Object.assign(
  atLeastFn,
  atLeastConstants,
) as unknown as ThemeWidthQuery;

const query: ThemeQueryMethods = {below, atLeast};

export const mq = facepaint(
  theme.breakpoints.map((brk: string) => `@media(min-width: ${brk})`),
);

export default query;
