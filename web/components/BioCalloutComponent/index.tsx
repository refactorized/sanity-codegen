import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {fontSize, fontFamily, lineHeight, query, fontWeight} from '@theme/fn';

interface CardsProps {
  image?: string;
  credential?: string;
  name: string;
  alt_text?: string;
  bio: string;
}

export interface BioCalloutProps {
  headline: string;
  cards: CardsProps[];
}

export const BioCallout = ({headline, cards}: BioCalloutProps): JSX.Element => {
  return (
    <Container>
      <Headline>{headline}</Headline>
      {cards
        ? cards.map((card, index) => (
            <CardContainer key={index}>
              <div>
                {card.image ? (
                  <ImageContainer>
                    <Image
                      alt={card.alt_text}
                      src={card.image}
                      width={160}
                      height={250}
                      objectFit="cover"
                    />
                  </ImageContainer>
                ) : (
                  <ImageContainer>
                    <Image
                      alt="default avatar"
                      src="/avatar.jpg"
                      width={160}
                      height={250}
                      objectFit="cover"
                    />
                  </ImageContainer>
                )}
              </div>
              <div>
                <Header>
                  {card.name}
                  {card.credential ? (
                    <span>{', ' + card.credential}</span>
                  ) : null}
                </Header>
                <BioContainer>
                  <InformationDetail>{card.bio}</InformationDetail>
                </BioContainer>
              </div>
            </CardContainer>
          ))
        : 'you need to give this component data'}
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

const CardContainer = styled.div`
  padding-bottom: 60px;
  @media (${query.atLeast('tablet')}) {
    padding-bottom: 90px;
    display: flex;
    justify-content: center;
    gap: 25px;
  }
`;

const ImageContainer = styled.div`
  > div {
    display: block !important;
    /* I know this bang important is hideous and not best practice, 
    but next image doesn't seem to have a responsive feature for width  */
  }
`;

const InformationDetail = styled.p`
  ${fontFamily('body')};
  ${fontSize('md')};
  ${fontWeight('regular')};
  line-height: 21px;
  letter-spacing: -0.015em;
`;

const Header = styled(InformationDetail)`
  ${fontWeight('bold')};
  margin: 0;
  padding-top: 25px;

  @media (${query.atLeast('tablet')}) {
    padding-top: 0px;
  }
`;

const Headline = styled(Header)`
  font-size: 22px;
  padding-bottom: 25px;
  letter-spacing: -1;
`;

const BioContainer = styled.div`
  max-width: 650px;
  padding-top: 5px;
`;
