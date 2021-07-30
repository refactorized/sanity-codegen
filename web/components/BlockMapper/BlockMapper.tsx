import {_map as mapProseBlock} from '../ProseBlock/';
import config from '../../../config';
import log from '../../util/logging';
import type {AnyBlockData} from '../../data/blocks/AnyBlockData';

// Step one: make this file massive and put everything here
// Step two: divide and conquer
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
