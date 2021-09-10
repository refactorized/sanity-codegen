import {ThemeProvider} from 'styled-components';
import theme from '../../themes';
import React from 'react';
import styled from 'styled-components';
import {color, fontSize, fontFamily, space, query} from '@theme/fn';
import {Container, LayoutProps} from './Layout';

const ErrorContainer = styled(Container)`
  background: ${color('cream')};
  text-align: left;
`;

export const Header = styled.h1`
  ${fontSize('x8')};
  ${fontFamily('headline')};
`;

export const Text = styled.p`
  ${fontSize('xl')};
  ${fontFamily('body')};
  margin: ${space('md')} 0 ${space('x12')};
  max-width: 681px;
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
