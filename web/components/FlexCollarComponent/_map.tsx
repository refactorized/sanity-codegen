import {FlexCollar, FlexCollarProps, flexCollarCard} from '.';
import FlexCollarBlockData from '@data/blocks/FlexCollarBlockData';

const _map = (block: FlexCollarBlockData) => {
  const cards = block.cards.map(
    (card) =>
      ({
        header: card.pageInfo.title,
        category: card.pageInfo.category?.title || 'Austen Riggs',
        image: card.pageInfo.openGraphImage?.asset?.url || null
      } as flexCollarCard),
  );
  return <FlexCollar {...{key: block._key, cards}}  />;
};

export default _map;
