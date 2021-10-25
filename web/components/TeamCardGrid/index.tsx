import styled from 'styled-components';

import {space, query, fontSize, fontFamily, fontWeight} from '../../themes/fn';

import {TeamCard, TeamCardProps} from '@components/Card/TeamCard';
import {Block} from '@components/Layout';

export interface TeamCardGridProps {
  header: string;
  cards: TeamCardProps[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: ${space('md')};
  grid-row-gap: ${space('lg')};

  @media screen and (${query.atLeast('tablet')}) {
    grid-row-gap: ${space('x10')};
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (${query.atLeast('desktop')}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Header = styled.h2`
  ${fontFamily('headline')};
  ${fontSize('x5')};
  margin-bottom: ${space('lg')};

  @media screen and (${query.atLeast('tablet')}) {
    ${fontSize('x6')};
  }
`;

const NoCardsFound = styled.h3`
  ${fontFamily('body')};
  ${fontSize('xl')};
  ${fontWeight('regular')};

  @media screen and (${query.atLeast('tablet')}) {
    ${fontSize('x5')};
  }
`;

export const TeamCardGrid = ({
  header,
  cards,
}: TeamCardGridProps): JSX.Element => {
  return (
    <Block>
      <Header>{header}</Header>
      <Wrapper>
        {cards.length > 0 ? (
          cards.map((card, index) => {
            return (
              <TeamCard
                key={index}
                name={card.name}
                title={card.title}
                image={card.image}
                phone={card.phone}
                email={card.email}
                url={card.url}
                categories={card.categories}
                subcategories={card.subcategories}
              />
            );
          })
        ) : (
          <NoCardsFound>No results available.</NoCardsFound>
        )}
      </Wrapper>
    </Block>
  );
};
