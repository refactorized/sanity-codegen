import styled from 'styled-components';
import {RightArrowNoLine} from '../Arrow/index';
import {typography} from 'styled-system';
import {color, space, query} from '../../themes/fn';

export interface BackButtonProps {
  menuLevel: number;
  parent: string;
  handleChangeLevel: (number) => void;
}

const Wrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  line-height: 1px;
  ${typography};
`;

const ArrowWrapper = styled.div`
  transform: rotate(180deg);
  margin-right: ${space('md')};
`;

const Title = styled.div`
  ${typography}
`;

export const BackButton = ({
  menuLevel,
  parent,
  handleChangeLevel,
}: BackButtonProps): JSX.Element => {
  const handleClickBack = () => {
    handleChangeLevel(-1);
  };
  return (
    <Wrapper onClick={handleClickBack} fontFamily="headline">
      <ArrowWrapper>
        <RightArrowNoLine />
      </ArrowWrapper>
      {menuLevel === 2 ? 'Main Menu' : parent}
    </Wrapper>
  );
};
