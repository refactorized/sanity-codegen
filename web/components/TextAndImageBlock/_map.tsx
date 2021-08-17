import {TextAndImageBlock, TextAndImageBlockProps} from '.';
import TextAndImageBlockData from '@data/blocks/TextAndImageBlockData';
import { Link } from '@studio/schemas/types'
import log from '@util/logging';

const linkUrl = (link: Link ) => {
return '#'; //TODO: implement
}


// TODO: rearrange data into single var
const _map = (block: TextAndImageBlockData) => {
  log.json(block);
  const props: TextAndImageBlockProps = {
    header: block.header,
    caption: block.body.toString(), // TODO: update
    subheader: block.subHeader,
    btnText: block.buttonText,
    btnUrl: block.buttonLink.,
    imgUrls: {
      desktop: '#',
      mobile: '#',
    },
  };
  return <TextAndImageBlock key={block._key} {...props} />;
};

export default _map;
 