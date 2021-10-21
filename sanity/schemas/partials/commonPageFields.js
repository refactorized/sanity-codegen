import {isValidSlug} from '../regex';

export default [
  {
    name: 'title',
    type: 'string',
    title: 'Title',
    validation: (Rule) => Rule.required(),
    codegen: {required: true},
  },
  {
    name: 'slug',
    type: 'slug',
    options: {
      source: 'title',
    },
    validation: (Rule) =>
      Rule.unique().custom((slug) => {
        if (!slug?.current) {
          return 'Slug is required';
        }
        if (!isValidSlug(slug.current)) {
          return `Invalid format. Only 0-9, a-z, and '-' allowed. Separate paths with '/'. no leading or trailing '/'.`;
        }
        return true;
      }),
    codegen: {required: true},
  },
  {
    name: 'category',
    title: 'Category',
    type: 'reference',
    to: [{type: 'category'}],
    // validation: (Rule) => Rule.required(),
    // codegen: {required: true},
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
