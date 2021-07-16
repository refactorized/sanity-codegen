import styled from '@emotion/styled';
import theme, {ThemeColorName} from '../../themes';
import {query, space} from '../../themes/fn';
import config from '../../../config';

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
  return narrow
    ? {padding: space('marginWide')()}
    : {padding: space('margin')()};
};

const Block = styled.div<BlockComponentProps>`
  box-sizing: border-box; // allows padding to size inner content
  width: 100%;
  ${bgcolor}

  padding: ${space('marginMobile')};

  @media (${query.atLeast('tablet')}) {
    ${paddingVariants}
  }
  color: ${({theme}) => theme.colors.navy};
`;

const whatevs = () => {
  return <Block narrow background={'orange'} />;
};

export default Block;
