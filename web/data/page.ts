import client, {bigFetch} from './sanityClient';
import {handler} from '../util/logging';
import {PageDocument} from '@data/types';
import groq from 'groq';

export interface Path {
  current: string;
  title: string;
}

// promise style
export const getPaths = async (): Promise<Path[]> => {
  const pathQuery = groq`*[_type == "page"  && !(_id in path('drafts.**'))]`;
  const results = await client.fetch(pathQuery);
  return results
    .filter((page) => page.slug?.current)
    .map((page) => {
      return {current: page.slug?.current, title: page.title};
    });
};

// async await style
export const getPageData = async (
  slug: string,
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "page" && slug.current == "${slug}"] | order(_updatedAt desc)[0]`;
  const pageData = await bigFetch(query, preview);
  return pageData as PageDocument;
};

// export const usePageDataPreview = (slug: string, initialData: PageDocument) => {
//   const query = groq`*[_type == "page" && slug.current == "${slug}"][0]`;
//   const {data: pageData} = useBigFetchSubscription(query, initialData);
//   return pageData as PageDocument;
// };
