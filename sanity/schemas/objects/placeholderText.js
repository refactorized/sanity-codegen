export default {
  type: 'object',
  name: 'placeholderText',
  title: 'Placeholder Text',
  fields: [
    {
      name: 'text',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
};
