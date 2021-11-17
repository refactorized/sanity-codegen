const ptFile = {
  type: 'object',
  name: 'ptFile',
  title: 'File',
  fields: [
    {
      name: 'file',
      type: 'file',
      title: 'File',
      codegen: {required: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Display name',
      description:
        'Optional. Display this as the link text, instead of the filename.',
      type: 'string',
    },
  ],
};

export default ptFile;
