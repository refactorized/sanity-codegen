import {TextAndImageBlock} from '.';
import TextAndImageBlockData from '@data/blocks/TextAndImageBlockData';

import log from '@util/logging';

// TODO: rearrange data into single var
const props = {
  header: 'Fresh Insights and a Century of Expertise',
  imgUrls: {
    desktop: '/text-and-img-block.jpg',
    mobile: '/text-and-img-block.jpg',
  },
  subheader: 'Education & Research',
  caption:
    'The Erikson Institute for Education and Research of the Austen Riggs Center is about the advancement of knowledge. We host and attend conferences, workshops, lecture series, and events. The Institute also offers national and international professional education.',
  btnText: 'Learn More',
  btnUrl: '#',
};

const _map = (block: TextAndImageBlockData) => {
  log.json(block);
  return <TextAndImageBlock key={block._key} {...props} />;
};

export default _map;
