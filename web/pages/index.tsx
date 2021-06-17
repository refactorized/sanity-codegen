import PageComponent, {getStaticProps as _getStaticProps} from './[slug]';

export const getStaticProps = () => {
  return _getStaticProps({params: {slug: 'home'}});
};

export default PageComponent;
