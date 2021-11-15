import {ImageCarousel, ImageCarouselProps, ImageCarouselSlide} from '.';
import ImageCarouselBlockData from '@data/blocks/ImagesCarouselBlockData';
import {mapLink} from '@util/mapping';
import getImageUrl from '@util/images';

const _map = (block: ImageCarouselBlockData) => {
  const props: ImageCarouselProps = {
    slides: block.slides.map(function (slide) {
      return {
        backgroundImage: getImageUrl(slide.cover_image, 'max'),
        headline: slide.headline,
        description: slide.description,
        alt_text: slide.alt_text,
        cta: {link: mapLink(slide.cta), text: slide.cta_text},
      } as ImageCarouselSlide;
    }),
  };
  return <ImageCarousel key={block._key} {...props} />;
};

export default _map;
