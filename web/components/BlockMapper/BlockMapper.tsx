import {_map as mapProseBlock} from '@components/ProseBlock/';
import config from '@cfg';
import log from '@util/logging';
import {AnyBlockData} from '@data/blocks/AnyBlockData';

const MapComponents = ({blocks}: {blocks: AnyBlockData[]}) => {
  if (!blocks?.length) {
    if (config.dev) {
      log.error('invalid or empty blocks passed to <MapComponents>', {
        blocks,
      });
    }
    return null;
  }
  const components = blocks.map((block) => {
    if (block.blockType === 'placeholder') {
      return <div key={block._key}>{block.text}</div>;
    }
    if (block.blockType === 'prose') {
      return mapProseBlock(block);
    }
    return <div>unknown block type</div>;
  });
  return <>{components}</>;
};

export default MapComponents;
