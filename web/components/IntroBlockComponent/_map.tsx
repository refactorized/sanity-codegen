import {IntroBlock, IntroBlockProps} from '.';
import IntroBlockData from '@data/blocks/IntroBlockData';

const _map = (block: IntroBlockData) => {
  const props: IntroBlockProps = {
    description: block.body,
    btnText: block.buttonText,
    btnUrl: block.buttonLink.current,
  };
  return <IntroBlock key={block._key} {...props} />;
};

export default _map;
