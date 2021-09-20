export default {
  name: 'department',
  title: 'Department',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Please enter the name of the department, e.g. "Admissions"',
      type: 'string',
      validation: Rule => Rule.required().error('Department must have a name')
    },
    {
      name: 'teams',
      title: 'Teams',
      description: '(optional) If the department has teams, please add them here.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'departmentTeam'}}],
    },
  ],
  orderings: [
    {
      title: 'Department Name, A-Z',
      name: 'name',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Department Name, Z-A',
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
