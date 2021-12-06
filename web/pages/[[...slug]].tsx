// third party
import {GetStaticProps} from 'next';
import {useRouter} from 'next/router';

// data layer
import {PageDocument, SiteConfig} from '@data/types';
import {getPaths, getPageData} from '@data/page';
import getSiteConfig from '@data/siteConfig';

// components
import MapComponents from '@components/BlockMapper/BlockMapper';
import Layout from '@components/Layout/Layout';
import Stretch from '@components/Layout/Stretch';
import Page from '@components/Page';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
import StickyCta from '@components/StickyCta/mapSiteConfig';
import Navigation from '@components/Navigation/mapSiteConfig';
import {Footer} from '@components/FooterComponent';
import {Breadcrumbs} from '@components/Breadcrumbs';

// misc
import log from '@util/logging';

interface slugPageContext {
  params: {
    // because this is an _optional_ catch-all page, next will usually set this
    // to an array of path segments. But for the root path, it isn't set at all.
    slug?: string[];
  };
  preview?: boolean;
}

interface slugPageProps {
  page: PageDocument;
  siteConfig: SiteConfig;
  preview?: boolean;
}

export async function getStaticPaths() {
  const paths = (await getPaths())
    .map((path) => (path === 'home' ? '' : path))
    .map((path) => ({
      params: {
        slug: path.split('/'), // empty for index page.
      },
    }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (
  context: slugPageContext,
) => {
  const {params, preview} = context;
  // if params.slug is missing this is the root, re-map to home
  const slug = params.slug ? params.slug.join('/') : 'home';
  try {
    const pageData = await getPageData(slug, preview);

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

const getBreadcrumbs = (page: PageDocument): any[] => {
  if (page && page.slug) {
    const fragments = page.slug?.current.split('/');
    if (fragments.length <= 1) return []; // first level pages don't require breadcrumbs
    return fragments
      .filter((val) => val !== 'home') // filter out home links from breadcrumbs
      .map((value, index, arr) => {
        if (index < arr.length - 1) {
          // build title and link from slug fragments
          return {
            title: value
              .split('-')
              .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
              .join(' '),
            slug: {
              current: arr.reduce((prev, curr, currIndex) =>
                currIndex <= index ? prev + '/' + curr : prev,
              ),
            },
          };
        } else {
          // For the last item, use the page title and slug
          return {
            title: page.title,
            slug: {current: page.slug?.current},
          };
        }
      });
  }
  return [];
};

const SlugPage = (props: slugPageProps) => {
  // const livePage = usePageDataPreview(props.page)

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Page {...props.page}>
      <Layout preview={props.preview}>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <StickyCta {...(props.siteConfig as SiteConfig)} />
        <Navigation {...(props.siteConfig as SiteConfig)} />
        <Breadcrumbs pages={getBreadcrumbs(props.page)} />
        <MapComponents blocks={props.page.blocks} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default SlugPage;
