import {Navigation, NavigationProps} from '.';
import {SiteConfig} from '@data/types';
import {mapLink} from '@util/mapping/index';
// TODO: rearrange data into single var
const mapSiteConfig = (siteConfig: SiteConfig) => {
  const props: NavigationProps = {
    phone: siteConfig.phoneNumber,
    featuredLink: {
      label: siteConfig.featuredLinkLabel,
      url: mapLink(siteConfig.featuredLinkUrl),
    },
    logInLink: {
      label: siteConfig.logInLinkLabel,
      url: mapLink(siteConfig.logInLinkUrl),
    },
    registerLink: {
      label: siteConfig.registerLink,
      url: mapLink(siteConfig.registerUrl),
    },
    links: siteConfig.navConfig.navLists,
  };
  return <Navigation {...props} />;
};

export default mapSiteConfig;

// links: siteConfig.navConfig.navList.map((link) => ({
//   title: link.title,
//   url: mapLink(link.link),
// })),
