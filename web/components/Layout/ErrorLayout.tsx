import {ThemeProvider} from 'styled-components';
import theme from '../../themes';
import React from 'react';
import styled from 'styled-components';
import {color, fontSize, fontFamily, space, query, fontWeight} from '@theme/fn';
import {Container, LayoutProps} from './Layout';

const ErrorContainer = styled(Container)`
  background: ${color('cream')};
  text-align: left;
`;

export const Header = styled.h1`
  ${fontSize('x6')};
  ${fontFamily('headline')};
  ${fontWeight('regular')};
  margin-bottom: 0;
  @media screen and (${query.atLeast('tablet')}) {
    ${fontSize('x8')};
  }
`;

export const Text = styled.p`
  ${fontSize('md')};
  ${fontFamily('body')};
  margin: ${space('md')} 0 ${space('lg')};
  max-width: 681px;

  @media screen and (${query.atLeast('tablet')}) {
    ${fontSize('xl')};
    margin: ${space('md')} 0 ${space('x10')};
  }
`;

export const ButtonWrapperForSpacing = styled.div`
  margin-bottom: ${space('x12')};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: ${space('md')};
  }

  @media screen and (${query.atLeast('tablet')}) {
    flex-direction: row;

    > div {
      margin-right: ${space('md')};
      margin-bottom: 0;
    }
  }
`;

const ErrorLayout: React.FC<LayoutProps> = (props) => {
  const _theme = props.theme || theme;
  return (
    <ThemeProvider theme={_theme}>
      <ErrorContainer {...props} />
    </ThemeProvider>
  );
};
export default ErrorLayout;
