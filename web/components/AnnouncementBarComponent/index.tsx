import {Block} from '@components/Layout';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {color, typography, space, border, layout, grid} from 'styled-system';
import {Button} from '../Button';
import {Close} from '../NavSvgComponent';

export interface AnnouncementBarProps {
  showAnnouncement: boolean;
  header: string;
  cta?: string;
  url?: string;
}

export const AnnouncementBar = ({
  showAnnouncement,
  header,
  cta,
  url,
}: AnnouncementBarProps): JSX.Element => {
  const [showAnnouncementBar, setShowAnnouncementBar] =
    useState(showAnnouncement);
  const onClick = () => {
    // Hide announcement bar
    setShowAnnouncementBar(false);

    // ...and set localStorage key with announcement bar value.
    // This will be used below.
    localStorage.setItem('announcementBarMessage', header);
  };

  useEffect(() => {
    // Check if "announcementBarMessage" cookie exists
    // and is the same message as when the announcement bar was closed (for 100 days).
    const prevMessage = localStorage.getItem('announcementBarMessage');

    // If it exists and the messages match, don't display announcement bar.
    prevMessage && prevMessage === header
      ? setShowAnnouncementBar(false)
      : setShowAnnouncementBar(true);
  }, []);

  return (
    <Block full>
      {showAnnouncementBar ? (
        <StyledContainer
          bg="navy"
          display="grid"
          gridTemplateColumns="1fr 50px"
          alignItems="center"
          p={['0', '0 65px']}
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
    </Block>
  );
};
const StyledContainer = styled.div`
  ${layout}
  ${color}
  ${grid}
  ${space}
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
