const introBlock = {
  name: 'introBlock',
  type: 'document',
  title: 'Intro Block',
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'introBlock',
    },
  ],
};

export default introBlock;
