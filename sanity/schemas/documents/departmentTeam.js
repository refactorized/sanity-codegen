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
  preview: {
    select: {
      title: 'name',
    },
  },
}
