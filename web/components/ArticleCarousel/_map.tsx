import {ArticleCarousel, ArticleCarouselProps, mapArticle} from '.';
import ArticleCarouselBlockData from '@data/blocks/ArticleCarouselBlockData';

const _map = (block: ArticleCarouselBlockData) => {
  console.log(block);
  const props: ArticleCarouselProps = {
    title: block.title,
    cards: block.selected_articles.map((article) => mapArticle(article)),
    categories: block.categories.map(function (category) {
      return category._id;
    }),
  };
  return <ArticleCarousel key={block._key} {...props} />;
};

export default _map;
