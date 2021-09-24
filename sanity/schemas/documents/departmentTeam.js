import client from 'part:@sanity/base/client';

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
      name: 'associatedDepartment',
      title: 'Associated Department',
      description: 'e.g. Administration, Therapy, etc.',
      type: 'reference',
      to: {type: 'department'},
      validation: Rule => Rule.required().error('The team must have department selected')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Click “Generate” to auto-populate.',
      validation: Rule => Rule.required().error('You must generate a slug'),
      options: {
        source: async doc => {
          const department = await client.getDocument(doc.associatedDepartment.__ref);
          return `${doc.department.name}__${doc.name}`
        }
      },
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
      subtitle: 'associatedDepartment.name'
    },
  },
}
