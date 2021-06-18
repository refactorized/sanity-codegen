// this file just routes `/` like as if it were `/home' vis [slug].tsx
import PageComponent, {getStaticProps as _getStaticProps} from './[slug]';

export const getStaticProps = () => {
  return _getStaticProps({params: {slug: 'home'}});
};

export default PageComponent;
