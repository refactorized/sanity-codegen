import styled from 'styled-components';
import {FC} from 'react';
import {mq} from '@theme/query';

const paddingCss = ({ratio}: {ratio: number | number[]}) => {
  if (typeof ratio === 'number') {
    return {paddingTop: `${100 / ratio}%`};
  } else {
    return mq({
      paddingTop: ratio.map((r) => `${100 / r}%`),
    });
  }
};

const SimpleAspectBox = styled.div`
  position: relative;
  padding: 0;
  height: 0;
  overflow: hidden;
  ${paddingCss}

  & > * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    object-fit: cover;
  }
`;

export default SimpleAspectBox as FC<{ratio: number | number[]}>;
