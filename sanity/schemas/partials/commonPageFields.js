export default [
  {
    name: 'title',
    type: 'string',
    title: 'Title',
  },
  {
    name: 'slug',
    type: 'slug',
    options: {
      source: 'title',
    },
  },
  {
    name: 'category',
    title: 'Category',
    type: 'reference',
    to: [{type: 'category'}],
  },
  {
    name: 'description',
    type: 'text',
    title: 'Description',
    description: 'This description populates meta-tags on the webpage',
    fieldset: 'metadata',
  },
  {
    name: 'openGraphImage',
    type: 'image',
    title: 'Open Graph Image',
    description: 'Image for sharing previews on Facebook, Twitter etc.',
    fieldset: 'metadata',
  },
];
