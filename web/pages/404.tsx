import getSiteConfig from '../data/siteConfig';
import ErrorLayout, {
  Header,
  Text,
  ButtonWrapperForSpacing,
} from '../components/Layout/ErrorLayout';
import {Block} from '@components/Layout';
import Stretch from '../components/Layout/Stretch';
import Page from '../components/Page';
import {Footer} from '../components/FooterComponent';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
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

const Error404Page = (props) => {
  return (
    <Page>
      <ErrorLayout>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <Stretch />
        <Block>
          {/* <MapComponents blocks={props.page.blocks as AnyBlockData[]} /> */}

          <Header>404: Page Not Found</Header>
          <Text>
            We couldn’t find the page you requested. It might have been moved,
            renamed, or deleted. Please check your spelling and try your search
            again.
          </Text>
          <ButtonWrapperForSpacing>
            <Button
              url="/"
              label="Go Back Home"
              arrow={true}
              size="medium"
              variant="solid"
              arrowColor="#fff"
            />
          </ButtonWrapperForSpacing>
        </Block>
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </ErrorLayout>
    </Page>
  );
};

export default Error404Page;
