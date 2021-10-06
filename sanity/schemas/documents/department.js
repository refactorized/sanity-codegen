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
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().error('Department must have a name'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Write a custom slug here, or click “Generate” to auto-populate.',
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().error('Department must have a slug'),
      options: {
        source: 'name',
      },
    },
  ],
  orderings: [
    {
      title: 'Department Name, A-Z',
      name: 'name',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Department Name, Z-A',
      name: 'name',
      by: [{field: 'name', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
