import styled from 'styled-components';
import {color, flexbox, typography, space, border, grid} from 'styled-system';
import {Phone} from '../PhoneComponent';
import {Button} from '../Button';

export interface AdmissionsCalloutProps {
  contactHeader: string;
  contactDescription: string;
  admissionHeader: string;
  admissionDescription: string;
  btnText: string;
  btnUrl: string;
  phoneNumber: string;
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
  phoneNumber = '866-255-1921',
}: AdmissionsCalloutProps): JSX.Element => {
  return (
    <StyledMainContainer
      gridGap={['38px', '40px', '100px']}
      gridTemplateColumns={['100%', 'repeat(2, 1fr)']}
      p="100px 0"
    >
      <StyledAdmissionsContainer
        flexDirection="column"
        alignContent="center"
        justifySelf="flex-end"
      >
        <StyledAdmissionsHeadline
          fontSize={['30px', '30px', '43px']}
          fontWeight="regular"
          fontFamily="body"
          letterSpacing="-0.01em"
          lineHeight={['36px', '51.39px']}
        >
          {admissionHeader}
        </StyledAdmissionsHeadline>
        <StyledAdmissionsDescription
          fontSize={['22px', '16px', '22px']}
          fontWeight="regular"
          fontFamily="headline"
          letterSpacing="-0.015em"
          lineHeight={['32px', '20px', '32px']}
        >
          {admissionDescription}
        </StyledAdmissionsDescription>
      </StyledAdmissionsContainer>

      <StyledContactContainer
        justifyContent={['center', 'center', 'flex-start']}
      >
        <StyledContactBox>
          <StyledFlexContainer
            flexDirection={['column']}
            justifyContent="space-between"
            p={['16px 22px', '16px 22px', '30px 48px']}
            color="text"
            bg="yellow"
            borderRadius={'4px'}
          >
            <div>
              <StyledHeadline
                m={0}
                fontSize={['20px', '24px', '27px']}
                fontWeight="regular"
                fontFamily="body"
                letterSpacing="-0.01em"
                lineHeight={['24.5px', '51.39px']}
              >
                {contactHeader}
              </StyledHeadline>
              <div>
                <StyledDescription
                  fontSize={['16px', '14px', '16px']}
                  fontWeight="regular"
                  fontFamily="headline"
                  letterSpacing="-0.015em"
                  lineHeight={['26px', '20px', '26px']}
                >
                  {contactDescription}
                </StyledDescription>
              </div>
            </div>
            <StyledLinkSection
              flexDirection={['column', 'row']}
              justifyContent="space-between"
              alignItems={['flex-start', 'center']}
              mt="20px"
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
            </StyledLinkSection>
          </StyledFlexContainer>
        </StyledContactBox>
      </StyledContactContainer>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  display: grid;
  ${grid}
  ${space}
`;

const StyledFlexContainer = styled.div`
  display: flex;
  ${flexbox}
  ${color}
  ${space}
  ${border}
`;

const StyledAdmissionsContainer = styled.div`
  display: flex;
  ${flexbox}
  max-width: 486px;
`;

const StyledAdmissionsHeadline = styled.h2`
  ${typography}
  ${space}
`;

const StyledAdmissionsDescription = styled.p`
  ${typography}
  ${space}
`;

const StyledContactContainer = styled.div`
  display: flex;
  ${flexbox}
  align-items: center;
`;

const StyledContactBox = styled.div`
  max-width: 440px;
`;

const StyledHeadline = styled.h1`
  ${typography}
  ${space}
`;

const StyledDescription = styled.h2`
  ${typography}
`;
const StyledLinkSection = styled.div`
  display: flex;
  ${flexbox}
  ${space}
  gap: 20px;
`;
