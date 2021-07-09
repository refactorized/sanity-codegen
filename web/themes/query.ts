import theme, {Theme, ThemeBreakpointName} from './theme';

type ThemeWidthQuery = {
  [index in ThemeBreakpointName]: string;
} & {
  (px: number): string;
};

export type ThemeQueryMethods = {
  below: ThemeWidthQuery;
  atLeast: ThemeWidthQuery;
};

const belowFn = (px: number) => `max-width: ${px - 1}px`;
const atLeastFn = (px: number) => `min-width: ${px}px`;

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

export default query;
