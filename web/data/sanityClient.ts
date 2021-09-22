import sanityClient from '@sanity/client';
import config from '../../config';
import resolveReferences, {SanityRefResolver} from './resolveReferences';

const client = sanityClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  token: config.sanity.token || '', // blank = anonymous user / read only
  useCdn: false, // `false` if you want to ensure fresh data
});

//TODO: should fetchOne also work with queries tha return an object vs an array?

/**
 * Fetches a query the is expected to have one result.
 * @param query groq query that is expected to return array of size 1
 * @returns Object, query result, pulled from the array.
 */
export const fetchOne = (query: string) => {
  return client.fetch(query).then((results) => {
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

const defaultResolver: SanityRefResolver = {
  refTypes: ['reference'],
  queryFn: (refId) => `*[_id == '${refId}']{...}[0]`,
};

const pageInfoResolver: SanityRefResolver = {
  refTypes: ['pageInfo'],
  queryFn: (refId) =>
    `*[_id == '${refId}']{openGraphImage, slug, title, description, category}[0]`,
};

const pageLinkResolver: SanityRefResolver = {
  refTypes: ['pageLink'],
  queryFn: (refId) => `*[_id == '${refId}'][0].slug`,
};

export const replaceReferences = async (
  input: unknown,
  resolvedIds: string[] = [],
) => {
  const resolvers = [defaultResolver, pageInfoResolver, pageLinkResolver];
  await resolveReferences(input, client, resolvers, resolvedIds);
};

export default client;
