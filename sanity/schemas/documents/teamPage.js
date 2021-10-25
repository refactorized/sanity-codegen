import commonPageFields from '../partials/commonPageFields';
// import teamDepartment from './teamDepartment';
const _required = (Rule) => Rule.required();

export default {
  name: 'teamPage',
  type: 'document',
  title: 'Team Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    ...commonPageFields,
    {
      name: 'teamHeroTitle',
      type: 'string',
      title: 'Hero Title',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Hero Caption',
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Staff Cards',
      description: 'Bios for staff members to be displayed on Team Page',
      of: [{type: 'reference', to: {type: 'staff'}}],
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
