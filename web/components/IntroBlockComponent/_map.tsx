import {IntroBlock, IntroBlockProps} from '.';
import IntroBlockData from '@data/blocks/IntroBlockData';
import {mapLink} from '@util/mapping/index';

const _map = (block: IntroBlockData) => {
  const props: IntroBlockProps = {
    description: block.body,
    btnText: block.buttonText,
    btnUrl: mapLink({slug: block.buttonLink}), // wrap to emulate new link type.
  };
  return <IntroBlock key={block._key} {...props} />;
};

export default _map;
