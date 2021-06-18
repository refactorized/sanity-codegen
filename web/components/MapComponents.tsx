import ProseBlock from './ProseBlock';

// Step one: make this file massive and put everything here
// Step two: divide and conquer
const MapComponents = ({blocks}: {blocks: PageBlock[]}) => {
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
