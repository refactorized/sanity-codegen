import getSiteConfig from '../data/siteConfig';
import ErrorLayout, {
  Header,
  Text,
  ButtonWrapper,
} from '../components/Layout/ErrorLayout';
import {Block} from '@components/Layout';
import Stretch from '../components/Layout/Stretch';
import Page from '../components/Page';
import {Footer} from '../components/FooterComponent';
import {Button} from '@components/Button';
import {SiteConfig} from '@data/types';

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  const siteConfig = await getSiteConfig();
  return {
    props: {
      siteConfig: siteConfig,
    },
  };
};

const Error500Page = (props) => {
  return (
    <Page>
      <ErrorLayout>
        <Block>
          {/* <MapComponents blocks={props.page.blocks as AnyBlockData[]} /> */}
          <Stretch />
          <Header>500: Internal Server Error</Header>
          <Text>
            Sorry, our internal server encountered a problem. We’re working to
            correct it. Please come back soon.
          </Text>
          <ButtonWrapper>
            <Button
              url="/"
              label="Go Back Home"
              arrow={true}
              size="medium"
              variant="solid"
              arrowColor="#fff"
            />
            <Button
              url="/contact-us"
              label="Contact Us"
              arrow={true}
              size="medium"
              variant="solid"
              arrowColor="#fff"
            />
          </ButtonWrapper>
        </Block>
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </ErrorLayout>
    </Page>
  );
};

export default Error500Page;
