import {PreFooterBlock, PreFooterBlockProps} from '.';
import PreFooterBlockData from '@data/blocks/PreFooterBlockData';
import {mapLink} from '@util/mapping/index';

const _map = (block: PreFooterBlockData) => {
  const props: PreFooterBlockProps = {
    header: block.header,
    description: block.description,
    btnText: block.btnText,
    btnUrl: mapLink(block.btnUrl),
    phoneNumber: block.phoneNumber,
  };
  return <PreFooterBlock key={block._key} {...props} />;
};

export default _map;
