import commonPageFields from '../partials/commonPageFields';

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    ...commonPageFields,
    {
      name: 'blocks',
      type: 'array',
      title: 'Content Blocks',
      description: 'the block components that make up the page body',
      // TODO: automate the population of this field via magic.js
      of: [
        {type: 'admissionsCallout'},
        {type: 'carousel'},
        {type: 'flexCollar'},
        {type: 'introBlock'},
        {type: 'linkMenu'},
        {type: 'placeholder'},
        {type: 'preFooter'},
        {type: 'prose'},
        {type: 'textAndImageBlock'},
        {type: 'heroBlock'},
        {type: 'calloutBand'},
      ],
    },
  ],
  orderings: [
    {
      title: 'Title, A-Z',
      name: 'title',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Title, Z-A',
      name: 'title',
      by: [{field: 'title', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
