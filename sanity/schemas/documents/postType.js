export default {
  name: 'postType',
  title: 'Post Type',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'This helps to organize the posts and is used to ensure they appear in the right places.',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'Title, A-Z',
      name: 'title',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    },
    {
      title: 'Title, Z-A',
      name: 'title',
      by: [
        {field: 'title', direction: 'desc'}
      ]
    },
  ],
}
