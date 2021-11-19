import styled from 'styled-components';
import {fontFamily, query, space} from '@theme/fn';
import Link from 'next/link';
import {GetStaticProps} from 'next';

import {getNewsPageData, getAllNews} from '@data/newsPage';
import getSiteConfig from '@data/siteConfig';
import ProseBlock from '@components/ProseBlock';
import Layout from '@components/Layout/Layout';
import Stretch from '@components/Layout/Stretch';
import Page from '@components/Page';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
import Navigation from '@components/Navigation/mapSiteConfig';
import {Footer} from '@components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';
import {Block} from '@components/Layout';

import {Breadcrumbs} from '@components/Breadcrumbs';
import {InteriorHero, InteriorHeroProps} from '@components/InteriorHero';

import {PreFooterBlock, PreFooterBlockProps} from '@components/PreFooterBlock';
import {CardGrid, CardGridProps} from '@components/CardGridComponent';

import {SanityKeyed, News, NewsPage, PostType} from '@schema/types';
import {ResolvedSanityReferences} from '@data/types';

// misc
import log from '@util/logging';

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
    const pageData = await getNewsPageData(preview);

    if (!pageData) {
      return {notFound: true};
    }

    const news = await getAllNews();

    const siteConfig = await getSiteConfig();
    return {
      props: {
        page: pageData,
        siteConfig: siteConfig,
        preview: !!preview,
        news,
      } as slugPageProps,
    };
  } catch (e) {
    log.error(e);
    throw e;
  }
};

// TYPES
type NewsPageData = SanityKeyed<ResolvedSanityReferences<NewsPage>>;
type NewsData = SanityKeyed<ResolvedSanityReferences<News>>;

export const MappedInteriorHero = (block: NewsPageData) => {
  const props: InteriorHeroProps = {
    header: block.interiorHero.header,
    caption: block.interiorHero.caption,
  };

  return <InteriorHero {...props} />;
};

export const MappedCardGrid = (props: {news: NewsData[]}) => {
  let postTypes = props.news
    .map((n, i) => ({
      id: i + 1,
      title: n.postType.title,
      link: '#',
    }))
    .filter(
      (thing, index, self) =>
        index ===
        self.findIndex(
          (t) => t.title === thing.title && t.title === thing.title,
        ),
    );

  postTypes.unshift({id: 0, title: 'All News', link: '#'});
  const propsToPass: CardGridProps = {
    links: postTypes,
    articleCardArr: props.news.map((n) => ({
      image: n.mainImage?.asset?.url || '',
      category: n.postType.title,
      headline: n.title,
      date: n.publishedAt,
      description: n.shortDescription,
      url: `/news/${n.slug.current}`,
    })),
  };

  return <CardGrid {...propsToPass} />;
};

export const MappedPreFooter = (block: NewsPageData) => {
  const props: PreFooterBlockProps = {
    header: block.preFooter.header,
    description: block.preFooter.description,
    btnText: block.preFooter.btnText,
    btnUrl: block.preFooter.btnUrl.slug.current,
  };
  return <PreFooterBlock {...props} />;
};

const NewsIndexPage = (props) => {
  const {page, resources} = props;

  // BREADCRUMB DATA
  const breadcrumbPages = [
    {
      title: 'News',
      slug: {current: '/news'},
    },
  ];

  return (
    <Page>
      <Layout>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <Navigation {...(props.siteConfig as SiteConfig)} />
        <Breadcrumbs pages={breadcrumbPages} />
        <MappedInteriorHero {...page} />
        <MappedCardGrid {...props} />
        <MappedPreFooter {...page} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default NewsIndexPage;
