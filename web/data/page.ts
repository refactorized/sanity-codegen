import client, {bigFetch} from './sanityClient';
import {handler} from '../util/logging';
import {PageDocument} from '@data/types';
import groq from 'groq';

// promise style
export const getPaths = () => {
  const pathQuery = groq`*[_type == "page"  && !(_id in path('drafts.**'))]`;
  return client
    .fetch(pathQuery)
    .then((results: any[]) => {
      return results
        .map((page) => ({
          params: {
            slug: (page?.slug?.current as string) || null,
          },
        }))
        .filter((info) => info.params.slug != null);
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// async await style
export const getPageData = async (
  slug: string,
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "page" && slug.current == "${slug}"] | order(_updatedAt desc)[0]`;
  try {
    const pageData = await bigFetch(query, !!preview);
    return pageData as PageDocument;
  } catch (err) {
    handler(err);
    return null;
  }
};

// export const usePageDataPreview = (slug: string, initialData: PageDocument) => {
//   const query = groq`*[_type == "page" && slug.current == "${slug}"][0]`;
//   const {data: pageData} = useBigFetchSubscription(query, initialData);
//   return pageData as PageDocument;
// };
