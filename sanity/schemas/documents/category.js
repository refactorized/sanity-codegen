import {IoPricetagsOutline} from 'react-icons/io5'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: IoPricetagsOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
