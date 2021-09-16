export default {
  name: 'departmentTeam',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Team Name',
      type: 'string',
      validation: Rule => Rule.required().error('Team must have a name')
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    },
  },
}
