import styled from 'styled-components';
import {FC} from 'react';

const SimpleAspectBox = styled.div`
  position: relative;
  padding: 0;
  height: 0;
  overflow: hidden;
  padding-top: ${(props) => 100 / props.ratio}%;

  & > * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    object-fit: cover;
  }
`;

export default SimpleAspectBox as FC<{ratio: number}>;
