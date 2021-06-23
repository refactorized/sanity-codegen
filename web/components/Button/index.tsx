import {MouseEventHandler} from 'react';
import styled from 'styled-components';
import {color, space, typography, variant} from 'styled-system';
import {solid, outlined, text, secondary} from '../../themes/variants/buttons';
import {RightArrowNoLine} from '../Arrow/index';

type ButtonVariants = 'solid' | 'outlined' | 'text' | 'secondary';
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
  arrowColor: string;
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
          <StyledSpan mr={3}>{label}</StyledSpan>
          {arrow && <RightArrowNoLine stroke={arrowColor} height={12} />}
        </StyledButtonLink>
      ) : (
        <StyledButton onClick={onClickHandler} variant={variant}>
          <StyledSpan mr={3}>{label}</StyledSpan>
          {arrow && <RightArrowNoLine stroke={arrowColor} height={12} />}
        </StyledButton>
      )}
    </StyledWrapper>
  );
};
