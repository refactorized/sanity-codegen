import theme, {ThemeColorName} from './';

/**
 * for when you just need a color string
 * @param color - Theme color name
 * @returns css color string, e.g. '#663399'
 */
export const color = (color: ThemeColorName) => () => theme.colors[color];
