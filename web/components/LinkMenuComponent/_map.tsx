import {LinkMenuComponent, LinkMenuComponentProps} from '.';
import LinkMenuBlockData from '@data/blocks/LinkMenuBlockData';

const _map = (block: LinkMenuBlockData) => {
  const props: LinkMenuComponentProps = {
    imgUrl: block.imgUrl.asset.url,
    header: block.header,
    description: block.description,
    btnText: block.btnText,
    btnUrl: block.btnUrl.slug ? block.btnUrl.slug.current : block.btnUrl.url,
    links: block.links.map((link) => ({
      title: link.title,
      url: link.url.slug ? link.url?.slug?.current : link.url?.url || '',
      _key: link._key,
    })),
  };

  return <LinkMenuComponent key={block._key} {...props} />;
};

export default _map;
