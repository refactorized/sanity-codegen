import styled from 'styled-components';
import {fontFamily, fontSize, fontWeight, query, space} from '@theme/fn';
import Link from 'next/link';
import {GetStaticProps} from 'next';

import getSiteConfig from '@data/siteConfig';
import ProseBlock from '@components/ProseBlock';
import Layout from '@components/Layout/Layout';
import Stretch from '@components/Layout/Stretch';
import Page from '@components/Page';
import {Footer} from '@components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';
import {Block} from '@components/Layout';

import {Breadcrumbs} from '@components/Breadcrumbs';
import {TeamCard, TeamCardProps} from '@components/Card/TeamCard';
import {NewsDetailHero, NewsDetailHeroProps} from '@components/NewsDetailHero';
import {InteriorHero, InteriorHeroProps} from '@components/InteriorHero';
import {CircleArrow} from '@components/Arrow/index';
import {RenderBasicText} from '@components/PortableText';

import {
  ArticleCarousel,
  ArticleCarouselProps,
  mapArticle,
} from '@components/ArticleCarousel';

import {Staff} from '@schema/types';
import {ResolvedSanityReferences} from '@data/types';

// TYPES
type StaffData = ResolvedSanityReferences<Staff>;

const MappedTeamCard = (block: StaffData) => {
  const props: TeamCardProps = {
    image: block.image?.asset?.url || '',
    phone: block.telephone,
    email: block.email,
  };

  return <TeamCard {...props} />;
};

const MappedArticleCarousel = (block: StaffData) => {
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

// Container
const Container = styled.div`
  display: grid;
  grid-template-gap: 1fr;
  grid-column-gap ${space('lg')};

  @media screen and (${query.atLeast('tablet')}) {
    grid-template-columns: 333px 1fr;
  }
`;

const DesktopNameContainer = styled.div`
  display: none;
  @media screen and (${query.atLeast('tablet')}) {
    display: block;
  }
`;

const MobileNameContainer = styled.div`
  display: block;
  @media screen and (${query.atLeast('tablet')}) {
    display: none;
  }
`;

const Name = styled.h2`
  margin-top: 0;
  margin-bottom: ${space('sm')};
  ${fontFamily('headline')};
  ${fontSize('x6')};
  ${fontWeight('regular')};
`;

const Title = styled.h3`
  ${fontSize('md')};
  ${fontFamily('body')};
  ${fontWeight('regular')};
  margin-top: 0;
  margin-bottom: ${space('md')};

  @media screen and (${query.atLeast('tablet')}) {
    margin-bottom: ${space('lg')};
  }
`;

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

// Slugs to use
const teamSlug = '/about/our-team';

const StaffDetailPage = (props) => {
  const {teamDetail} = props;

  // BREADCRUMB DATA
  const pageTitle = `${teamDetail.firstName} ${teamDetail.lastName}`;
  const breadcrumbPages = [
    {
      title: 'Our Team',
      slug: {current: teamSlug},
    },
    {
      title: pageTitle,
      slug: {current: teamDetail.slug?.current},
    },
  ];

  // SOCIAL MEDIA SHARE URLs
  const site = 'https://www.austenriggs.org/';
  const urlFacebook = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
    `${site}${teamDetail.slug?.current}`,
  )}&[title]=${encodeURIComponent(teamDetail.title)}`;
  const urlTwitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `${site}${teamDetail.slug?.current}`,
  )}&text=${encodeURIComponent(teamDetail.title)}`;
  const urlLinkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    `${site}${teamDetail.slug?.current}`,
  )}`;

  const nameToDisplay = `${pageTitle}${
    teamDetail.credentials ? `, ${teamDetail.credentials}` : ''
  }`;

  return (
    <>
      <Breadcrumbs pages={breadcrumbPages} />
      {/* <ProseBlock block={page.body} /> */}
      <Block>
        <Container>
          <MobileNameContainer>
            <Name>{nameToDisplay}</Name>
            <Title>{teamDetail.title}</Title>
          </MobileNameContainer>
          <MappedTeamCard {...teamDetail} />
          <div>
            <DesktopNameContainer>
              <Name>{nameToDisplay}</Name>
              <Title>{teamDetail.title}</Title>
            </DesktopNameContainer>
            <RenderBasicText content={teamDetail.bio} />
          </div>
        </Container>
      </Block>
      <MappedArticleCarousel {...teamDetail} />
      <Stretch />
    </>
  );
};

export default StaffDetailPage;
