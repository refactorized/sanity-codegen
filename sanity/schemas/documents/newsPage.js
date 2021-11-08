import commonPageFields from '../partials/commonPageFields';
// import teamDepartment from './teamDepartment';
const _required = (Rule) => Rule.required();

export default {
  name: 'newsPage',
  type: 'document',
  title: 'News Page',
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
