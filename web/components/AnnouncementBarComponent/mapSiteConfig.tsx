import {AnnouncementBar, AnnouncementBarProps} from '.';
import {SiteConfig} from '@data/types';
import {mapLink} from '@util/mapping/';

// TODO: rearrange data into single var
const mapSiteConfig = (siteConfig: SiteConfig) => {
  const props: AnnouncementBarProps = {
    showAnnouncement: siteConfig.announcementBarShow,
    header: siteConfig.announcementBarMessage,
    cta: siteConfig.announcementBarCtaText,
    url: mapLink(siteConfig.announcementBarCtaLink),
  };
  return <AnnouncementBar {...props} />;
};

export default mapSiteConfig;
