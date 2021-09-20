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
    },
  },
}
