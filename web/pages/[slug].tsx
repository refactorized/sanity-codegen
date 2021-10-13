import {getPaths, getPageData} from '../data/page';
import getSiteConfig from '../data/siteConfig';
import MapComponents from '../components/BlockMapper/BlockMapper';
import Layout from '../components/Layout/Layout';
import Stretch from '../components/Layout/Stretch';
import Page from '../components/Page';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
import {Footer} from '../components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';

export async function getStaticPaths() {
  const paths = await getPaths();
  return {
    paths,
    fallback: false,
  };
}

interface staticContext {
  params: {
    slug: string;
  };
  preview?: boolean;
}

interface SlugPageProps {
  page: PageDocument;
  siteConfig: SiteConfig;
  preview?: boolean;
}

export const getStaticProps = async ({params, preview}: staticContext) => {
  const pageData = await getPageData(params.slug, preview);
  const siteConfig = await getSiteConfig();
  return {
    props: {
      page: pageData,
      siteConfig: siteConfig,
      preview: !!preview,
    } as SlugPageProps,
  };
};

const SlugPage = (props: SlugPageProps) => {
  // const livePage = usePageDataPreview(props.page)
  return (
    <Page>
      <Layout preview={props.preview}>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <MapComponents blocks={props.page.blocks} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default SlugPage;
