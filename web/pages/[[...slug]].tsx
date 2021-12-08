// third party
import {GetStaticProps} from 'next';
import {useRouter} from 'next/router';

// data layer
import {PageDocument, SiteConfig} from '@data/types';
import {getPaths, getPageData, Path} from '@data/page';
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
import {Breadcrumbs, getBreadcrumbs} from '@components/Breadcrumbs';

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
  paths: Path[];
}

export async function getStaticPaths() {
  const paths = (await getPaths())
    .map((path) => path.current)
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
    const paths = await getPaths();

    return {
      props: {
        page: pageData,
        siteConfig: siteConfig,
        preview: !!preview,
        paths: paths,
      } as slugPageProps,
    };
  } catch (e) {
    log.error(e);
    throw e; // best way to get 500 page?
  }
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
        <Breadcrumbs pages={getBreadcrumbs(props.page, props.paths)} />
        <MapComponents blocks={props.page.blocks} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default SlugPage;
