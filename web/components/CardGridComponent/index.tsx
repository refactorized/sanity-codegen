import {useState} from 'react';
import {text} from '@theme/variants/buttons';
import styled from 'styled-components';
import {TextAndImageBlock} from '@components/TextAndImageBlock';
import {CategoryBar, CategoryLink} from '@components/CategoryBarComponent';
import {ArticleCard} from '@components/Card';
import {query, color} from '@theme/fn';
import Block from '@components/Layout/Block';
import {Dropdown} from '@components/DropDownComponent';
import type {BasicText} from '@data/types';

interface TextAndImageBlockProps {
  header: string;
  imgUrls?: {
    desktop: string;
    mobile: string;
  };
  subheader: string;
  caption: BasicText;
  btnText?: string;
  btnUrl?: string;
}

interface ArticleCardProps {
  image: string;
  category: string;
  headline: string;
  date: string;
  description: string;
  url: string;
}

export interface CardGridProps {
  links: CategoryLink[];
  articleCardArr: ArticleCardProps[];
  textAndImageObject?: TextAndImageBlockProps;
}

export const CardGrid = ({
  links,
  articleCardArr,
  textAndImageObject,
}: CardGridProps): JSX.Element => {
  const [selected, setCategory] = useState(null);
  return (
    <Container>
      <Block>
        {textAndImageObject && (
          <TextAndImageBlock
            imgUrls={textAndImageObject.imgUrls}
            header={textAndImageObject.header}
            subheader={textAndImageObject.subheader}
            caption={textAndImageObject.caption}
            btnText={textAndImageObject.btnText}
            btnUrl={textAndImageObject.btnUrl}
          />
        )}
        <Padding>
          <DropdownContainer>
            <Dropdown linksList={links} setCategory={setCategory} />
          </DropdownContainer>
          <CategoryContainer>
            <CategoryBar links={links} setCategory={setCategory} />
          </CategoryContainer>
        </Padding>
        <StyledArticleContainer>
          {articleCardArr.map((obj, ind) => {
            if (obj.category && selected) {
              // TODO: Add solution that's less-harcodey
              if (
                selected === 'All Events' ||
                selected === 'All News' ||
                selected === 'All Resources'
              ) {
                return (
                  <ArticleCard
                    key={ind}
                    image={obj.image}
                    category={obj.category}
                    headline={obj.headline}
                    // date={obj.headline}
                    description={obj.description}
                    cardFullWidth={true}
                    url={obj.url}
                  />
                );
              } else if (selected === obj.category) {
                return (
                  <ArticleCard
                    key={ind}
                    image={obj.image}
                    category={obj.category}
                    headline={obj.headline}
                    // date={obj.headline}
                    description={obj.description}
                    cardFullWidth={true}
                    url={obj.url}
                  />
                );
              }
            } else if (obj.category && !selected) {
              return (
                <ArticleCard
                  key={ind}
                  image={obj.image}
                  category={obj.category}
                  headline={obj.headline}
                  // date={obj.headline}
                  description={obj.description}
                  cardFullWidth={true}
                  url={obj.url}
                />
              );
            }
          })}
        </StyledArticleContainer>
      </Block>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color('cream')};
`;

const StyledArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  @media (${query.atLeast('tablet')}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (${query.atLeast('desktop')}) {
    grid-template-columns: repeat(3, 1fr);
  } ;
`;

const Padding = styled.div`
  padding: 65px 0;
`;

const DropdownContainer = styled.div`
  @media (${query.atLeast('max')}) {
    display: none;
  } ;
`;

const CategoryContainer = styled.div`
  display: none;
  @media (${query.atLeast('max')}) {
    display: block;
  } ;
`;
