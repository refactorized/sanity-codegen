import React from 'react';
import styled from 'styled-components';
import {color, space, typography} from 'styled-system';

interface PhoneComponentProps {
  tel: string;
  fontSize: string | number;
  fontWeight: string;
  fontColor: string;
  hoverColor: string;
}

export const Phone = ({
  tel = '123.456.7890',
  fontSize = '16px',
  fontWeight = 'regular',
  fontColor = 'text',
  hoverColor = 'navy',
}: PhoneComponentProps): JSX.Element => {
  return (
    <PhoneContainer
      color={fontColor}
      hoverColor={hoverColor}
      fontFamily="body"
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
  transition: ease-in 0.15s;
  &:hover {
    color: ${(props: PhoneComponentProps) => props.hoverColor};
  }
  white-space: nowrap;
`;
