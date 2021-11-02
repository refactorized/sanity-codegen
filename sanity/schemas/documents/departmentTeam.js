import client from '../../sanityClient';

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
      validation: (Rule) => Rule.required().error('Team must have a name'),
      codegen: {required: true},
    },
    {
      name: 'associatedDepartment',
      title: 'Associated Department',
      description: 'e.g. Administration, Therapy, etc.',
      type: 'reference',
      to: {type: 'department'},
      validation: (Rule) =>
        Rule.required().error('The team must have department selected'),
      codegen: {required: true},
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Click “Generate” to auto-populate.',
      validation: (Rule) => Rule.required().error('You must generate a slug'),
      codegen: {required: true},
      options: {
        source: async (doc) => {
          const department = await client.getDocument(
            doc.associatedDepartment._ref,
          );
          return `${department.name}__${doc.name}`;
        },
      },
    },
  ],
  orderings: [
    {
      title: 'Name, A-Z',
      name: 'name',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Name, Z-A',
      name: 'name',
      by: [{field: 'name', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'associatedDepartment.name',
    },
  },
};
