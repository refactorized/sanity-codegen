import React, {useState} from 'react';
import styled from 'styled-components';
import {
  color,
  flexbox,
  typography,
  space,
  border,
  layout,
  grid,
} from 'styled-system';
import {Button} from '../Button';
import {Close} from '../NavSvgComponent';

export interface AnnouncementBarProps {
  header: string;
  cta?: string;
  url?: string;
}

export const AnnouncementBar = ({
  header = `Announcement goes here tortor neque dictum tortor nec odio massa eget at amet phasellus.`,
  cta = `Read More`,
  url = `#`,
}: AnnouncementBarProps): JSX.Element => {
  const [showAnnouncement, hideAnnouncement] = React.useState(true);
  const onClick = () => hideAnnouncement(false);

  return (
    <>
      {showAnnouncement ? (
        <StyledContainer
          bg="navy"
          display="grid"
          gridTemplateColumns="1fr 50px"
          alignItems="center"
        >
          <StyledBox
            color="secondary"
            p={['12px 15px', null, '12px 24px', '26px']}
            textAlign="center"
          >
            <StyledParagraph
              m={0}
              display="inline-block"
              verticalAlign="middle"
              fontSize={['14px', null, null, '16px']}
              fontWeight="bold"
              fontFamily="body"
              lineHeight={['17px', null, null, '19px']}
            >
              {header}
            </StyledParagraph>
            <StyledButtonContainer
              display="inline-block"
              verticalAlign="middle"
              pl="20px"
            >
              <Button
                variant="text"
                label={cta}
                url={url}
                size="medium"
                arrow={true}
                arrowColor="white"
              />
            </StyledButtonContainer>
          </StyledBox>

          <StyledButton onClick={onClick} p="0" border="none" background="none">
            <Close color="white" size="25px" />
          </StyledButton>
        </StyledContainer>
      ) : null}
    </>
  );
};
const StyledContainer = styled.div`
  ${layout}
  ${color}
  ${grid}
`;

const StyledBox = styled.div`
  ${space}
  ${color}
  ${typography}
`;

const StyledButtonContainer = styled.div`
  ${layout}
  ${space}
  div {
    justify-content: center;
    align-self: center;
  }
`;

const StyledParagraph = styled.p`
  ${layout}
  ${typography}
  ${space}
`;

const StyledButton = styled.button`
  ${border}
  ${space}

  /* Styled Systems don't support these stylings */
  background: none;
  cursor: pointer;
`;
