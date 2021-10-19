import {ComboCardProps, ComboCard} from '.';
import ComboCardBlockData from '@data/blocks/ComboCardBlockData';
import {mapLink} from '@util/mapping';

const _map = (block: ComboCardBlockData) => {
  const props: ComboCardProps = {
    title: block.title,
    body: block.body,
    ctaText: block.ctaText,
    ctaLink: mapLink(block.ctaLink),
    cards: block.cards.map((card) => ({
      icon: card.icon?.asset.url || null,
      headline: card.headline,
      description: card.description,
    })),
  };

  return <ComboCard key={block._key} {...props} />;
};

export default _map;
