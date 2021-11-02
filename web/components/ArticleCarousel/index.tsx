import {ArticleCard, ArticleCardProps} from '../Card';
import Carousel from '@components/Carousel';
import client, {bigFetch} from '@data/sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
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
        image: article.mainImage.asset.url,
        headline: article.title,
        date: article.publishedAt,
        category: 'News',
        description: <BlockContent blocks={article.shortDescription} />,
      } as ArticleCardProps;
    case 'resource':
      return {
        image: article.mainImage.asset.url,
        headline: article.title,
        date: article.publishedAt,
        category: 'Resource',
        description: article.shortDescription,
      } as ArticleCardProps;
    case 'event':
      return {
        image: article.image.asset.url,
        headline: article.name,
        date: article.eventStart,
        category: 'Event',
        description: <BlockContent blocks={article.shortDescription} />,
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
  const [combinedArticles, setCombinedArticles] = useState([]);

  useEffect(() => {
    Promise.all(
      categories.map((category) => {
        console.log(category, 'category');
        const query = groq`*[(_type== 'event' || _type== 'news' || _type== 'resource') && "${category}" in categories[]._ref][0...12] { ... }`;
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
