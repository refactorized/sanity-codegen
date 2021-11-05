import {useRouter} from 'next/router';
import styled from 'styled-components';
import {fontFamily, fontSize, fontWeight} from '@theme/fn';

import {
  getTeamPaths,
  getTeamPageData,
  getDepartments,
  makeSlugObj,
} from '../../../data/teamPage';
import getSiteConfig from '../../../data/siteConfig';
import Layout from '../../../components/Layout/Layout';
import Stretch from '../../../components/Layout/Stretch';
import Page from '../../../components/Page';
import {Footer} from '../../../components/FooterComponent';
import {PageDocument, SiteConfig} from '@data/types';
import {Block} from '@components/Layout';

import {InteriorHero, InteriorHeroProps} from '@components/InteriorHero';
import {TeamCardGrid, TeamCardGridProps} from '@components/TeamCardGrid';
import PreFooterBlockData from '@data/blocks/PreFooterBlockData';
import {PreFooterBlock, PreFooterBlockProps} from '@components/PreFooterBlock';
import {Pagination} from '@components/Pagination';

import {SanityKeyed, Staff} from '@schema/types';
import {ResolvedSanityReferences} from '@data/types';

import GridFilter from '@components/GridFilter';

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
  const siteConfig = await getSiteConfig();
  const departments = await getDepartments();

  return {
    props: {
      page: pageData,
      siteConfig: siteConfig,
      departments,
      preview: !!preview,
    },
  };
};

// DROPDOWN UTILS
// Create array of departments or teams
const createDepartmentArray = (
  arr,
  isTeam?: boolean,
): {id: number; title: string; link: string; teams?: any[]}[] => {
  const mappedArr = arr.map((d, i) => {
    return {
      id: i + 2,
      title: d.name,
      link: d.slug.current,
      ...(d.teams && {teams: d.teams}),
    };
  });

  mappedArr.unshift({
    id: 1,
    title: isTeam ? 'All Teams' : 'All Departments',
    link: '',
  });

  return mappedArr;
};

// TYPES

interface InteriorHeroData {
  teamHeroTitle: string;
  caption: string;
}

interface TeamCardGridData {
  cards: TeamCardData[];
}

type TeamCardData = SanityKeyed<ResolvedSanityReferences<Staff>>;

// MAPPED COMPONENTS
export const MappedInteriorHero = (block: InteriorHeroData) => {
  const props: InteriorHeroProps = {
    header: block.teamHeroTitle,
    caption: block.caption,
    headerPadding: false,
  };

  return <InteriorHero {...props} />;
};

export const MappedPreFooter = (block: PreFooterBlockData) => {
  const props: PreFooterBlockProps = {
    header: block.header,
    description: block.description,
    btnText: block.btnText,
    btnUrl: block.btnUrl.slug ? block.btnUrl.slug.current : block.btnUrl.url,
    phoneNumber: block.phoneNumber,
  };

  return <PreFooterBlock {...props} />;
};

// HANDLING PAGINATION DATA
export const maxNumberInPage = 12;

// Dropdown wrapper
export const DropdownWrapper = styled.div`
  max-width: 688px;
`;

export const DropdownLabel = styled.p`
  ${fontSize('sm')};
  ${fontFamily('body')};
  color: #212121;
  ${fontWeight('regular')};
`;

const TeamPage = (props) => {
  const {page, departments} = props;

  // Getting path info from URL
  const router = useRouter();
  const {slug} = router.query;

  // Make object of slugs of department, team, and page #
  const slugObj = makeSlugObj(slug as string[]);

  // DROPDOWNS
  // Get department array for Dropdowns
  const departmentsArr = createDepartmentArray(departments);
  const currentDepartment =
    departmentsArr.length > 0
      ? departmentsArr.find((d) => d.link === slugObj.department)
      : departmentsArr[0]; // defaults to SELECT ALL;

  // ...and teams array (if they have teams)
  const teamsArr =
    currentDepartment.teams && currentDepartment.teams.length > 0
      ? createDepartmentArray(currentDepartment.teams, true)
      : [];

  const currentTeam =
    teamsArr.find((t) => t.link === slugObj.team) || teamsArr[0]; // defaults to SELECT ALL;

  // Set up labels
  const departmentLabel = 'Choose a Department';
  const subDepartmentLabel = 'Choose a Sub-Department';

  // Handle going to different pages
  const handleSelectDropdownItem = (
    selectedArr: {label: string; selected: string}[],
  ): null => {
    // Get destination department and slug
    const destinationDepartment = departmentsArr.find(
      (d) =>
        d.title ===
        selectedArr.find((s) => s.label === departmentLabel).selected,
    );

    const departmentSlug = destinationDepartment.link;

    // Get destination team and slug
    const destinationTeam = teamsArr.find(
      (t) =>
        t.title ===
        selectedArr.find((s) => s.label === subDepartmentLabel).selected,
    );

    const teamSlug =
      destinationTeam && destinationTeam.link ? destinationTeam.link : '';

    // Make destination path
    const destinationPath =
      destinationDepartment.title !== currentDepartment.title // Check if we're changing teams or nah
        ? // Go to different department
          `/about/our-team/${
            departmentSlug !== '' ? `${departmentSlug}/` : '' // '' is to handle choosing 'All Departments'
          }`
        : // Go to different team in same department
          `/about/our-team/${
            departmentSlug !== '' ? `${departmentSlug}/` : '' // '' is to handle choosing 'All Departments'
          }${teamSlug}`;

    // ...and go to destination path
    router.push(destinationPath);

    return;
  };

  // Create categories array to plug into GridFilter
  const categories = [
    {
      label: departmentLabel,
      items: departmentsArr.map((d) => ({id: d.id, title: d.title})),
      selected: currentDepartment.id,
    },
    ...(teamsArr.length > 0
      ? [
          {
            label: subDepartmentLabel,
            items: teamsArr.map((t) => ({id: t.id, title: t.title})),
            selected: currentTeam.id,
          },
        ]
      : []),
  ];

  // END DROPDOWNS

  // PAGINATION
  const currentPage = parseInt(slugObj.page);
  const totalNumberOfPages = Math.ceil(page.totalCards / maxNumberInPage);

  const handleSelectPage = (p: number): null => {
    const destinationPath = `/about/our-team/${
      slugObj.department !== '' ? `${slugObj.department}/` : ''
    }${slugObj.team !== '' ? `${slugObj.team}/` : ''}${p > 1 ? p : ''}`;

    router.push(destinationPath);
    return;
  };

  // END PAGINATION

  const MappedTeamCardGrid = (block: TeamCardGridData, props) => {
    const mappedProps: TeamCardGridProps = {
      cards: block.cards.map((card) => {
        return {
          ...card,
          url: card.slug ? card.slug.current : '',
          phone: card.telephone,
          name: `${card.firstName} ${card.lastName}`,
          categories: card.departments,
          subcategories: card.team,
          image: card.image?.asset.url,
        };
      }),
      header: page.header,
    };
    return <TeamCardGrid {...mappedProps} {...props} />;
  };

  return (
    <Page {...page}>
      <Layout>
        <MappedInteriorHero {...page} />
        <Block squish>
          <DropdownWrapper>
            <GridFilter
              categories={categories}
              onSelected={handleSelectDropdownItem}
            />
          </DropdownWrapper>
        </Block>
        <MappedTeamCardGrid {...page} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalNumberOfPages}
          pageSelected={handleSelectPage}
        />
        <MappedPreFooter {...page.preFooter} />
        <Stretch />
        <Footer siteConfig={props.siteConfig as SiteConfig} />
      </Layout>
    </Page>
  );
};

export default TeamPage;
