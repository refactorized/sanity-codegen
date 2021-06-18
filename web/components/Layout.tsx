import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 720px;
  min-height: 90vh;
  padding: 100px 20px 20px;
  background-color: #eee;
`;

const Layout: React.FC = ({children}) => {
  return (
    <Outer>
      <Inner {...{children}} />
    </Outer>
  );
};

export default Layout;
