import {HomepageHero, HomepageHeroProps} from '.';
import HeroBlockData from '@data/blocks/HomepageHeroData';
import {Link} from '@schema/types';

const _map = (block: HeroBlockData) => {
  const props: HomepageHeroProps = {
    imageUrl: block.bgImage.asset.url,
    title: block.title,
    heroCards: block.hero_cards,
    // Placeholder, not sure if we need this data??
    admissionsText: '',
    admissionsUrl: '',
  };
  // console.log('props'); ///////////////////////////////////////////////////////////////////////////////////////////////
  return <HomepageHero key={block._key} {...props} />;
};

export default _map;
