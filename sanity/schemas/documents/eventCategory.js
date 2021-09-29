import {IoFilterCircleOutline} from 'react-icons/io5'

export default {
  name: 'eventCategory',
  title: 'Event Category',
  type: 'document',
  icon: IoFilterCircleOutline,
  fields: [
    {
      name: 'name',
      title: 'Name',
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
}
