import {PreFooterBlock, PreFooterBlockProps} from '.';
import PreFooterBlockData from '@data/blocks/PreFooterBlockData';

const props: PreFooterBlockProps = {
  header: 'Start the Admissions Process',
  description:
    'From first contact to admissions consultation, let’s find out if we’re a good fit. ',
  btnText: 'Contact Us',
  btnUrl: '#',
  phoneNumber: '866-255-1921',
};

const _map = (block: PreFooterBlockData) => (
  <PreFooterBlock key={block._key} {...props} />
);

export default _map;
