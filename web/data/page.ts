import client, {fetchOne} from './sanityClient';
import {handler} from '../util/logging';
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
export const getPageData = async (slug: string): Promise<PageDocument> => {
  const query = groq`*[_type == "page" && slug.current == "${slug}" && !(_id in path('drafts.**'))]`;

  try {
    const pageData = await fetchOne(query);

    // // refine results
    // const page = results[0].page
    // // todo sanity types d.ts
    // const blocks = page.blocks.map( (block: unknown): => {})
    // )
    return pageData as PageDocument;
  } catch (err) {
    handler(err);
    return null;
  }
};
