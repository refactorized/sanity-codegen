import {FC} from 'react';
import styled from 'styled-components';
import theme, {Theme, ThemeColorName} from '@theme';
import query from '@theme/query';

export interface BlockComponentProps {
  narrow?: true;
  squish?: true;
  full?: true;
  background?: ThemeColorName;
  theme?: Theme;
}

// generate css calculate rule that uses padding to lock a virtual max width
const extraPaddingCalc = (marginPx: number) =>
  `calc(${marginPx}px + max(0px, 50% - ${theme.breakpoints.max} / 2))`;

const Block = styled.div<BlockComponentProps>(
  ({narrow, squish, background, theme, full}: BlockComponentProps) => {
    // TODO: use styled components CSSObject Type
    const css: Record<string, any> = {
      boxSizing: 'border-box', // allows padding to size inner content
      width: '100%',
      // prevent margin collapse to preserve apparent padding when bg set
      '&>*': {overflow: 'hidden'},
    };

    // add background if specified
    if (background) {
      css.backgroundColor = theme.colors[background];
    }
    const padding = {
      mobile: {
        x: `${full ? 0 : theme.space.marginMobile}px`,
        y: `${full ? 0 : theme.space.marginMobile}px`,
      },
      tablet: {
        x: `${full ? 0 : theme.space.marginTablet}px`,
        y: `${full ? 0 : squish ? theme.space.md : theme.space.margin}px`,
      },
      desktop: {
        x: `${
          full
            ? 0
            : extraPaddingCalc(
                narrow ? theme.space.marginWide : theme.space.margin,
              )
        }`,
        y: `${full ? 0 : squish ? theme.space.md : theme.space.margin}px`,
      },
    };

    css.padding = `${padding.mobile.y} ${padding.mobile.x}`;

    css[`@media (${query.atLeast.tablet})`] = {
      padding: `${padding.tablet.y} ${padding.tablet.x}`,
    };
    css[`@media (${query.atLeast.desktop})`] = {
      padding: `${padding.desktop.y} ${padding.desktop.x}`,
    };

    return css;
  },
);

export default Block as FC<BlockComponentProps>;
