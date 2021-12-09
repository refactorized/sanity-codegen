import styled from 'styled-components';
import {fontFamily, fontSize, fontWeight, lineHeight, query} from '@theme/fn';
import Link from 'next/link';
import {GetStaticProps} from 'next';

import {getCoursePageData, getAllCourses} from '@data/coursePage';
import getSiteConfig from '@data/siteConfig';
import Layout from '@components/Layout/Layout';
import Stretch from '@components/Layout/Stretch';
import Page from '@components/Page';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
import StickyCta from '@components/StickyCta/mapSiteConfig';
import Navigation from '@components/Navigation/mapSiteConfig';
import {Footer} from '@components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';
import {Block} from '@components/Layout';

import {Breadcrumbs} from '@components/Breadcrumbs';
import {InteriorHero, InteriorHeroProps} from '@components/InteriorHero';
import {
  TextAndImageBlock,
  TextAndImageBlockProps,
} from '@components/TextAndImageBlock';
import {
  AdmissionsCallout,
  AdmissionsCalloutProps,
} from '@components/AdmissionsCalloutComponent';
import {PreFooterBlock, PreFooterBlockProps} from '@components/PreFooterBlock';
import {CardGrid, CardGridProps} from '@components/CardGridComponent';

import {SanityKeyed, Course, CoursePage} from '@schema/types';
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
    const pageData = await getCoursePageData(preview);

    if (!pageData) {
      return {notFound: true};
    }

    const courses = await getAllCourses();

    const siteConfig = await getSiteConfig();
    return {
      props: {
        page: pageData,
        siteConfig: siteConfig,
        preview: !!preview,
        courses,
      } as slugPageProps,
    };
  } catch (e) {
    log.error(e);
    throw e; // best way to get 500 page?
  }
};

// TYPES
type CoursePageData = SanityKeyed<ResolvedSanityReferences<CoursePage>>;
type CourseData = ResolvedSanityReferences<Course>;

export const MappedInteriorHero = (block: CoursePageData) => {
  const props: InteriorHeroProps = {
    header: block.interiorHero.header,
    caption: block.interiorHero.caption,
  };

  return <InteriorHero {...props} />;
};

export const MappedFeaturedEvent = (block: CoursePageData) => {
  const props: TextAndImageBlockProps = {
    altBg: true,
    header: 'Featured',
    subheader: block.featuredCourse?.postType?.title || 'Courses',
    secondHeader: block.featuredCourse.title,
    caption: block.featuredCourse.shortDescription,
    imgUrls: {
      desktop: block.featuredCourse.mainImage?.asset?.url || '',
    },
    btnText: 'Read More',
    btnUrl: block.featuredCourse.slug.current,
    reverse: false,
  };

  return <TextAndImageBlock {...props} />;
};

export const MappedCardGrid = (props: {courses: CourseData[]}) => {
  let courseTypes = props.courses
    .map((t, i) => ({
      id: i + 1,
      title: t.postType?.title || 'Courses',
      link: '#',
    }))
    .filter(
      (thing, index, self) =>
        index === self.findIndex((t) => t.title === thing.title),
    );

  courseTypes.unshift({id: 0, title: 'All Courses', link: '#'});
  const propsToPass: CardGridProps = {
    links: courseTypes,
    articleCardArr: props.courses.map((c) => ({
      image: c.mainImage?.asset?.url || '',
      category: c.postType?.title || 'Courses',
      headline: c.title,
      description: c.shortDescription,
      url: c.slug
        ? `/education-research/training/cme-courses/${c.slug.current}`
        : `/education-research/training/cme-courses/`,
    })),
  };

  return <CardGrid {...propsToPass} />;
};

export const MappedCallout = (block: CoursePageData) => {
  const props: AdmissionsCalloutProps = {
    admissionHeader: block.admissionsCallout.admissionHeader,
    admissionDescription: block.admissionsCallout.admissionDescription,
    contactHeader: block.admissionsCallout.contactHeader,
    contactDescription: block.admissionsCallout.contactDescription,
    btnText: block.admissionsCallout.btnText,
    btnUrl: block.admissionsCallout?.btnUrl?.slug?.current || '',
  };

  return <AdmissionsCallout {...props} />;
};

const BottomText = styled.h3`
  ${fontFamily('headline')};
  ${fontSize('xl')};
  ${lineHeight('heading')};
  ${fontWeight('regular')};
  margin: 0;

  @media screen and (${query.atLeast('tablet')}) {
    ${fontSize('x5')};
  }
`;
export const MappedPreFooter = (block: CoursePageData) => {
  const props: PreFooterBlockProps = {
    header: block.preFooter.header,
    description: block.preFooter.description,
    btnText: block.preFooter.btnText,
    btnUrl: block.preFooter.btnUrl.slug.current,
  };
  return <PreFooterBlock {...props} />;
};

const CourseIndexPage = (props) => {
  const {page} = props;

  // BREADCRUMB DATA
  const breadcrumbPages = [
    {
      title: 'Education & Research',
      slug: {current: '/education-research'},
    },
    {
      title: 'Education & Training',
      slug: {current: '/education-research/training'},
    },
    {
      title: 'Continuing Education Courses',
      slug: {current: '/education-research/training/cme-courses'},
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
        <Block>
          <BottomText>{page.bottomText}</BottomText>
        </Block>
        <MappedCallout {...page} />
        <MappedPreFooter {...page} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default CourseIndexPage;
