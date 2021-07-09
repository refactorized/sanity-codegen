import styled from 'styled-components';
import {color, query} from '../../themes/fn';

const Block = styled.div`
  width: 100%;
  background-color: ${color('green')};
  @media (${query.atLeast('tablet')}) {
    background-color: ${color('navy')};
  }
`;

export default Block;
