import {IntroBlock} from '.';
import IntroBlockData from '@data/blocks/IntroBlockData';

// TODO: rearrange data into single var
const props = {
  description: `Nestled in the Berkshires, the Austen Riggs Center is unlike most mental health treatment centers. Here in our open setting in western Massachusetts, you’ll find the space and support you need to understand your problems, find your voice, and make your way forward.
  `,
  btnText: 'Learn About Us',
  btnUrl: '#',
};

const _map = (block: IntroBlockData) => (
  <IntroBlock key={block._key} {...props} />
);

export default _map;
