const ptEmbed = {
  type: 'object',
  name: 'ptEmbed',
  title: 'Generic Embed',
  fields: [
    {
      name: 'markup',
      title: 'Embed HTML',
      description:
        'Paste code provided by third party here. Make sure you trust the source of this code.',
      type: 'text',
    },
  ],
};

export default ptEmbed;
