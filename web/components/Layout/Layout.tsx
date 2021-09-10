import {ThemeProvider} from 'styled-components';
import theme, {Theme} from '../../themes';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export interface LayoutProps {
  theme?: Theme;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const _theme = props.theme || theme;
  return (
    <ThemeProvider theme={_theme}>
      <Container {...props} />
    </ThemeProvider>
  );
};
export default Layout;
