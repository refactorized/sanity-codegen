import styled from 'styled-components';
import {fontFamily, fontSize, fontWeight, query, space} from '@theme/fn';
import Link from 'next/link';
import {GetStaticProps} from 'next';

import {getEventPaths, getEventDetailPageData} from '@data/eventPage';
import getSiteConfig from '@data/siteConfig';
import ProseBlock from '@components/ProseBlock';
import Layout from '@components/Layout/Layout';
import Stretch from '@components/Layout/Stretch';
import Page from '@components/Page';
import {Footer} from '@components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';
import {Block} from '@components/Layout';

import {Breadcrumbs} from '@components/Breadcrumbs';
import {NewsDetailHero, NewsDetailHeroProps} from '@components/NewsDetailHero';
import {InteriorHero, InteriorHeroProps} from '@components/InteriorHero';
import {CircleArrow} from '@components/Arrow/index';

import {Event} from '@schema/types';
import {ResolvedSanityReferences} from '@data/types';

export async function getStaticPaths() {
  const paths = (await getEventPaths()).map((path) => ({
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
    const pageData = await getEventDetailPageData(slug, preview);

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
type EventData = ResolvedSanityReferences<Event>;

export const MappedInteriorHero = (block: EventData) => {
  const props: InteriorHeroProps = {
    imgUrls: {
      desktop: block.image ? block.image.asset.url : '',
      mobile: block.image ? block.image.asset.url : '',
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

// Prose Section Headers
const SectionHeader = styled.h3`
  ${fontFamily('body')};
  ${fontWeight('bold')};
  ${fontSize('xl')};
  text-align: left;
`;

const CTAText = styled.div`
  ${fontFamily('body')};
  margin-left: ${space('sm')};
`;

// Slugs to use
const eventsSlug = '/events';

const EventDetailPage = (props) => {
  const {page} = props;

  // BREADCRUMB DATA
  const breadcrumbPages = [
    {
      title: 'Events',
      slug: {current: eventsSlug},
    },
    {
      title: page.name,
      slug: {current: page.slug.current},
    },
  ];

  // SOCIAL MEDIA SHARE URLs
  const site = 'https://www.austenriggs.org/';
  const urlFacebook = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
    `${site}${page.slug.current}`,
  )}&[title]=${encodeURIComponent(page.title)}`;
  const urlTwitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `${site}${page.slug.current}`,
  )}&text=${encodeURIComponent(page.title)}`;
  const urlLinkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    `${site}${page.slug.current}`,
  )}`;

  // MAPPED COMPONENTS
  const MappedNewsDetailHero = (block: EventData) => {
    const props: NewsDetailHeroProps = {
      category: block.eventCategory ? block.eventCategory.name : 'Events',
      header: block.name,
      date: block.eventStart,
      price: block.pricingDescription,
      description: block.shortDescription,
      registrationLink: block.registrationLink,
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
        <Breadcrumbs pages={breadcrumbPages} />
        <MappedNewsDetailHero {...page} />
        <MappedInteriorHero {...page} />
        {/* Description */}
        <ProseBlock block={page.description} />
        {
          /* Schedule */
          page.schedule && (
            <>
              <Block squish>
                <SectionHeader>Schedule</SectionHeader>
              </Block>
              <ProseBlock block={page.schedule} />
            </>
          )
        }
        {
          /* Schedule */
          page.contact && (
            <>
              <Block squish>
                <SectionHeader>Contact</SectionHeader>
              </Block>
              <ProseBlock block={page.contact} />
            </>
          )
        }
        {
          /* Learning Objectives */
          page.learningObjectives && (
            <>
              <Block squish>
                <SectionHeader>Learning Objectives</SectionHeader>
              </Block>
              <ProseBlock block={page.learningObjectives} />
            </>
          )
        }
        {page.continuingEducation && (
          <>
            <Block squish>
              <SectionHeader>Continuing Education</SectionHeader>
            </Block>
            <ProseBlock block={page.continuingEducation} />
          </>
        )}
        <Block>
          <Link href={eventsSlug}>
            <MoreCTALink>
              <CircleArrow flip /> <CTAText>Back to Events</CTAText>
            </MoreCTALink>
          </Link>
        </Block>
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default EventDetailPage;
