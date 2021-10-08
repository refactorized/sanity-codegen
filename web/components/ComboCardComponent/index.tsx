import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  typography,
  flexbox,
  grid,
  layout,
  shadow,
  border,
} from 'styled-system';
import {Button} from '@components/Button';

interface ComboCard {
  headline: string;
  description: string;
  icon: string;
}

export interface ComboCardProps {
  title: string;
  body: string;
  cards: ComboCard[];
}

export const ComboCard = ({
  title,
  body,
  cards,
}: ComboCardProps): JSX.Element => {
  return (
    <StyledBox
      bg="#F7F3E8"
      p={['40px 20px', '41px 48px', '41px 48px', '80px 200px']}
    >
      <StyledBox display={['block', 'flex']} justifyContent="center">
        <StyledBox maxWidth={['inherit', null, null, '1040px']} width="100%">
          <StyledBox display={['block', 'grid']} gridTemplateColumns="74% 26%">
            <StyledBox pb={['10px', '40px']}>
              <StyledHeadline
                fontFamily="headline"
                fontSize={['30px', '43px']}
                fontStyle="normal"
                fontWeight="400"
                lineHeight={['36px', '51px']}
                letterSpacing="-0.01em"
                m="0"
              >
                {title}
              </StyledHeadline>
              <StyledParagraph
                fontFamily="body"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="26px"
                letterSpacing="-0.015em"
              >
                {body}
              </StyledParagraph>
            </StyledBox>
            <StyledBox
              display="flex"
              justifyContent={['flex-start', 'flex-end']}
              alignItems="center"
              pb={['40px', '0px']}
            >
              <Button
                variant="solid"
                label="Learn More"
                url="#"
                size="medium"
                arrow={true}
                arrowColor="white"
              />
            </StyledBox>
          </StyledBox>
          <StyledBox
            display="grid"
            gridTemplateColumns={[
              '100%',
              'repeat(2,1fr)',
              null,
              'repeat(4,1fr)',
            ]}
            gridGap="23px"
          >
            {cards.map((card, index) => (
              <CardContainer
                key={index}
                display="block"
                bg="#fff"
                color="#484848"
                boxShadow="0px 8px 15px 0px rgba(0, 0, 0, 0.1)"
                width="auto"
                height={['auto', null, null, 315]}
                p={['20px', '26px 32px', '15px 18px 40px 18px']}
                position="relative"
                borderRadius="4px"
              >
                <StyledBox
                  display="flex"
                  alignItems="center"
                  borderBottom="1px solid #ccc"
                  pb="15px"
                >
                  <Image
                    src={card.icon}
                    width="51px"
                    height="53px"
                    display="inline-block"
                  ></Image>

                  <StyledHeadline
                    fontFamily="body"
                    fontWeight="700"
                    lineHeight="22px"
                    letterSpacing="-0.015em"
                    fontSize="18px"
                    ml="15px"
                  >
                    {card.headline}
                  </StyledHeadline>
                </StyledBox>
                <StyledParagraph
                  fontSize="16px"
                  marginTop="20px"
                  fontFamily="body"
                  fontWeight="400"
                  lineHeight="26px"
                  letterSpacing="-0.015em"
                >
                  {card.description}
                </StyledParagraph>
              </CardContainer>
            ))}
          </StyledBox>
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  ${layout}
  ${flexbox}
  ${grid}
  ${color}
  ${typography}
  ${space}
  ${border}
`;

const CardContainer = styled.div`
  ${color}
  ${shadow}
  ${layout}
  ${space}
  ${border}
  box-sizing: border-box;
`;

const Image = styled.img`
  ${color}
  ${layout}
`;

const StyledHeadline = styled.h1`
  ${typography}
  ${space}
`;

const StyledParagraph = styled.p`
  ${typography}
  ${space}
`;
