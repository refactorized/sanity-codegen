import {MouseEventHandler} from 'react';
import styled from 'styled-components';
import {color, space, typography, variant} from 'styled-system';
import {
  solid,
  outlined,
  text,
  secondary,
  category,
} from '../../themes/variants/buttons';
import {RightArrowNoLine} from '../Arrow/index';

type ButtonVariants = 'solid' | 'outlined' | 'text' | 'secondary' | 'category';
type SizeVariants = 'large' | 'medium' | 'small';

export interface ButtonProps {
  variant: ButtonVariants;
  // For URLs
  url?: string;
  // For click events
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  label: string;
  size: SizeVariants;
  arrow: Boolean;
  arrowColor?: string;
}

/*** STYLING ***/
const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledSpan = styled.span`
  ${space}
  ${typography}
`;
const StyledButton = styled.button`
  ${variant({
    variants: {
      solid,
      outlined,
      text,
      secondary,
      category,
    },
  })}
  ${color}
  ${space}
  ${typography}
`;

const StyledButtonLink = styled.a`
  ${variant({
    variants: {
      solid,
      outlined,
      text,
      secondary,
      category,
    },
  })}
  ${color}
  ${space}
  ${typography}
`;

export const Button = ({
  variant = 'solid',
  url,
  onClickHandler,
  label = 'Learn About Us',
  size = 'medium',
  arrow = true,
  arrowColor = 'black',
}: ButtonProps): JSX.Element => {
  return (
    <StyledWrapper>
      {url ? (
        <StyledButtonLink href={url} variant={variant}>
          <StyledSpan mr={arrow === true ? 2 : 0}>{label}</StyledSpan>
          {arrow && <RightArrowNoLine stroke={arrowColor} size={8} />}
        </StyledButtonLink>
      ) : (
        <StyledButton onClick={onClickHandler} variant={variant}>
          <StyledSpan mr={arrow === true ? 2 : 0}>{label}</StyledSpan>
          {arrow && <RightArrowNoLine stroke={arrowColor} size={8} />}
        </StyledButton>
      )}
    </StyledWrapper>
  );
};
