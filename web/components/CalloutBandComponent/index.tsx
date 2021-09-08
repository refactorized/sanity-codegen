import styled from 'styled-components';
import {color, flexbox, typography, space, border, layout} from 'styled-system';
import {Phone} from '@components/PhoneComponent';
import {Button} from '@components/Button';
export interface CalloutBandProps {
  header: string;
  description: string;
  btnText: string;
  btnUrl: string;
}

export const CalloutBand = ({
  header = 'Your Treatment Experience',
  description = 'While your treatment will reflect your own choices, all of our residential treatment programs start with intensive psychotherapy as the core, and include a range of complementary elements. ',
  btnText = 'Your Treatment Experience',
  btnUrl = `#`,
}: CalloutBandProps): JSX.Element => {
  return (
    <>
      <StyledBox
        display="flex"
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        color="primary"
        bg="#E1E9ED"
        p={['22px', '55px 48px', null, '60px 85px']}
      >
        <div>
          <StyledHeadline
            m={0}
            fontSize={['30px', null, '44px']}
            fontWeight="regular"
            fontFamily="headline"
            letterSpacing="-0.01em"
            lineHeight={['34px', '24.5px', '51.39px']}
          >
            {header}
          </StyledHeadline>
          <div>
            <StyledDescription
              fontSize="16px"
              fontWeight="regular"
              fontFamily="body"
              letterSpacing="-0.015em"
              lineHeight="26px"
              maxWidth={['inherit', '400px', '700px', '800px']}
            >
              {description}
            </StyledDescription>
          </div>
        </div>
        <StyledBoxEdit
          display="flex"
          flexDirection={['column', 'row']}
          alignItems={['flex-start', 'center']}
          gap="20px"
          my="25px"
        >
          <Button
            variant="solid"
            label={btnText}
            url={btnUrl}
            size="medium"
            arrow={true}
            arrowColor="white"
          />
        </StyledBoxEdit>
      </StyledBox>
    </>
  );
};

const StyledBox = styled.div`
  ${layout}
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
  gap: 20px;
`;

const StyledHeadline = styled.h1`
  ${typography}
  ${space}
`;

const StyledDescription = styled.h2`
  ${typography}
  ${layout}
`;
