import styled from 'styled-components';
import {
  space,
  typography,
  color,
  flexbox,
  layout,
  grid,
  size,
  border,
} from 'styled-system';
import {Address} from './address';
import {Facebook, Twitter, LinkedIn} from '../SocialComponents';

// *************
// FOR STRICT FOOTER PROPS
// CHECK IN THE data/types.d.ts FILE
// LINES 30-54
// *************

export const Footer = ({
  AddressLine1,
  AddressLine2,
  email,
  phone,
  fax,
  footerConfig,
  privatePolicy,
  austinRiggs,
}: SiteConfig): JSX.Element => {
  // Created ColumnArr for Functional Usage
  // Used in Lines 147 & 232
  const columnArr = [
    footerConfig.col1,
    footerConfig.col2,
    footerConfig.col3,
    footerConfig.col4,
  ];
  // Created ColumnData Function to Prevent
  // Styled Systems Styling Repetition
  const columnData = (colObj: any) => {
    return colObj.map((x: any) => (
      <div>
        {x.map((x: any, i: number) =>
          i === 0 ? (
            <StyledLink
              display="block"
              fontSize={[0, null, null, 1]}
              fontWeight="bold"
              lineHeight={['22px', '24px', null, '30px']}
              letterSpacing="-0.015em"
              paddingBottom={['10px', '25px', null, 'initial']}
              color="text"
              href={x.slug.current}
              key={x.key}
            >
              {x.title}
            </StyledLink>
          ) : (
            <StyledLink
              display="block"
              fontSize={1}
              fontWeight="regular"
              lineHeight="30px"
              letterSpacing="-0.015em"
              color="text"
              key={x._key}
              href={x.slug.current}
            >
              {x.title}
            </StyledLink>
          ),
        )}
      </div>
    ));
  };

  return (
    <StyledBox
      fontFamily="headline"
      bg="sky"
      display="grid"
      gridTemplateRows={['1fr 165px', '1fr 90px', null, null]}
      p={['34px 19px 0', '50px 50px 0', null, '76px 76px 0px']}
    >
      <StyledBox
        display={['none', null, null, 'grid']}
        gridTemplateColumns="25% 12% 12% 11% 14% 12%"
        gridGap="38px"
        pb="140px"
        borderBottom="rgba(0, 0, 0, 0.5) solid 1px"
      >
        {/* Pulling from Address Component I Created Located in Same File Folder */}
        <Address
          AddressLine1={AddressLine1}
          AddressLine2={AddressLine2}
          email={email}
          phone={phone}
          fax={fax}
        />
        {/* columnData iterates and renders Columns 1 - 4 */}
        {columnData(columnArr.map((x) => x))}
        <div>
          {/* This is UNIQUE column 5 (has all fully bolded list compared to other columns)  */}
          {footerConfig.col5.map((x) => (
            <StyledLink
              display="block"
              fontSize={[0, null, null, 1]}
              fontWeight="bold"
              lineHeight={['22px', '24px', null, '30px']}
              letterSpacing="-0.015em"
              paddingBottom={['10px', '25px', null, 'initial']}
              color="text"
              href={x.slug.current}
              key={x._key}
            >
              {x.title}
            </StyledLink>
          ))}
        </div>
      </StyledBox>
      <StyledBox
        display={['grid', null, null, 'none']}
        gridTemplateColumns={['100%', '50% 55%', null, 'none']}
        borderBottom="rgba(0, 0, 0, 0.5) solid 1px"
      >
        {/* Pulling from Address Component I Created Located in Same File Folder */}
        <Address
          AddressLine1={AddressLine1}
          AddressLine2={AddressLine2}
          email={email}
          phone={phone}
          fax={fax}
        />
        <StyledBox
          display={['grid', null, null, 'none']}
          gridTemplateColumns="70% 30%;"
          p={['20px 0', '0 0 15px', null]}
        >
          <div>
            {/* columnData iterates and renders Every First Item from Columns 1 - 4 */}
            {columnArr.map((x: any) => (
              <StyledLink
                display="block"
                fontSize={[0, 1, null, null]}
                fontWeight="bold"
                lineHeight={['22px', '24px', null, '30px']}
                letterSpacing="-0.015em"
                paddingBottom={['10px', '25px', null, 'initial']}
                m="0"
                color="text"
                href={x[0].slug.current}
              >
                {x[0].title}
              </StyledLink>
            ))}
          </div>
          <div>
            {footerConfig.col5.map((x) => (
              <StyledLink
                display="block"
                fontSize={[0, 1, null, null]}
                fontWeight="bold"
                lineHeight={['22px', '24px', null, '30px']}
                letterSpacing="-0.015em"
                paddingBottom={['10px', '25px', null, 'initial']}
                m="0"
                color="text"
                href={x.slug.current}
                key={x._key}
              >
                {x.title}
              </StyledLink>
            ))}
          </div>
        </StyledBox>
      </StyledBox>
      <StyledBox
        display={['flex', 'grid', null, null]}
        gridTemplateColumns={['none', 'repeat(3, 1fr)', null, '25% auto 30%']}
        alignItems={['flex-start', 'center', null, null]}
        flexDirection={['column-reverse', 'none', null, null]}
        p={['20px 0', null, null, 'none']}
      >
        <StyledHeading
          fontWeight="regular"
          fontSize={0}
          m="0"
          lineHeight="24px"
          letterSpacing="-0.015em"
        >
          © {new Date().getFullYear() + ' ' + austinRiggs}
        </StyledHeading>
        <StyledHeading
          fontWeight="regular"
          fontSize={0}
          m="0"
          lineHeight="24px"
          letterSpacing="-0.015em"
        >
          {privatePolicy}
        </StyledHeading>
        <StyledBox
          display="flex"
          alignItems="center"
          gap="15px"
          justifySelf={['inherit', 'self-end', null, null]}
          p={['20px 0', 'initial', null, null]}
        >
          <StyledHeading
            fontWeight="bold"
            fontSize={0}
            m="0"
            lineHeight="24px"
            letterSpacing="-0.015em"
            p={['0 10px 0 0', '0 20px', null]}
          >
            Follow us:
          </StyledHeading>
          <SocialContainer>
            <Facebook
              color="#204568"
              hoverColor="black"
              link="https://www.linkedIn.com"
              size="38"
            />
            <Twitter
              color="#204568"
              hoverColor="black"
              link="https://www.linkedIn.com"
              size="38"
            />
            <LinkedIn
              color="#204568"
              hoverColor="black"
              link="https://www.linkedIn.com"
              size="38"
            />
          </SocialContainer>
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  ${color}
  ${typography}
  ${flexbox}
  ${space}
  ${layout}
  ${grid}
  ${size}
  ${border}
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

const StyledHeading = styled.h2`
  ${typography}
  ${space}
  ${color}
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 5px;
    @media (max-width: 900px) {
      svg {
        max-width: 30px;
      }
      padding: 3px;
    }
  }
`;
