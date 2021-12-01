import styled from 'styled-components';
import {color, flexbox, typography, space, border, layout} from 'styled-system';
import {Phone} from '@components/PhoneComponent';
import {Button} from '@components/Button';
export interface PreFooterBlockProps {
  header: string;
  description: string;
  btnText: string;
  btnUrl: string;
  phoneNumber?: string;
}
import Block from '@components/Layout/Block';

export const PreFooterBlock = ({
  header = `Start the Admissions Process`,
  description = `From first contact to admissions consultation, let’s find out if we’re a good fit. `,
  btnText = `Contact Us`,
  btnUrl = `#`,
  phoneNumber,
}: PreFooterBlockProps): JSX.Element => {
  return (
    <Block>
      <StyledBox
        display="flex"
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        color="secondary"
        bg="navy"
        borderRadius={['4px', '0px']}
        p={['22px', '25px 29px', '45px 60px']}
      >
        <StyledBox display="flex" flexDirection="column">
          <StyledHeadline
            m={0}
            fontSize={['20px', '24px', '32px', '43px']}
            fontWeight="regular"
            fontFamily="headline"
            letterSpacing="-0.01em"
          >
            {header}
          </StyledHeadline>
          <div>
            <StyledDescription
              fontSize={['16px', '14px', '16px']}
              fontWeight="regular"
              fontFamily="body"
              letterSpacing="-0.015em"
              maxWidth={['300px', '280px', '370px', 'none']}
              m="5px 0"
            >
              {description}
            </StyledDescription>
          </div>
        </StyledBox>
        <StyledBoxEdit
          display="flex"
          flexDirection={['column', 'row']}
          alignItems={['flex-start', 'center']}
          gap="20px"
          mt={['20px', '0', null, null]}
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
        </StyledBoxEdit>
      </StyledBox>
    </Block>
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
  ${space}
`;
