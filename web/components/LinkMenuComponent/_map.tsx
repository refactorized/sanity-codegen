import {LinkMenuComponent, LinkMenuComponentProps} from '.';
import LinkMenuBlockData from '@data/blocks/LinkMenuBlockData';
import {mapLink} from '@util/mapping/index';
import getImageUrl from '@util/images';

const _map = (block: LinkMenuBlockData) => {
  const props: LinkMenuComponentProps = {
    imgUrl: getImageUrl(block.imgUrl, 'max'),
    header: block.header,
    description: block.description,
    alt_text: block.alt_text,
    btnText: block.btnText,
    btnUrl: mapLink(block.btnUrl),
    links: block.links.map((link) => ({
      title: link.title,
      url: mapLink(block.btnUrl),
      _key: link._key,
    })),
  };

  return <LinkMenuComponent key={block._key} {...props} />;
};

export default _map;
