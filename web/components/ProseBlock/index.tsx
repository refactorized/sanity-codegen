import BlockContent from '@sanity/block-content-to-react';
import ProseBlockData from '../../data/blocks/ProseBlockData';
import Block from '../Layout/Block';

const ProseBlock = ({block}: {block: ProseBlockData}) => {
  return (
    <Block>
      <BlockContent blocks={block.content} />
    </Block>
  );
};

export default ProseBlock;

export const _map = (block: ProseBlockData) => (
  <ProseBlock key={block._key} block={block} />
);
