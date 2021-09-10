export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name (and middle initial)',
      type: 'string',
      validation: Rule => Rule.required().error('Staff member must have a first name')
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required().error('Staff member must have a last name')
    },
    {
      name: 'credentials',
      title: 'Credentials (e.g. PhD, PsyD, MD, etc.)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Staff member must have a title')
    },
    {
      name: 'departments',
      title: 'Departments',
      type: 'array',
      of: [{type: 'reference', to: {type: 'department'}}],
      validation: Rule => Rule.required().error('Staff member must have a department')
    },
    {
      name: 'team',
      title: 'Teams',
      type: 'array',
      of: [{type: 'reference', to: {type: 'departmentTeam'}}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }, 
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'Last Name, A-Z',
      name: 'lastName',
      by: [
        {field: 'lastName', direction: 'asc'}
      ]
    },
    {
      title: 'Last Name, Z-A',
      name: 'lastName',
      by: [
        {field: 'lastName', direction: 'desc'}
      ]
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'image',
      subtitle: 'departments.0.name',
      credentials: 'credentials'
    },
    prepare(selection) {
      const {firstName, lastName, media, subtitle, credentials} = selection
      return {
        title: `${lastName}, ${firstName} ${credentials}`,
        subtitle, 
        media
      }
    },
  },
}
