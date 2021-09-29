import {IoLibraryOutline} from 'react-icons/io5'

export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  icon: IoLibraryOutline,
  validation: Rule => Rule.custom(fields => {
    if (typeof(fields.associatedStaff) == 'undefined' && typeof(fields.externalContributors) == 'undefined') return "You must have either a staff member or external contributor."
    return true
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The title of the resource, also used as the page title',
      type: 'string',
      validation: Rule => Rule.required().error('Resource must have a title')
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'This ensures a unique URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      description: 'This appears above the page and will be used in the SEO page description',
      type: 'string',
      validation: Rule => Rule.required().error('Resource must have a short description')
    },
    {
      name: 'associatedStaff',
      title: 'Associated Staffmember(s)',
      description: 'Either a staff member or an external contributor is required.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'staff'}}],
    },
    {
      name: 'externalContributors',
      title: 'External Contributor(s)',
      type: 'array',
      description: 'Either a staff member or an external contributor is required.',
      of: [{type: 'reference', to: {type: 'externalContributor'}}],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'This appears between the resource metadata and body text',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      description: 'e.g. treatment, personality disorders, etc.  Please enter one or more.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'type',
      title: 'Resource Type',
      description: 'e.g. Books, Clinical Perspectives, Conference Presentations, etc.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'resourceType'}}],
      validation: Rule => Rule.required().error('Resource must have a type selected')
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'Enter when the resource was published, if applicable.',
      type: 'date',
      options: {
        dateFormat: 'MM/DD/YYYY',
        calendarTodayLabel: 'Today'
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required().error('Resource must have a body of some sort')
    },
  ],
  orderings: [
    {
      title: 'Newest -> Oldest',
      name: 'publishedAt',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Oldest -> Newest',
      name: 'publishedAt',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'type.0.title'
    },
  },
}
