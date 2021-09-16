export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
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
      type: 'array',
      of: [{type: 'reference', to: {type: 'staff'}}],
      validation: Rule => Rule.required().error('Resource must have an associated staffmember')
    },
    {
      name: 'externalContributors',
      title: 'External Contributor(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'externalContributor'}}],
      validation: Rule => Rule.required().error('Resource must have an associated staffmember')
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
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
      description: 'The title of the resource',
      type: 'date',
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
      firstName: 'associatedStaff.0.firstName',
      lastName: 'associatedStaff.0.lastName',
      credentials: 'associatedStaff.0.credentials',
      media: 'mainImage',
      resourceType: 'type.0.title'
    },
    prepare(selection) {
      const {firstName, lastName, credentials, resourceType} = selection
      return Object.assign({}, selection, {
        subtitle: `Type: ${resourceType} | Staff: ${lastName}, ${firstName} ${credentials}`,
      })
    },
  },
}
