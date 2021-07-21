import styled from 'styled-components';
import theme, {Theme, ThemeColorName} from '../../themes';
import {query, space} from '../../themes/fn';

export interface BlockComponentProps {
  narrow?: boolean;
  background?: ThemeColorName;
  theme?: Theme;
}

// set background color, but only if specified
const bgcolor = ({background}: BlockComponentProps) => {
  if (background) {
    return {backgroundColor: theme.colors[background]};
  }
  return null;
};

// set tablet+ padding for regular / narrow layouts
const paddingVariants = ({narrow, theme}: BlockComponentProps) => {
  // calculate padding in order to lock virtual max width
  const widthPadding = (marginPx: number) =>
    `calc(${marginPx}px + max(0px, 50% - ${theme.breakpoints.max} / 2))`;
  return {
    padding: `${theme.space.margin}px ${widthPadding(
      narrow ? theme.space.marginWide : theme.space.margin,
    )}`,
  };
};

const Block = styled.div<BlockComponentProps>`
  box-sizing: border-box; // allows padding to size inner content
  width: 100%;
  ${bgcolor}

  padding: ${space('marginMobile')};

  @media (${query.atLeast('tablet')}) {
    ${paddingVariants}
  }
`;

export default Block;
