import {BioCalloutProps, BioCallout} from '.';
import BioCalloutBlockData from '@data/blocks/BioCalloutBlockData';

const _map = (block: BioCalloutBlockData) => {
  const props: BioCalloutProps = {
    headline: block.headline,
    cards: block.cards.map((card) => ({
      image: card.image?.asset.url || null,
      //Optional chaining operator,
      //Javascript is very Dynamic and Friendly
      //Problem comes when block.image, if image is undefined,
      //when we say block.image.asset, the asset will be attached
      // to an undefined asset. Adding the optional chain
      //operator will tell it that it's optional and that not look for
      //asset and url
      name: card.name,
      credential: card.credential || null,
      bio: card.bio,
    })),
  };

  return <BioCallout key={block._key} {...props} />;
};

export default _map;
