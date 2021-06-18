export default {
  type: 'object',
  name: 'prose',
  title: 'Rich Text Content',
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'prose',
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
};
