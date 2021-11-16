import {HomepageHero, HomepageHeroProps} from '.';
import HeroBlockData from '@data/blocks/HomepageHeroData';
import {Link} from '@schema/types';
import {mapLink} from '@util/mapping';

const _map = (block: HeroBlockData) => {
  const props: HomepageHeroProps = {
    imageUrl: block.bgImage.asset.url,
    alt_text: block.alt_text,
    title: block.title,
    heroCards: block.hero_cards,
    videoSrc: block.videoSrc ? mapLink(block.videoSrc.asset) || null : null,
  };
  return <HomepageHero key={block._key} {...props} />;
};

export default _map;
