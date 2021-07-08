import BlockContent from '@sanity/block-content-to-react';
import Block from './Layout/Block';

// todo: this is comfusing, rename either the type or the component
const ProseBlock = ({block}: {block: ProseBlock}) => {
  return (
    <Block>
      <BlockContent blocks={block.content} />
    </Block>
  );
};
export default ProseBlock;
