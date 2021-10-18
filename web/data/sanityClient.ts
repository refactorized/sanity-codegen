import cfg from '../../config';
import resolveReferences, {SanityRefResolver} from './resolveReferences';
import {createPreviewSubscriptionHook, createClient} from 'next-sanity';
import {SanityClient} from '@sanity/client';
import log from '@util/logging';

export const sanityConfig = {
  dataset: cfg.sanity.dataset,
  projectId: cfg.sanity.projectId,
  apiVersion: '2021-10-10',
  useCdn: cfg.prod,
};

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig);

// Set up the client for fetching data in the getProps page functions
export const publicClient = createClient(sanityConfig);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: cfg.sanity.token,
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : publicClient;

//TODO: should fetchOne also work with queries tha return an object vs an array?

/**
 * Fetches a query the is expected to have one result.
 * @param query groq query that is expected to return array of size 1
 * @returns Object, query result, pulled from the array.
 */
export const fetchOne = (query: string) => {
  return publicClient.fetch(query).then((results) => {
    if (results.length == null) {
      throw Error('Query did not return an array');
    } else if (results.length === 0) {
      throw Error('Query returned an empty array');
    } else if (results.length > 1) {
      throw Error('Query returned more than one result');
    }
    return results[0];
  });
};

// && !(_id in path('drafts.**'))

const defaultResolver: SanityRefResolver = {
  refTypes: ['reference'],
  queryFn: (refId) => `*[_id == '${refId}']{...}[0] `,
};

const pageInfoResolver: SanityRefResolver = {
  refTypes: ['pageInfo'],
  queryFn: (refId) =>
    `*[_id == '${refId}']{openGraphImage, slug, title, description, category}[0]`, ///////////// add ordering to always get draft
};

const pageLinkResolver: SanityRefResolver = {
  refTypes: ['pageLink'],
  queryFn: (refId) => `*[_id == '${refId}'][0].slug`,
};

export const replaceReferences = async (
  input: unknown,
  client?: SanityClient,
) => {
  const resolvers = [defaultResolver, pageInfoResolver, pageLinkResolver];
  await resolveReferences(input, client || publicClient, resolvers);
};

export const bigFetch = async (query: string, preview?: boolean) => {
  log.info(`bigFetch(${preview ? 'preview' : 'public'}) ${query}`);
  const client = getClient(!!preview); // possibly get preview-enabled client
  const results = await client.fetch(query);
  await replaceReferences(results, client); // pass in client to enable preview
  return results;
};

// export const useBigFetchSubscription = (query: string, initialData: any) => {
//   const results = usePreviewSubscription(query, {
//     initialData,
//     enabled: true,
//   });

//   return results;
// };

export default publicClient;
