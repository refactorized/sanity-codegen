import styled from 'styled-components';
import {fontFamily, query, space} from '@theme/fn';
import Link from 'next/link';
import {GetStaticProps} from 'next';

import {getResourcePageData, getAllResources} from '@data/resourcePage';
import getSiteConfig from '@data/siteConfig';
import Layout from '@components/Layout/Layout';
import Stretch from '@components/Layout/Stretch';
import Page from '@components/Page';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
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
import {
  ArticleCarousel,
  ArticleCarouselProps,
  mapArticle,
} from '@components/ArticleCarousel';

import {SanityKeyed, Resource, ResourcePage} from '@schema/types';
import {ResolvedSanityReferences} from '@data/types';

// misc
import log from '@util/logging';
import {mapLink} from '@util/mapping';

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
    const pageData = await getResourcePageData(preview);

    if (!pageData) {
      return {notFound: true};
    }

    const resources = await getAllResources();

    const siteConfig = await getSiteConfig();
    return {
      props: {
        page: pageData,
        siteConfig: siteConfig,
        preview: !!preview,
        resources,
      } as slugPageProps,
    };
  } catch (e) {
    log.error(e);
    throw e; // best way to get 500 page?
  }
};

// TYPES
type ResourcePageData = SanityKeyed<ResolvedSanityReferences<ResourcePage>>;
type ResourceData = SanityKeyed<ResolvedSanityReferences<Resource>>;

export const MappedInteriorHero = (block: ResourcePageData) => {
  const props: InteriorHeroProps = {
    header: block.interiorHero.header,
    caption: block.interiorHero.caption,
  };

  return <InteriorHero {...props} />;
};

export const MappedFeaturedResource = (block: ResourcePageData) => {
  const props: TextAndImageBlockProps = {
    altBg: true,
    header: 'Featured',
    subheader: block.featuredResource.resourceType.title,
    secondHeader: block.featuredResource.title,
    caption: block.featuredResource.shortDescription,
    imgUrls: {
      desktop: block.featuredResource.mainImage.asset.url,
    },
    btnText: 'Read More',
    btnUrl: mapLink(block.featuredResource.slug),
    reverse: false,
  };

  return <TextAndImageBlock {...props} />;
};

export const MappedCardGrid = (props: {resources: ResourceData[]}) => {
  let resourceTypes = props.resources
    .map((t, i) => ({
      id: i + 1,
      title: t.resourceType.title,
      link: '#',
    }))
    .filter(
      (thing, index, self) =>
        index ===
        self.findIndex(
          (t) => t.title === thing.title && t.title === thing.title,
        ),
    );

  resourceTypes.unshift({id: 0, title: 'All Resources', link: '#'});
  const propsToPass: CardGridProps = {
    links: resourceTypes,
    articleCardArr: props.resources.map((r) => ({
      image: r.mainImage.asset.url,
      category: r.resourceType.title,
      headline: r.title,
      date: r.publishedAt,
      description: r.shortDescription,
      url: `/education-research/resources/${r.slug?.current || ''}`,
    })),
  };

  return <CardGrid {...propsToPass} />;
};

export const MappedTextAndImageBlock = (block: ResourcePageData) => {
  const props: TextAndImageBlockProps = {
    subheader: block.textAndImageBlock.subHeader,
    caption: block.textAndImageBlock.body,
    imgUrls: {
      desktop: block.textAndImageBlock.desktopImage.asset.url,
    },
    btnText: block.textAndImageBlock.buttonText,
    btnUrl: mapLink(block.textAndImageBlock.buttonLink),
    reverse: block.textAndImageBlock.reverse,
  };

  return <TextAndImageBlock {...props} />;
};

export const MappedArticleCarousel = (block: ResourcePageData) => {
  const props: ArticleCarouselProps = {
    title: block.articleCarousel.title,
    cards:
      block.articleCarousel.selected_articles &&
      block.articleCarousel.selected_articles.length > 0
        ? block.articleCarousel.selected_articles.map((article) =>
            mapArticle(article),
          )
        : [],
    categories:
      block.articleCarousel.categories &&
      block.articleCarousel.categories.length > 0
        ? block.articleCarousel.categories.map(function (category) {
            return category._id;
          })
        : [],
  };

  return <ArticleCarousel {...props} />;
};

export const MappedPreFooter = (block: ResourcePageData) => {
  const props: PreFooterBlockProps = {
    header: block.preFooter.header,
    description: block.preFooter.description,
    btnText: block.preFooter.btnText,
    btnUrl: mapLink(block.preFooter.btnUrl),
  };
  return <PreFooterBlock {...props} />;
};

const ResourceIndexPage = (props) => {
  const {page, resources} = props;

  // BREADCRUMB DATA
  const breadcrumbPages = [
    {
      title: 'Education & Training',
      slug: {current: '/education-research'},
    },
    {
      title: page.title,
      slug: {current: '/education-research/resources'},
    },
  ];

  return (
    <Page>
      <Layout>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <Navigation {...(props.siteConfig as SiteConfig)} />
        <Breadcrumbs pages={breadcrumbPages} />
        <MappedInteriorHero {...page} />
        <MappedFeaturedResource {...page} />
        <MappedCardGrid {...props} />
        <MappedTextAndImageBlock {...page} />
        <MappedArticleCarousel {...page} />
        <MappedPreFooter {...page} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default ResourceIndexPage;
