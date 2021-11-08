import commonPageFields from '../partials/commonPageFields';
// import teamDepartment from './teamDepartment';
const _required = (Rule) => Rule.required();

export default {
  name: 'resourcePage',
  type: 'document',
  title: 'Resource Page',
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
      name: 'featuredResource',
      title: 'Featured Resource',
      type: 'reference',
      description:
        'Resource displayed under the "Featured" section above the grid.',
      to: [{type: 'resource'}],
    },
    {
      name: 'textAndImageBlock',
      type: 'textAndImageBlock',
      title: 'Text and Image Block',
    },
    {
      name: 'articleCarousel',
      title: 'Article Carousel',
      type: 'articleCarousel',
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
