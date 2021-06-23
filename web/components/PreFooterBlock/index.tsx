import styled from 'styled-components';
import {color, flexbox, typography, space, border} from 'styled-system';
import {Phone} from '../PhoneComponent';
import {Button} from '../Button';
export interface PreFooterBlockProps {
  header: string;
  description: string;
  btnText: string;
  btnUrl: string;
  phoneNumber: string;
}

export const PreFooterBlock = ({
  header = `Start the Admissions Process`,
  description = `From first contact to admissions consultation, let’s find out if we’re a good fit. `,
  btnText = `Contact Us`,
  btnUrl = `#`,
  phoneNumber = '866-255-1921',
}: PreFooterBlockProps): JSX.Element => {
  return (
    <StyledContainer
      flexDirection={['column', 'row']}
      justifyContent="space-between"
      p={['22px', '45px 60px']}
      color="secondary"
      bg="navy"
      borderRadius={['4px', '0px']}
    >
      <div>
        <StyledHeadline
          m={0}
          fontSize={[3, 5]}
          fontWeight="regular"
          fontFamily="body"
          letterSpacing="-0.01em"
          lineHeight={['24.5px', '51.39px']}
        >
          {header}
        </StyledHeadline>
        <div>
          <StyledDescription
            fontSize={2}
            fontWeight="regular"
            fontFamily="headline"
            letterSpacing="-0.015em"
            lineHeight="26px"
          >
            {description}
          </StyledDescription>
        </div>
      </div>
      <StyledSection
        flexDirection={['column', 'row']}
        alignItems={['flex-start', 'center']}
        mt="20px"
      >
        <Button
          variant="solid"
          label={btnText}
          url={btnUrl}
          size="medium"
          arrow={true}
          arrowColor="white"
        />
        <Phone
          tel={phoneNumber}
          fontSize={2}
          fontWeight="regular"
          fontColor="secondary"
          hoverColor="black"
        />
      </StyledSection>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  ${flexbox}
  ${color}
  ${space}
   ${border}
`;

const StyledHeadline = styled.h1`
  ${typography}
  ${space}
`;

const StyledDescription = styled.h2`
  ${typography}
`;
const StyledSection = styled.div`
  display: flex;
  ${flexbox}
  gap: 20px;
  ${space}
`;
