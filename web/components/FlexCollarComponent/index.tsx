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
import Block from '@components/Layout/Block';

export interface flexCollarCard {
  category: string;
  header: string;
  image: string;
  // FIXME: we are not setting the url for the link in the component
  // implementation below, and when we do hook it up, it should probably be a slug
  // url: string; // this should
}

export interface FlexCollarProps {
  cards: flexCollarCard[];
}

export const FlexCollar = ({cards}: FlexCollarProps) => {
  return (
    <Block squish>
      <StyledBox display="flex" flexDirection={['column', 'row', null, null]}>
        {cards.map((card, index) => (
          <StyledBox
            display="flex"
            pr="5px"
            m={['20px 0', null, null, null]}
            key={index}
          >
            <Image
              p="0 15px"
              src={card.image}
              width={62}
              height={['62px', '67px', '62px', null]}
            />
            <StyledBox alignSelf="center">
              <StyledParagraph
                fontSize={['10px', null, null, '12px']}
                fontWeight="bold"
                fontFamily="headline"
                letterSpacing="0.185em"
                pb={['0px', '5px', null, null]}
                m="0"
              >
                {card.category}
              </StyledParagraph>
              <StyledLink textDecoration="none" p="0" m="0">
                <StyledHeader
                  fontSize={['14px', '12px', null, '16px']}
                  fontWeight="bold"
                  fontFamily="headline"
                  letterSpacing={['-0.01em', null, null, '-0.015em']}
                  lineHeight={['16px', '14px', null, '18px']}
                  color="navy"
                  m="0"
                >
                  {card.header}
                </StyledHeader>
              </StyledLink>
            </StyledBox>
          </StyledBox>
        ))}
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

const Image = styled.img`
  ${typography}
  ${space}
  ${layout}
  ${grid}
`;

const StyledLink = styled.a`
  ${typography}
  ${space}
  ${color}
  cursor: pointer;
`;

const StyledHeader = styled.h1`
  ${typography}
  ${space}
  ${color}
`;

const StyledParagraph = styled.p`
  ${typography}
  ${space}
`;
