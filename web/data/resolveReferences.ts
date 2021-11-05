import {SanityClient} from '@sanity/client';
import {AsyncWalkBuilder} from 'walkjs';

export interface SanityRefResolver {
  // sanity _type names to match, 'reference' for standard refs
  refTypes: string[];
  // Function to generate groq query given the refId as a string param
  queryFn: (refId: string) => string;
}

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
export default async function resolveReferences(
  input: unknown,
  client: SanityClient,
  resolvers: SanityRefResolver[],
  resolvedIds: string[] = [],
) {
  const walker = new AsyncWalkBuilder();

  resolvers.forEach((resolver) => {
    walker.withCallback({
      filters: [(node) => resolver.refTypes.includes(node.val?._type)],
      callback: async (node) => {
        // get refId and ensure we haven't been here (more than once) before
        const refId = node.val._ref;
        if (resolvedIds.filter((id) => id == refId).length > 1) {
          const ids = `[${resolvedIds.concat(refId).join(',')}]`;
          throw new Error(
            `Ran into an infinite loop of references, please investigate the following sanity document order: ${ids}`,
          );
        }
        // we mutate the hell out of doc.
        let doc = await client.fetch(resolver.queryFn(refId));

        resolveReferences(doc, client, resolvers, resolvedIds.concat(refId));

        // replace all of original node with props from doc
        Object.keys(node.val).forEach((key) => delete node.val[key]);
        Object.keys(doc).forEach((key) => (node.val[key] = doc[key]));
      },
    });
  });

  // do the thing, side effects abound.
  await walker.walk(input);
  return input;
}
