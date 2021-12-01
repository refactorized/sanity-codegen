import {
  getTeamPaths,
  getTeamPageData,
  getDepartments,
  getTeamDetailPageData,
} from '../../../data/teamPage';
import getSiteConfig from '../../../data/siteConfig';
import Layout from '../../../components/Layout/Layout';
import Stretch from '../../../components/Layout/Stretch';
import Page from '../../../components/Page';
import AnnouncementBar from '@components/AnnouncementBarComponent/mapSiteConfig';
import StickyCta from '@components/StickyCta/mapSiteConfig';
import Navigation from '@components/Navigation/mapSiteConfig';
import {Footer} from '../../../components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';

// age Components
import StaffIndexPage from '@components/Pages/StaffIndex';
import StaffDetailPage from '@components//Pages/StaffDetailPage';

export interface slugPageContext {
  params: {
    // because this is an _optional_ catch-all page, next will usually set this
    // to an array of path segments. But for the root path, it isn't set at all.
    slug?: string[];
  };
  preview?: boolean;
}

export interface slugPageProps {
  page: PageDocument;
  siteConfig: SiteConfig;
  preview?: boolean;
}

export async function getStaticPaths() {
  const paths = await getTeamPaths();

  return {
    paths,
    fallback: 'blocking',
  };
}

// Query to get data from Sanity
export const getStaticProps = async (context: slugPageContext) => {
  // TO DO: Configure this for page data that doesn't have number

  const {params, preview} = context;
  const slug = params.slug;

  const pageData = await getTeamPageData(slug, preview);
  const teamDetail = await getTeamDetailPageData(slug, preview);
  const siteConfig = await getSiteConfig();
  const departments = await getDepartments();

  return {
    props: {
      page: pageData,
      siteConfig: siteConfig,
      departments,
      teamDetail,
      preview: !!preview,
    },
  };
};

const TeamPage = (props) => {
  return (
    <Page {...props.page}>
      <Layout>
        <AnnouncementBar {...(props.siteConfig as SiteConfig)} />
        <StickyCta {...(props.siteConfig as SiteConfig)} />
        <Navigation {...(props.siteConfig as SiteConfig)} />
        {props.teamDetail ? (
          <StaffDetailPage {...props} />
        ) : (
          <StaffIndexPage {...props} />
        )}
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default TeamPage;
