import styled from 'styled-components';
import {space, typography, color, layout} from 'styled-system';

export interface AddressProps {
  AddressLine1: string;
  AddressLine2: string;
  email: string;
  phone: string;
  fax: string;
}

export const Address = ({
  AddressLine1,
  AddressLine2,
  email,
  phone,
  fax,
}: AddressProps): JSX.Element => {
  return (
    <div>
      {/* The Styled Title is a placeholder for the Austin Riggs Logo */}
      <StyledTitle>Austen riggs Center</StyledTitle>
      {/* The Styled Title is a placeholder for the Austin Riggs Logo */}

      <StyledLink
        display="block"
        fontSize={[1, 0, null, 1]}
        fontWeight={['400', null, null, '100']}
        lineHeight="20px"
        letterSpacing="-0.015em"
        pb="10px"
        color="text"
        maxWidth="200px"
      >
        {AddressLine1} {AddressLine2}
      </StyledLink>
      <StyledLink
        display="block"
        fontSize={[1, 0, null, 1]}
        fontWeight={['400', null, null, '100']}
        lineHeight="20px"
        letterSpacing="-0.015em"
        pb="10px"
        color="text"
        maxWidth="200px"
      >
        p: {phone}
      </StyledLink>
      <StyledLink
        display="block"
        fontSize={[1, 0, null, 1]}
        fontWeight={['400', null, null, '100']}
        lineHeight="20px"
        letterSpacing="-0.015em"
        pb="10px"
        color="text"
        maxWidth="200px"
      >
        f: {fax}
      </StyledLink>
      <StyledLink
        display="block"
        fontSize={[1, 0, null, 1]}
        fontWeight={['400', null, null, '100']}
        lineHeight="20px"
        letterSpacing="-0.015em"
        pb="10px"
        color="text"
        maxWidth="200px"
      >
        {email}
      </StyledLink>
    </div>
  );
};

// IGNORE THIS STYLED COMPONENT SINCE THIS WILL BE DELETED AFTER
// RECEIVING LOGO FROM JACKIE/+DANA. IT'S A PLACEHOLDER
// (So it doesn't look so hideous)!
const StyledTitle = styled.h2`
  font-size: 27px;
  font-weight: 100;
  line-height: 33px;
  letter-spacing: 0em;
  text-transform: uppercase;
  margin-top: 0;

  @media (max-width: 1024px) {
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    font-weight: 300;
    line-height: 31px;
  }
`;
//----------------------------

const StyledLink = styled.a`
  font-size: 20px;
  ${typography}
  ${space}
  ${color}
  ${layout}

  //Styled System Doesn't Support These Stylings
  cursor: pointer;
  text-decoration: none;
  //--------------------
`;
