import {MouseEventHandler} from 'react';
import styled from 'styled-components';
import {color, space, typography, flexbox, variant} from 'styled-system';
import {solid, outlined, text} from '../../themes/variants/buttons';
import Image from 'next/image';

type ButtonVariants = 'solid' | 'outlined' | 'text';
type SizeVariants = 'large' | 'medium' | 'small';

export interface ButtonProps {
  variant: ButtonVariants;
  // For URLs
  url?: string;
  // For click events
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  label: string;
  size: SizeVariants;
}

/*** STYLING ***/
const StyledButton = styled.button`
  ${variant({
    variants: {
      solid,
      outlined,
      text,
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
  label = 'Button',
  size = 'medium',
}: ButtonProps): JSX.Element => {
  return url ? (
    <StyledButtonLink
      href={url}
      variant={variant}
      py={size === 'large' ? 3 : size === 'small' ? 1 : 2}
      px={size === 'large' ? 3 : 2}
    >
      {label}
    </StyledButtonLink>
  ) : (
    <StyledButton
      onClick={onClickHandler}
      variant={variant}
      py={size === 'large' ? 3 : size === 'small' ? 1 : 2}
      px={size === 'large' ? 3 : 2}
    >
      {label}
    </StyledButton>
  );
};
