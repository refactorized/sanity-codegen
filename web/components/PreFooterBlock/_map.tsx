import {PreFooterBlock, PreFooterBlockProps} from '.';
import PreFooterBlockData from '@data/blocks/PreFooterBlockData';

const _map = (block: PreFooterBlockData) => {
  const props: PreFooterBlockProps = {
    header: block.header,
    description: block.description,
    btnText: block.btnText,
    btnUrl: block.btnUrl.slug ? block.btnUrl.slug.current : block.btnUrl.url,
    phoneNumber: block.phoneNumber,
  };
  return <PreFooterBlock key={block._key} {...props} />;
};

export default _map;
