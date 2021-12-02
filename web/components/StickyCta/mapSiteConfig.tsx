import {StickyCta, StickyCtaProps} from '.';
import {SiteConfig} from '@data/types';
import {mapLink} from '@util/mapping/index';

const _map = (siteConfig: SiteConfig) => {
  const props: StickyCtaProps = {
    visible: siteConfig.visible,
    label: siteConfig.label,
    url: mapLink({url: siteConfig.url}),
    source: siteConfig.source,
  };
  return <StickyCta {...props} />;
};

export default _map;
