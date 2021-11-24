import {StickyCta, StickyCtaProps} from '.';
import StickyCtaBlockData from '@data/blocks/StickyCtaBlockData';
import {mapLink} from '@util/mapping/index';

const _map = (block: StickyCtaBlockData) => {
  const props: StickyCtaProps = {
    visible: block.visible,
    label: block.label,
    url: mapLink(block.url),
    source: block.source,
  };
  return <StickyCta key={block._key} {...props} />;
};

export default _map;
