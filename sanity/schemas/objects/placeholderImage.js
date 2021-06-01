const placeholderImage = {
  type: 'object',
  name: 'placeholderImage',
  title: 'Placeholder Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {name: 'title', type: 'string'},
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};

export default placeholderImage;
