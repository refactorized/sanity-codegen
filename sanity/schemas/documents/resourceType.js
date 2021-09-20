export default {
  name: 'resourceType',
  title: 'Resource Type',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'e.g. Books, Conference Presentations, etc.  Please enter in title case.',
      type: 'string',
      validation: Rule => Rule.required().error('Resource Type must have a title')
    },
  ],
}
