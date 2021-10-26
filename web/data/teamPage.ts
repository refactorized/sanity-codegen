import client, {bigFetch} from './sanityClient';
import {handler} from '../util/logging';
import {PageDocument} from '@data/types';
import groq from 'groq';
import {maxNumberInPage} from 'pages/about/our-team/[[...slug]]';

export const getTeamPaths = () => {
  const pathQuery = `{
    'cards': *[_type=='staff' && !(_id in path('drafts.**'))]{
      ...,
      departments[]->{name, slug},
      team[]->{associatedDepartment->, slug, name}
    },
    'departments': *[_type== "department" && !(_id in path('drafts.**'))]{
      slug,
      'teams': *[_type=='departmentTeam' 
             && associatedDepartment._ref == ^._id
             && !(_id in path('drafts.**'))] {
      _id, 
      slug
      }
    }
  }`;

  return client
    .fetch(pathQuery)
    .then(
      (results: {
        departments: {slug: {_type: string; current: string}; teams: any[]}[];
        cards: any[];
      }) => {
        // Get paths for page numbers
        const totalPages = Math.floor(results.cards.length / maxNumberInPage);
        let pagePaths = [];

        if (totalPages >= 2) {
          // Don't make pages if there are less than two pages
          pagePaths = Array.from(Array(totalPages).keys()) // Make array out of number of pages counting from 0
            .map((num) => num + 1) // Add number to each
            .slice(1) // Remove page 1
            .map((pNum) => ({
              params: {
                slug: [pNum.toString()],
              },
            }));
        }

        // Get paths for departments
        let departmentPaths = [];

        // Loop through results to populate departmentPaths array
        results.departments.forEach((d) => {
          // Push deparment-level paths
          departmentPaths.push({
            params: {
              slug: [d.slug.current],
            },
          });

          // Push department-level page number paths
          // Get array of cards that belong to this department
          const cardsWithThisDepartment = results.cards.filter((c) =>
            c.departments.some((cd) => cd.slug.current === d.slug.current),
          );

          const totalPages = Math.ceil(
            cardsWithThisDepartment.length / maxNumberInPage,
          );

          if (totalPages >= 2) {
            // Don't make pages if there are less than two pages
            Array.from(Array(totalPages).keys()) // Make array out of number of pages counting from 0
              .map((num) => num + 1) // Add number to each
              .slice(1) // Remove page 1
              .forEach((pNum) => {
                departmentPaths.push({
                  params: {
                    slug: [d.slug.current, pNum.toString()],
                  },
                });
              });
          }

          // Check if the department has teams within it or nah
          if (d.teams.length > 0) {
            d.teams.forEach((t) => {
              //Push team-level (second-level) paths
              departmentPaths.push({
                params: {
                  slug: [d.slug.current, t.slug.current],
                },
              });

              // Push team-level page number paths
              // Get array of cards that belong to this team
              const cardsWithThisTeam = results.cards.filter(
                (c) =>
                  c.team &&
                  c.team.some((ct) => ct.slug.current === t.slug.current),
              );
              const totalPages = Math.ceil(
                cardsWithThisTeam.length / maxNumberInPage,
              );

              if (totalPages >= 2) {
                // Don't make pages if there are less than two pages
                Array.from(Array(totalPages).keys()) // Make array out of number of pages counting from 0
                  .map((num) => num + 1) // Add number to each
                  .slice(1) // Remove page 1
                  .forEach((pNum) => {
                    departmentPaths.push({
                      params: {
                        slug: [d.slug.current, t.slug.current, pNum.toString()],
                      },
                    });
                  });
              }
            });
          }
        });

        // ...and combine it all in a single array
        const pathArr = [...pagePaths, ...departmentPaths];

        return pathArr;
      },
    )
    .catch((err) => {
      throw new Error(err);
    });
};

// Fetches data for team page
export const getTeamPageData = async (
  slugs?: string[],
  preview?: boolean,
): Promise<PageDocument> => {
  // Prep object to determine query

  const slugObj = makeSlugObj(slugs);

  // Set an offset on query based on page number.
  const numberPerPage = maxNumberInPage;
  const pageNumber = parseInt(slugObj.page);
  const offset = numberPerPage * (pageNumber - 1);
  const offsetMax = offset > 0 ? pageNumber * numberPerPage : numberPerPage;

  // Query staff page cards (no department or team)
  const query = groq`*[_type == "teamPage" && !(_id in path('drafts.**'))]{
    ...,  
    'cards': *[_type=='staff' && !(_id in path('drafts.**'))] | order(lastName asc) [${offset}...${offsetMax}],
    'totalCards': count(*[_type=='staff' && !(_id in path('drafts.**'))])
  } | order(_updatedAt desc)[0]`;

  // Query if department is provided (but not team)
  const queryDepartment = groq`*[_type == "teamPage" && !(_id in path('drafts.**'))]{
    ...,  
    'cards': *[_type =='staff' && !(_id in path('drafts.**'))  && (*[_type == 'department' && slug.current == "${slugObj.department}" ][0]._id in departments[]._ref)] | order(lastName asc) [${offset}...${offsetMax}],
    'totalCards': count(*[_type =='staff' && !(_id in path('drafts.**'))  && (*[_type == 'department' && slug.current == "${slugObj.department}" ][0]._id in departments[]._ref)]),
    'header': *[_type == 'department' && slug.current == "${slugObj.department}"  ][0].name
    
  } | order(_updatedAt desc)[0]
  `;

  // We should only need to query whether a staff member belongs to a team
  // without querying for their department.
  const queryTeam = groq`*[_type == "teamPage" && !(_id in path('drafts.**'))]{
    ...,  
    'cards': *[_type =='staff' && !(_id in path('drafts.**'))  && (*[_type == 'departmentTeam' && slug.current == "${slugObj.team}" ][0]._id in team[]._ref)] | order(lastName asc) [${offset}...${offsetMax}],
    'totalCards': count(*[_type =='staff' && !(_id in path('drafts.**'))  && (*[_type == 'departmentTeam' && slug.current == "${slugObj.team}" ][0]._id in team[]._ref)]),
    'header': *[_type == 'departmentTeam' && slug.current == "${slugObj.team}"  ][0].name
  } | order(_updatedAt desc)[0]
  `;

  const queryToUse =
    slugObj.team !== ''
      ? queryTeam
      : slugObj.department !== ''
      ? queryDepartment
      : query;

  const pageData = bigFetch(queryToUse, preview);
  return pageData;
};

export const getDepartments = async () => {
  const query = groq`*[_type== "department" && !(_id in path('drafts.**'))] | order(name) {
    _id,
    name,
    slug,
    'teams': *[_type=='departmentTeam' 
             && associatedDepartment._ref == ^._id
             && !(_id in path('drafts.**'))] {
      _id, 
      name,
      slug
      
    }
  }`;

  const pageData = bigFetch(query);
  return pageData;
};

// MISC UTILS

// Check if value is a number or nah
export const isNumeric = (str: string): boolean => {
  return !isNaN(parseFloat(str));
};

// Makes an object that assigns whether each
// part of the slug is a department, team, or page number.
export const makeSlugObj = (slugs: string[]) => {
  const slugObj = {
    department: '',
    team: '',
    page: '1',
  };

  if (slugs) {
    if (slugs.length === 3) {
      slugObj.department = slugs[0];
      slugObj.team = slugs[1];
      slugObj.page = slugs[2];
    } else if (slugs.length === 2) {
      slugObj.department = slugs[0];

      isNumeric(slugs[1])
        ? (slugObj.page = slugs[1])
        : (slugObj.team = slugs[1]);
    } else {
      isNumeric(slugs[0])
        ? (slugObj.page = slugs[0])
        : (slugObj.department = slugs[0]);
    }
  }

  return slugObj;
};
