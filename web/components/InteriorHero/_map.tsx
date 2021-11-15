import {InteriorHero, InteriorHeroProps} from '.';
import InteriorHeroData from '@data/blocks/InteriorHeroData';
import {mapLink} from '@util/mapping';
import getImageUrl from '@util/images';

const _map = (block: InteriorHeroData) => {
  const props: InteriorHeroProps = {
    header: block.header,
    caption: block.caption,
    alt_text: block.alt_text,
    imgUrls: {
      desktop: getImageUrl(block.desktopImage, 'max'),
      mobile: getImageUrl(block.mobileImage, 'max'),
    },
    videoSrc: mapLink(block.videoSrc) || null,
  };
  return <InteriorHero key={block._key} {...props} />;
};

export default _map;
