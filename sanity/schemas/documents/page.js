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
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
