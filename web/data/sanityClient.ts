import sanityClient from '@sanity/client';
import config from '../../config';
import {AsyncWalkBuilder} from 'walkjs';

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

/**
 * This function will mutate reference-objects:
 * The keys of a reference-object will be deleted and the keys of the reference-
 * document will be added.
 * eg:
 * { _type: 'reference', _ref: 'abc' }
 * becomes:
 * { _type: 'document', _id: 'abc', ...allOtherDocumentProps }
 * CREDIT: https://github.com/sanity-io/GROQ/issues/21#issuecomment-862284356
 */
export async function replaceReferences(
  input: unknown,
  resolvedIds: string[] = [],
) {
  await new AsyncWalkBuilder()
    .withGlobalFilter((x) => x.val?._type === 'reference')
    .withSimpleCallback(async (node) => {
      const refId = node.val._ref;

      if (typeof refId !== 'string') {
        throw new Error('node.val._ref is not set');
      }

      if (resolvedIds.includes(refId)) {
        const ids = `[${resolvedIds.concat(refId).join(',')}]`;
        throw new Error(
          `Ran into an infinite loop of references, please investigate the following sanity document order: ${ids}`,
        );
      }

      const doc = await client.fetch(`*[_id == '${refId}']{...}[0]`);

      // recursively replace references
      await replaceReferences(doc, resolvedIds.concat(refId));

      /**
       * Here we'll mutate the original reference object by clearing the
       * existing keys and adding all keys of the reference itself.
       */
      Object.keys(node.val).forEach((key) => delete node.val[key]);
      Object.keys(doc).forEach((key) => (node.val[key] = doc[key]));
    })
    .walk(input);
}

export default client;
