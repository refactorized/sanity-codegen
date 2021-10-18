import {ImageCarousel, ImageCarouselProps, ImageCarouselSlide} from '.';
import ImageCarouselBlockData from '@data/blocks/ImagesCarouselBlockData';

const _map = (block: ImageCarouselBlockData) => {
  const props: ImageCarouselProps = {
    slides: block.slides.map(function (slide) {
      return {
        backgroundImage: slide.cover_image ? slide.cover_image.asset.url : '',
        headline: slide.headline,
        description: slide.description,
        cta: {link: slide.cta ? slide.cta.url : '', text: slide.cta_text},
      } as ImageCarouselSlide;
    }),
  };
  return <ImageCarousel key={block._key} {...props} />;
};

export default _map;
