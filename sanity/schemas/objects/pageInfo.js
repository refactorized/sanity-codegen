/**
 * This is a reference type that specifically points to any page. Downstream
 * code will replace this with a subset of data from the referenced page.  This
 * data does not contain further references, and there fore can't be expanded into
 * a circular reference
 */
export default {
  name: 'pageInfo',
  title: 'Page Info',
  type: 'reference',
  to: [{type: 'page'}], // TODO: add pageTypes array to partials
};
