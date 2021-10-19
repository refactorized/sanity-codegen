import {ImageCarousel, ImageCarouselProps, ImageCarouselSlide} from '.';
import ImageCarouselBlockData from '@data/blocks/ImagesCarouselBlockData';
import {mapLink} from '@util/mapping';

const _map = (block: ImageCarouselBlockData) => {
  const props: ImageCarouselProps = {
    slides: block.slides.map(function (slide) {
      return {
        backgroundImage: slide.cover_image?.asset.url || null,
        headline: slide.headline,
        description: slide.description,
        cta: {link: mapLink(slide.cta), text: slide.cta_text},
      } as ImageCarouselSlide;
    }),
  };
  return <ImageCarousel key={block._key} {...props} />;
};

export default _map;
