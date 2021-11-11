import {TextAndImageBlock, TextAndImageBlockProps} from '.';
import TextAndImageBlockData from '@data/blocks/TextAndImageBlockData';
import {Link} from '@schema/types';
import {mapLink} from '@util/mapping/index';
import getImageUrl from '@util/images';

const linkUrl = (link: Link) => {
  return '#'; //TODO: implement
};

const _map = (block: TextAndImageBlockData) => {
  const props: TextAndImageBlockProps = {
    header: block.header || null,
    subheader: block.subHeader || null,
    caption: block.body,
    btnText: block.buttonText || null,
    btnUrl: mapLink(block.buttonLink) || null,
    imgUrls: {
      desktop: getImageUrl(block.desktopImage, 'max'),
      mobile: block.mobileImage ? getImageUrl(block.mobileImage, 'max') : null,
    },
    reverse: block.reverse,
  };
  return <TextAndImageBlock key={block._key} {...props} />;
};

export default _map;
