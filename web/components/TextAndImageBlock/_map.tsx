import {TextAndImageBlock, TextAndImageBlockProps} from '.';
import TextAndImageBlockData from '@data/blocks/TextAndImageBlockData';
import {Link} from '@schema/types';
import log from '@util/logging';

const linkUrl = (link: Link) => {
  return '#'; //TODO: implement
};

// TODO: rearrange data into single var
const _map = (block: TextAndImageBlockData) => {
  const props: TextAndImageBlockProps = {
    header: block.header || null,
    caption: block.body, // TODO: update
    subheader: block.subHeader || null,
    btnText: block.buttonText,
    btnUrl: '#',
    imgUrls: {
      desktop: block.desktopImage.asset.url,
      mobile: block.mobileImage?.asset.url || null,
    },
  };
  return <TextAndImageBlock key={block._key} {...props} />;
};

export default _map;
