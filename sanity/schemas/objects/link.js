const link = {
  type: 'object',
  name: 'link',
  title: 'Link',
  description:
    'Link to internal or external resources. Please enter information in only one field.',
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'link',
    },
    {
      name: 'refLink',
      title: 'Link to another Page',
      type: 'reference',
      to: [{type: 'page'}],
    },
    {
      name: 'url',
      title: 'Manual URL link',
      type: 'url',
    },
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      return true;
    }),
};

export default link;
