import sanityClient from '@sanity/client';
import {result} from 'lodash';
import config from '../../config';

const client = sanityClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  token: config.sanity.token || '', // blank = anonymous user / read only
  useCdn: false, // `false` if you want to ensure fresh data
});

//TODO: should fetchOne also work with queries tha return an object vs an array?

/**
 * Fetches a query the is expected to have one result.  Throws
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

export default client;
