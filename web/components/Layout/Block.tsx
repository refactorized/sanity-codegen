import styled from 'styled-components';
import theme, {ThemeColorName} from '../../themes';
import {query, space} from '../../themes/fn';

interface BlockComponentProps {
  narrow?: boolean;
  background?: ThemeColorName;
}

// set background color, but only if specified
const bgcolor = ({background}: BlockComponentProps) => {
  if (background) {
    return {backgroundColor: theme.colors[background]};
  }
  return null;
};

// set tablet+ padding for regular / narrow layouts
const paddingVariants = ({narrow}: BlockComponentProps) => {
  return narrow ? {padding: space('marginWide')} : {padding: space('margin')};
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
