import {getPaths, getPageData} from '../data/page';
import getSiteConfig from '../data/siteConfig';
import MapComponents from '../components/BlockMapper/BlockMapper';
import Layout from '../components/Layout/Layout';
import Stretch from '../components/Layout/Stretch';
import Page from '../components/Page';
import {Footer} from '../components/FooterComponent';
import {AnyBlockData} from '@data/blocks/AnyBlockData';

export async function getStaticPaths() {
  const paths = await getPaths();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  const pageData = await getPageData(params.slug);
  const siteConfig = await getSiteConfig();
  return {
    props: {
      page: pageData,
      siteConfig: siteConfig,
    },
  };
};

const SlugPage = (props) => {
  return (
    <Page>
      <Layout>
        <MapComponents blocks={props.page.blocks as AnyBlockData[]} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default SlugPage;
