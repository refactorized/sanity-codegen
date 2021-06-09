import {getPaths, getPageData} from '../data/page';

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
      content: pageData,
    },
  };
};

const Page = (props) => (
  <>
    <pre>{props.content}</pre>
  </>
);

export default Page;
