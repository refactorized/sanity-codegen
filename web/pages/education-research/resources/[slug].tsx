import styled from 'styled-components';
import {fontFamily, query, space} from '@theme/fn';
import Link from 'next/link';
import {GetStaticProps} from 'next';

import {getResourcePaths, getResourceDetailPageData} from '@data/resourcePage';
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
import {NewsDetailHero, NewsDetailHeroProps} from '@components/NewsDetailHero';
import {InteriorHero, InteriorHeroProps} from '@components/InteriorHero';
import {CircleArrow} from '@components/Arrow/index';
import {
  ArticleCarousel,
  ArticleCarouselProps,
  mapArticle,
} from '@components/ArticleCarousel';

import {SanityKeyed, Resource} from '@schema/types';
import {ResolvedSanityReferences} from '@data/types';

export async function getStaticPaths() {
  const paths = (await getResourcePaths()).map((path) => ({
    params: {
      slug: path,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

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
  const {params, preview} = context;
  // if params.slug is missing this is the root, re-map to home
  const slug = params.slug;
  try {
    const pageData = await getResourceDetailPageData(slug, preview);

    if (!pageData) {
      return {notFound: true};
    }

    const siteConfig = await getSiteConfig();
    return {
      props: {
        page: pageData,
        siteConfig: siteConfig,
        preview: !!preview,
      } as slugPageProps,
    };
  } catch (e) {
    log.error(e);
    throw e; // best way to get 500 page?
  }
};

// TYPES
type ResourceData = SanityKeyed<ResolvedSanityReferences<Resource>>;

export const MappedInteriorHero = (block: ResourceData) => {
  const props: InteriorHeroProps = {
    imgUrls: {
      desktop: block.mainImage.asset.url,
      mobile: block.mainImage.asset.url,
    },
    narrow: true,
  };

  return <InteriorHero {...props} />;
};

// Back Button
const MoreCTALink = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  font-size: 14px;
  align-items: center;

  @media screen and (${query.atLeast('desktop')}) {
    font-size: 18px;
  }
`;

const CTAText = styled.div`
  ${fontFamily('body')};
  margin-left: ${space('sm')};
`;

export const MappedArticleCarousel = (block: ResourceData) => {
  const props: ArticleCarouselProps = {
    title: block.articleCarousel?.title || 'Related Resources',
    cards:
      block.articleCarousel?.selected_articles &&
      block.articleCarousel?.selected_articles.length > 0
        ? block.articleCarousel.selected_articles.map((article) =>
            mapArticle(article),
          )
        : [],
    categories:
      block.articleCarousel?.categories &&
      block.articleCarousel?.categories.length > 0
        ? block.articleCarousel.categories.map(function (category) {
            return category._id;
          })
        : [],
  };

  return <ArticleCarousel {...props} />;
};

// Slugs to use
const resourceCenterSlug = '/education-research/resources';

const ResourceDetailPage = (props) => {
  const {page} = props;

  // BREADCRUMB DATA
  const breadcrumbPages = [
    {
      title: 'Resource Center',
      slug: {current: resourceCenterSlug},
    },
    {
      title: page.title,
      slug: {current: page.slug?.current},
    },
  ];

  // SOCIAL MEDIA SHARE URLs
  const site = 'https://www.austenriggs.org/';
  const urlFacebook = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
    `${site}${page.slug?.current}`,
  )}&[title]=${encodeURIComponent(page.title)}`;
  const urlTwitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `${site}${page.slug?.current}`,
  )}&text=${encodeURIComponent(page.title)}`;
  const urlLinkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    `${site}${page.slug?.current}`,
  )}`;

  // MAPPED COMPONENTS
  const MappedNewsDetailHero = (block: ResourceData) => {
    const props: NewsDetailHeroProps = {
      category: block.resourceType.title,
      header: block.title,
      publishedDate: block.publishedAt,
      authors: block.associatedStaff.map(
        (staff) => `${staff.firstName} ${staff.lastName}`,
      ),
      urlFacebook,
      urlTwitter,
      urlLinkedin,
      squish: true,
    };

    return <NewsDetailHero {...props} />;
  };
  return (
    <Page>
      <Layout>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <Navigation {...(props.siteConfig as SiteConfig)} />
        <Breadcrumbs pages={breadcrumbPages} />
        <MappedNewsDetailHero {...page} />
        <MappedInteriorHero {...page} />
        <ProseBlock block={page.body} />
        <Block>
          <Link href={resourceCenterSlug}>
            <MoreCTALink>
              <CircleArrow flip /> <CTAText>Back to Resource Center</CTAText>
            </MoreCTALink>
          </Link>
        </Block>
        <MappedArticleCarousel {...page} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default ResourceDetailPage;
