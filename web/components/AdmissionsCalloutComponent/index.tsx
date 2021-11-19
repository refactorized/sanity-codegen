import styled from 'styled-components';
import {
  color,
  flexbox,
  typography,
  space,
  border,
  grid,
  layout,
} from 'styled-system';
import {CircleArrow} from '@components/Arrow/index';
import {Phone} from '@components/PhoneComponent';
import {Button} from '@components/Button';
import Block from '@components/Layout/Block';

export interface AdmissionsCalloutProps {
  contactHeader: string;
  contactDescription: string;
  admissionHeader: string;
  admissionDescription: string;
  btnText: string;
  btnUrl: string;
  phoneNumber?: string;
  boxlessbtnText?: string;
  boxlessbtnUrl?: string;
}

export const AdmissionsCallout = ({
  contactHeader = `Speak with Admissions`,
  contactDescription = `From first contact to admissions consultation, follow the steps in our admissions process.`,
  admissionHeader = `Admissions Process`,
  admissionDescription = `If other treatments haven’t worked, Riggs may be right for you. Unlike
  at other psychiatric hospitals in Massachusetts or elsewhere, our
  relational, patient-driven behavioral treatment approach addresses
  underlying issues, not just symptoms.`,
  btnText = `Contact Admissions`,
  btnUrl = `#`,
  boxlessbtnText,
  boxlessbtnUrl,
  phoneNumber,
}: AdmissionsCalloutProps): JSX.Element => {
  return (
    <Block>
      <StyledBox
        display="grid"
        gridGap={['38px', '40px', null, '100px']}
        gridTemplateColumns={['100%', '1fr 1fr']}
      >
        <StyledBox
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifySelf={['center', 'flex-end']}
          maxWidth="486px"
        >
          <StyledHeadline2
            fontSize={['30px', '30px', '43px']}
            fontWeight="regular"
            fontFamily="headline"
            letterSpacing="-0.01em"
            lineHeight={['36px', '51.39px']}
            m=" 0"
          >
            {admissionHeader}
          </StyledHeadline2>
          <StyledParagraph
            fontSize={['22px', '16px', '22px']}
            fontWeight="regular"
            fontFamily="body"
            letterSpacing="-0.015em"
            lineHeight={['32px', '26px', '32px']}
          >
            {admissionDescription}
          </StyledParagraph>
          {boxlessbtnText && boxlessbtnUrl && (
            <StyledLink
              href={boxlessbtnUrl}
              display=" flex"
              alignItems=" center"
              color="text"
              textDecorate="none"
            >
              <StyledBox
                fontFamily="body"
                fontSize="18px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="19px"
                letterSpacing="-0.015em"
                textAlign="left"
                textDecorate="none"
                mr="10px"
              >
                {boxlessbtnText}
              </StyledBox>
              <CircleArrow />
            </StyledLink>
          )}
        </StyledBox>

        <StyledBox
          display="flex"
          justifyContent={['center', 'center', 'flex-start']}
          alignItems="center"
        >
          <StyledBox maxWidth="440px">
            <StyledBox
              display="flex"
              flexDirection={['column']}
              justifyContent="space-between"
              p={['16px 22px', '16px 22px', '30px 48px']}
              color="text"
              bg="yellow"
              borderRadius={'4px'}
            >
              <div>
                <StyledHeadline
                  m={['10px 0', '0']}
                  fontSize={['20px', '24px', '27px']}
                  fontWeight="regular"
                  fontFamily="headline"
                  letterSpacing="-0.01em"
                  lineHeight={['24.5px', '51.39px']}
                >
                  {contactHeader}
                </StyledHeadline>
                <div>
                  <StyledHeadline2
                    fontSize={['16px', '14px', '16px']}
                    fontWeight="regular"
                    fontFamily="body"
                    letterSpacing="-0.015em"
                    lineHeight={['26px', '20px', '26px']}
                  >
                    {contactDescription}
                  </StyledHeadline2>
                </div>
              </div>
              <StyledBoxEdit
                display="flex"
                flexDirection={['column', null, 'row']}
                justifyContent="space-between"
                alignItems={['flex-start', null, 'center']}
                mt="5px"
              >
                <Button
                  variant="secondary"
                  label={btnText}
                  url={btnUrl}
                  size="medium"
                  arrow={true}
                  arrowColor="#D15D34"
                />
                <Phone
                  tel={phoneNumber}
                  fontSize={2}
                  fontWeight="bold"
                  fontColor="text"
                  hoverColor="white"
                />
              </StyledBoxEdit>
            </StyledBox>
          </StyledBox>
        </StyledBox>
      </StyledBox>
    </Block>
  );
};

const StyledBox = styled.div`
  ${layout}
  ${grid}
  ${flexbox}
  ${color}
  ${typography}
  ${space}
  ${border}
`;

const StyledBoxEdit = styled.div`
  ${layout}
  ${flexbox}
  ${space}

  //Styled System Doesn't Support These Stylings
    gap: 20px;
  //--------------------
`;

const StyledLink = styled.a`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  //Styled System Doesn't Support These Stylings
  text-decoration: none;
  //--------------------
`;

const StyledHeadline = styled.h1`
  ${typography}
  ${space}
`;

const StyledHeadline2 = styled.h2`
  ${typography}
  ${space}
`;

const StyledParagraph = styled.p`
  ${typography}
  ${space}
`;
