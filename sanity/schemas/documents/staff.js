export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      description: 'Can also hold the middle initial',
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
      title: 'Academic Credentials',
      description: 'e.g. PhD, PsyD, MD, etc.',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      description: 'e.g. CEO, Medical Director',
      type: 'string',
      validation: Rule => Rule.required().error('Staff member must have a title')
    },
    {
      name: 'departments',
      title: 'Departments',
      description: 'Please select one or more departments',
      type: 'array',
      of: [{type: 'reference', to: {type: 'department'}}],
      validation: Rule => Rule.required().error('Staff member must have a department')
    },
    {
      name: 'team',
      title: 'Team(s)',
      description: 'Please select one or more team',
      type: 'array',
      of: [{type: 'reference', to: {type: 'departmentTeam'}}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Write a custom slug here, or click “Generate” to auto-populate.',
      options: {
        source: doc => `${doc.firstName}_${doc.lastName}_${doc?.credentials}`
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'If available, this should be a photo of the staff member.  If none is available, a default image will be used',
      options: {
        hotspot: true,
      }, 
    },
    {
      name: 'telephone',
      title: 'Telephone',
      description: '(optional) in the form of (xxx) xxx-xxxx',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      description: '(optional)',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      description: '(optional) in the form of (xxx) xxx-xxxx',
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
        title: `${lastName}, ${firstName} ${typeof(credentials) == "undefined" ? "" : credentials}`,
        subtitle, 
        media
      }
    },
  },
}
