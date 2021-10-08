import {AnnouncementBar, AnnouncementBarProps} from '.';
import {SiteConfig} from '@data/types';

// TODO: rearrange data into single var
const mapSiteConfig = (siteConfig: SiteConfig) => {
  const props: AnnouncementBarProps = {
    showAnnouncement: siteConfig.announcementBarShow,
    header: siteConfig.announcementBarMessage,
    cta: siteConfig.announcementBarCtaText,
    url: siteConfig.announcementBarCtaLink.slug.current,
  };
  return <AnnouncementBar {...props} />;
};

export default mapSiteConfig;
