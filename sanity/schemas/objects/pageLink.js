/**
 * This is a reference type that specifically points to any page. Downstream
 * code will replace this with the referenced page's url only.
 */
export default {
  name: 'pageLink',
  title: 'Page Link',
  type: 'reference',
  to: [{type: 'page'}], // TODO: add pageTypes array to partials
};
