const link = {
  type: 'object',
  name: 'link',
  title: 'Link',
  description:
    'Link to internal or external resources. Please enter information in only one field.',
  fields: [
    {
      name: 'slug',
      title: 'Internal Page',
      type: 'pageLink',
    },
    {
      name: 'url',
      title: 'Manual URL link',
      type: 'string',
    },
  ],
  // TODO: actually validate maybe? (from adam, to adam)
  validation: (Rule) =>
    Rule.custom((fields) => {
      return true;
    }),
};

export default link;
