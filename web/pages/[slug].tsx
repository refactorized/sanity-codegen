import {getPaths, getPageData} from '../data/page';
import MapComponents from '../components/MapComponents';
import Layout from '../components/Layout/Layout';

export async function getStaticPaths() {
  const paths = await getPaths();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  const pageData = await getPageData(params.slug);
  return {
    props: {
      page: pageData,
    },
  };
};

const SlugPage = (props) => {
  console.log({props});
  return (
    <Layout>
      <MapComponents blocks={props.page.blocks} />
    </Layout>
  );
};

export default SlugPage;
