import {HomepageHero, HomepageHeroProps} from '.';
import HeroBlockData from '@data/blocks/HomepageHeroData';
import {Link} from '@schema/types';

const _map = (block: HeroBlockData) => {
  const props: HomepageHeroProps = {
    imageUrl: block.bgImage.asset.url,
    alt_text: block.alt_text,
    title: block.title,
    heroCards: block.hero_cards,
  };
  return <HomepageHero key={block._key} {...props} />;
};

export default _map;
