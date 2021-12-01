import {GetStaticProps} from 'next';

import {getEventPageData, getAllEvents} from '@data/eventPage';
import getSiteConfig from '@data/siteConfig';
import Layout from '@components/Layout/Layout';
import Stretch from '@components/Layout/Stretch';
import Page from '@components/Page';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
import StickyCta from '@components/StickyCta/mapSiteConfig';
import Navigation from '@components/Navigation/mapSiteConfig';
import {Footer} from '@components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';

import {Breadcrumbs} from '@components/Breadcrumbs';
import {InteriorHero, InteriorHeroProps} from '@components/InteriorHero';
import {
  TextAndImageBlock,
  TextAndImageBlockProps,
} from '@components/TextAndImageBlock';
import {PreFooterBlock, PreFooterBlockProps} from '@components/PreFooterBlock';
import {CardGrid, CardGridProps} from '@components/CardGridComponent';
import type {BasicText} from '@data/types';

import {SanityKeyed, Event, EventPage} from '@schema/types';
import {ResolvedSanityReferences} from '@data/types';

// misc
import log from '@util/logging';
import {RenderBasicText} from '@components/PortableText';

export interface slugPageContext {
  params: {
    // because this is an _optional_ catch-all page, next will usually set this
    // to an array of path segments. But for the root path, it isn't set at all.
    slug?: string;
  };
  preview?: boolean;
}

export interface slugPageProps {
  page: PageDocument;
  siteConfig: SiteConfig;
  preview?: boolean;
}

export const getStaticProps: GetStaticProps = async (
  context: slugPageContext,
) => {
  const {preview} = context;
  // if params.slug is missing this is the root, re-map to home

  try {
    const pageData = await getEventPageData(preview);

    if (!pageData) {
      return {notFound: true};
    }

    const events = await getAllEvents();

    const siteConfig = await getSiteConfig();
    return {
      props: {
        page: pageData,
        siteConfig: siteConfig,
        preview: !!preview,
        events,
      } as slugPageProps,
    };
  } catch (e) {
    log.error(e);
    throw e; // best way to get 500 page?
  }
};

// TYPES
type EventPageData = SanityKeyed<ResolvedSanityReferences<EventPage>>;
type EventData = ResolvedSanityReferences<Event>;

export const MappedInteriorHero = (block: EventPageData) => {
  const props: InteriorHeroProps = {
    header: block.interiorHero.header,
    caption: block.interiorHero.caption,
  };

  return <InteriorHero {...props} />;
};

export const MappedFeaturedEvent = (block: EventPageData) => {
  const props: TextAndImageBlockProps = {
    altBg: true,
    header: 'Featured',
    subheader: block.featuredEvent.eventCategory
      ? block.featuredEvent.eventCategory.name
      : 'Events',
    secondHeader: block.featuredEvent.name,
    caption: block.featuredEvent.shortDescription as BasicText,
    imgUrls: {
      desktop: block.featuredEvent.image
        ? block.featuredEvent.image.asset.url
        : '',
    },
    btnText: 'Read More',
    btnUrl: `/events/${block.featuredEvent.slug.current}`,
    reverse: false,
  };

  return <TextAndImageBlock {...props} />;
};

export const MappedCardGrid = (props: {events: EventData[]}) => {
  let eventTypes = props.events
    .map((t, i) => ({
      id: i + 1,
      title: t.eventCategory ? t.eventCategory.name : 'Events',
      link: '#',
    }))
    .filter(
      (thing, index, self) =>
        index ===
        self.findIndex(
          (t) => t.title === thing.title && t.title === thing.title,
        ),
    );

  eventTypes.unshift({id: 0, title: 'All Events', link: '#'});
  const propsToPass: CardGridProps = {
    links: eventTypes,
    articleCardArr: props.events.map((e) => ({
      image: e.image ? e.image.asset.url : '',
      category: e.eventCategory ? e.eventCategory.name : 'Events',
      headline: e.name ? e.name : 'Event Name',
      date: e.eventStart ? e.eventStart : '',
      description: e.shortDescription ? (
        <RenderBasicText content={e.shortDescription} />
      ) : (
        ''
      ),
      url: e.slug ? `/events/${e.slug.current}` : `/events/`,
    })),
  };

  return <CardGrid {...propsToPass} />;
};

export const MappedTextAndImageBlockOne = (block: EventPageData) => {
  const props: TextAndImageBlockProps = {
    subheader: block.textAndImageBlockOne.subHeader,
    caption: block.textAndImageBlockOne.body,
    imgUrls: {
      desktop: block.textAndImageBlockOne.desktopImage.asset.url,
    },
    btnText: block.textAndImageBlockOne.buttonText,
    btnUrl: block.textAndImageBlockOne.buttonLink.slug.current,
    reverse: block.textAndImageBlockOne.reverse,
  };

  return <TextAndImageBlock {...props} />;
};

export const MappedTextAndImageBlockTwo = (block: EventPageData) => {
  const props: TextAndImageBlockProps = {
    subheader: block.textAndImageBlockTwo.subHeader,
    caption: block.textAndImageBlockTwo.body,
    imgUrls: {
      desktop: block.textAndImageBlockTwo.desktopImage.asset.url,
    },
    btnText: block.textAndImageBlockTwo.buttonText,
    btnUrl: block.textAndImageBlockTwo.buttonLink.slug.current,
    reverse: block.textAndImageBlockTwo.reverse,
  };

  return <TextAndImageBlock {...props} />;
};

export const MappedPreFooter = (block: EventPageData) => {
  const props: PreFooterBlockProps = {
    header: block.preFooter.header,
    description: block.preFooter.description,
    btnText: block.preFooter.btnText,
    btnUrl: block.preFooter.btnUrl.slug.current,
  };
  return <PreFooterBlock {...props} />;
};

const EventIndexPage = (props) => {
  const {page, events} = props;

  // BREADCRUMB DATA
  const breadcrumbPages = [
    {
      title: page.title,
      slug: {current: '/events'},
    },
  ];

  return (
    <Page>
      <Layout>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <StickyCta {...(props.siteConfig as SiteConfig)} />
        <Navigation {...(props.siteConfig as SiteConfig)} />
        <Breadcrumbs pages={breadcrumbPages} />
        <MappedInteriorHero {...page} />
        <MappedFeaturedEvent {...page} />
        <MappedCardGrid {...props} />
        <MappedTextAndImageBlockOne {...page} />
        <MappedTextAndImageBlockTwo {...page} />
        <MappedPreFooter {...page} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default EventIndexPage;
