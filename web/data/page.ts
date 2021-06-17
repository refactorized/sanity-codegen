import client from './sanityClient';
import groq from 'groq';

// promise style
export const getPaths = () => {
  const pathQuery = groq`*[_type == "page"]`;
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
  const pageDataQuery = groq`*[_type == "page" && slug.current == "home"]`;
  try {
    const results = await client.fetch(pageDataQuery);
    if (results.length !== 1) {
      return null;
    }
    // // refine results
    // const page = results[0].page
    // // todo sanity types d.ts
    // const blocks = page.blocks.map( (block: unknown): => {})
    // )

    return results[0];
  } catch (err) {
    throw new Error(err);
  }
};
