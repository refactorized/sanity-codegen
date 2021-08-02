import {LinkMenuComponent} from '.';
import LinkMenuBlockData from '@data/blocks/LinkMenuBlockData';
import testData from './testData';

// TODO: rearrange data into single var
const props = {
  imgUrl: '/link-menu-stub.jpg',
  header: testData.headline,
  description: testData.copy,
  btnText: testData.cta.title,
  btnUrl: testData.cta.slug.current,
  linkConfig: testData.linkConfig,
};

const _map = (block: LinkMenuBlockData) => (
  <LinkMenuComponent key={block._key} {...props} />
);

export default _map;
