import {ThemeProvider} from 'styled-components';
import theme, {Theme} from '../../themes';
import React from 'react';
import styled from 'styled-components';

export interface LayoutProps {
  theme?: Theme;
  preview?: boolean;
}

export const Container = styled.div<LayoutProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-height: 100vh;
  ${({preview}) => {
    if (preview) {
      return {border: 'dashed orange 5px'};
    }
  }}
`;

const Layout: React.FC<LayoutProps> = (props) => {
  const _theme = props.theme || theme;
  return (
    <ThemeProvider theme={_theme}>
      <Container {...props} />
    </ThemeProvider>
  );
};
export default Layout;
