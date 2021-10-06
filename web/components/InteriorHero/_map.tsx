import {InteriorHero, InteriorHeroProps} from '.';
import InteriorHeroData from '@data/blocks/InteriorHeroData';
import {mapLinks} from '@util/mapping';

const _map = (block: InteriorHeroData) => {
  const props: InteriorHeroProps = {
    header: block.header,
    caption: block.caption,
    imgUrls: {
      desktop: block.desktopImage?.asset.url || null,
      mobile: block.mobileImage?.asset.url || null,
    },
    videoSrc: mapLinks(block.videoSrc),
  };
  return <InteriorHero key={block._key} {...props} />;
};

export default _map;
