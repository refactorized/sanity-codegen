import ProseBlock from './ProseBlock';
import config from '../../config';

// Step one: make this file massive and put everything here
// Step two: divide and conquer
const MapComponents = ({blocks}: {blocks: PageBlock[]}) => {
  if (!blocks?.length) {
    if (config.dev) {
      console.error('invalid or empty blocks passed to <MapComponents>', {
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
      return <ProseBlock key={block._key} block={block} />;
    }
    return <div>unknown block type</div>;
  });
  return <>{components}</>;
};

export default MapComponents;
