import {ArticleCard, ArticleCardProps} from '../Card';
import Carousel from '@components/Carousel';
import client, {bigFetch} from '@data/sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import getImageUrl from '@util/images';
import {useEffect} from 'react';
import groq from 'groq';
import {useState} from 'react';

export interface ArticleCarouselProps {
  title: string;
  cards: ArticleCardProps[];
  categories: string[];
}

export const mapArticle = function (article) {
  switch (article._type) {
    case 'news':
      return {
        image: getImageUrl(article.image, 'crop', 362, 221),
        headline: article.headline,
        date: article.date,
        category: 'News',
        description: <BlockContent blocks={article.description} />,
        url: article.slug ? `/news/${article.slug.current}` : '#',
      } as ArticleCardProps;
    case 'resource':
      return {
        image: getImageUrl(article.image, 'crop', 362, 221),
        headline: article.headline,
        date: article.date,
        category: 'Resource',
        description: article.description,
        url: article.slug
          ? `/education-research/resources/${article.slug.current}`
          : '#',
      } as ArticleCardProps;
    case 'event':
      return {
        image: getImageUrl(article.image, 'crop', 362, 221),
        headline: article.headline,
        date: article.date,
        category: 'Event',
        description: <BlockContent blocks={article.description} />,
        url: article.slug ? `/events/${article.slug.current}` : '#',
      } as ArticleCardProps;
    default:
      return {} as ArticleCardProps;
  }
};

export const ArticleCarousel = ({
  title,
  cards,
  categories,
}: ArticleCarouselProps): JSX.Element => {
  const [categoryArticles, setCategoryArticles] = useState([]);
  const [combinedArticles, setCombinedArticles] = useState(cards);

  useEffect(() => {
    if (categories)
      Promise.all(
        categories.map((category) => {
          const query = groq`*[(_type== 'event' || _type== 'news' || _type== 'resource') && "${category}" in categories[]._ref][0...12] {
          _type,
          slug,
          'image': coalesce(image, mainImage),
          'date': coalesce(publishedAt, eventStart),
          'headline': coalesce(title, name),
          'description': shortDescription,
        }`;
          return bigFetch(query);
        }),
      ).then((values) => {
        setCategoryArticles(values);
      });
  }, [categories, setCategoryArticles]);

  useEffect(() => {
    if (categoryArticles.length > 0) {
      let mappedArticles = categoryArticles
        .reduce((arr, curr) => arr.concat(curr)) //combine all the category arrays into one
        .filter((val, i, curr) => curr.indexOf(val) === i) // remove duplicate articles
        .sort(function (a, b) {
          if (new Date(a._createdAt) < new Date(b._createdAt)) return -1;
          if (new Date(a._createdAt) > new Date(b._createdAt)) return 1;
          return 0;
        }) // sort by date
        .slice(0, 12 - cards.length) // only grab enough to fill a carousel with 12 cards max
        .map((article) => mapArticle(article)); // map to Component prop type

      setCombinedArticles(cards.concat(mappedArticles));
    }
  }, [categoryArticles]);

  const cardElements = combinedArticles.map(function (card) {
    return <ArticleCard {...card} />;
  });

  return <Carousel title={title} cards={cardElements} />;
};
