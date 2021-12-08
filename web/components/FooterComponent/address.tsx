import styled from 'styled-components';
import {space, typography, color, layout} from 'styled-system';
import {ArcLogo} from '@components/ArcComponent';

export interface AddressProps {
  AddressLine1: string;
  AddressLine2: string;
  email: string;
  phone1: string;
  phone2: string;
  phoneLabel1: string;
  phoneLabel2: string;
}

export const Address = ({
  AddressLine1,
  AddressLine2,
  email,
  phone1,
  phone2,
  phoneLabel1,
  phoneLabel2,
}: AddressProps): JSX.Element => {
  return (
    <div>
      <StyledBox
        display="block"
        p={['25px 0', '0 0 20px', null, null]}
        maxWidth={['300px', '250px', '200px', '300px']}
        lineHeight={['33px', '20px', '0px', '33px']}
      >
        <ArcLogo />
      </StyledBox>

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
      >
        <Bold>{phoneLabel1}:</Bold> {phone1}
      </StyledLink>
      <StyledLink
        display="block"
        fontSize={[1, 0, null, 1]}
        fontWeight={['400', null, null, '100']}
        lineHeight="20px"
        letterSpacing="-0.015em"
        pb="10px"
        color="text"
      >
        <Bold>{phoneLabel2}:</Bold> {phone2}
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

const StyledBox = styled.div`
  ${typography}
  ${space}
  ${color}
  ${layout}
`;

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

const Bold = styled.span`
  font-weight: bold;
`;
