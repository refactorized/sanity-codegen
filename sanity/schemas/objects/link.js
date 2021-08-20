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
      name: 'slug',
      title: 'Internal page slug',
      type: 'slug',
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
