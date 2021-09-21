import styled from 'styled-components';
import {useReducer} from 'react';

import {space, query, fontSize, fontFamily} from '../../themes/fn';

import {TeamCard, TeamCardProps} from '@components/Card/TeamCard';
import {Block} from '@components/Layout';

export interface TeamCardGridProps {
  header: string;
  cards: TeamCardProps[];
  category: string;
  subcategory: string;
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

export const TeamCardGrid = ({
  header,
  cards,
  category,
  subcategory,
}: TeamCardGridProps): JSX.Element => {
  return (
    <Block>
      <Header>{category === '' ? header : category}</Header>
      <Wrapper>
        {cards.map((card, index) => {
          if (
            // No Category is selected
            // TODO in parent: subcategory should automatically be blank
            // when category is blank
            (category === '' && subcategory === '') ||
            // Matches category
            card.categories.some((c) => c === category) ||
            // Matchs subcategory
            card.subcategories.some((c) => c === subcategory)
          ) {
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
          }
        })}
      </Wrapper>
    </Block>
  );
};
