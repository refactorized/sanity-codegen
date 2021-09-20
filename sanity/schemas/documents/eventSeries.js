export default {
  name: 'eventSeries',
  title: 'Event Series',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'e.g. "Virtual Rounds". Please enter in title case because this is user-facing',
      type: 'string',
      validation: Rule => Rule.required().error('Resource must have a type selected')
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
};
