import GenericEmbed, {GenericEmbedProps} from '.';
import GenericEmbedBlockData from '@data/blocks/GenericEmbedBlockData';

const _map = (block: GenericEmbedBlockData) => {
  const props: GenericEmbedProps = {
    markup: block.markup || '',
  };

  return <GenericEmbed key={block._key} {...props} />;
};

export default _map;
