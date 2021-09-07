export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  validation: Rule => Rule.custom(fields => {
    if (fields.authors.length == 0 && fields.staff == "") return "You must have an author or staff member selected"
    return true
  }),
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
      name: 'authors',
      title: 'Author(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'author'}}],
    },
    {
      name: 'staff',
      title: 'Staff Member(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'staff'}}],
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
      name: 'type',
      title: 'Resource Type',
      type: 'reference',
      to: {type: 'resourceType'},
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
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
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
