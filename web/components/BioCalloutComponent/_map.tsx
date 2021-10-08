import {BioCalloutProps, BioCallout} from '.';
import BioCalloutBlockData from '@data/blocks/BioCalloutBlockData';

const _map = (block: BioCalloutBlockData) => {
  const props: BioCalloutProps = {
    headline: block.headline,
    cards: block.cards.map((card) => ({
      image: card.image?.asset.url || null,
      name: card.name,
      credential: card.credential || null,
      bio: card.bio,
    })),
  };

  return <BioCallout key={block._key} {...props} />;
};

export default _map;
