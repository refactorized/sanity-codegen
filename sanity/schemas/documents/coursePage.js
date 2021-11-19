import commonPageFields from '../partials/commonPageFields';

export default {
  name: 'coursePage',
  type: 'document',
  title: 'Courses Page',
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
      name: 'featuredCourse',
      title: 'Featured Course',
      type: 'reference',
      description:
        'Event displayed under the "Featured" section above the grid.',
      to: [{type: 'course'}],
    },
    {
      name: 'bottomText',
      type: 'text',
      title: 'Bottom text',
    },
    {
      name: 'admissionsCallout',
      type: 'admissionsCallout',
      title: 'Course Callout',
      description: 'Text and CTA with yellow background.',
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
