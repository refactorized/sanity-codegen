import commonPageFields from '../partials/commonPageFields';
// import teamDepartment from './teamDepartment';
const _required = (Rule) => Rule.required();

export default {
  name: 'eventPage',
  type: 'document',
  title: 'Event Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    ...commonPageFields,
    {
      name: 'interiorHero',
      type: 'interiorHero',
      title: 'Hero',
    },
    {
      name: 'featuredEvent',
      title: 'Featured Event',
      type: 'reference',
      description:
        'Event displayed under the "Featured" section above the grid.',
      to: [{type: 'event'}],
    },
    {
      name: 'textAndImageBlockOne',
      type: 'textAndImageBlock',
      title: 'Text and Image Block 1',
    },
    {
      name: 'textAndImageBlockTwo',
      type: 'textAndImageBlock',
      title: 'Text and Image Block 2',
    },
    {
      name: 'preFooter',
      type: 'preFooter',
      title: 'Pre-Footer',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
};
