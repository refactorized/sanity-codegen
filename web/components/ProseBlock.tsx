const BlockContent = require('@sanity/block-content-to-react');

// todo: this is comfusing, rename either the type or the component
const ProseBlock = ({block}: {block: ProseBlock}) => {
  return <BlockContent blocks={block.content} />;
};
export default ProseBlock;
