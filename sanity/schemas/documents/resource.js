export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Resource must have a title')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
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
      type: 'array',
      of: [{type: 'reference', to: {type: 'resourceType'}}],
      validation: Rule => Rule.required().error('Resource must have a type selected')
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      firstName: 'associatedStaff.0.firstName',
      lastName: 'associatedStaff.0.lastName',
      credentials: 'associatedStaff.0.credentials',
      media: 'mainImage',
      resourceType: 'type.name'
    },
    prepare(selection) {
      const {firstName, lastName, credentials, resourceType} = selection
      return Object.assign({}, selection, {
        subtitle: `${resourceType} by ${lastName}, ${firstName} ${credentials}`,
      })
    },
  },
}
