import React from 'react';
import styled from 'styled-components';
import {color, space, typography} from 'styled-system';

interface PhoneComponentProps {
  tel: string;
  fontSize: string;
  fontWeight: string;
}

export const Phone = ({
  tel = '123.456.7890',
  fontSize = '16px',
  fontWeight = 'regular',
}: PhoneComponentProps): JSX.Element => {
  return (
    <PhoneContainer
      color="text"
      fontFamily="headline"
      fontSize={fontSize}
      fontWeight={fontWeight}
      href={'tel:' + tel}
    >
      {tel}
    </PhoneContainer>
  );
};

const PhoneContainer = styled.a`
  ${color}
  ${space}
  ${typography}
  text-decoration: none;
`;
