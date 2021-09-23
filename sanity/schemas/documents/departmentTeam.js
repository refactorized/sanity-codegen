export default {
  name: 'departmentTeam',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Team Name',
      description: 'e.g. Communications team, etc.',
      type: 'string',
      validation: Rule => Rule.required().error('Team must have a name')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Write a custom slug here, or click “Generate” to auto-populate.',
      validation: Rule => Rule.required().error('Department must have a name'),
      options: {
        source: doc => `${doc.associatedDepartment.slug}__${doc.name}`
      },
    },
    {
      name: 'associatedDepartment',
      title: 'Associated Department',
      description: 'e.g. Administration, Therapy, etc.',
      type: 'reference',
      to: {type: 'department'},
      validation: Rule => Rule.required().error('The team must have department selected')
    }
  ],
  orderings: [
    {
      title: 'Name, A-Z',
      name: 'name',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Name, Z-A',
      name: 'name',
      by: [
        {field: 'name', direction: 'desc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'associatedDepartment.name'
    },
  },
}
