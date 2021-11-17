const ptImage = {
  type: 'object',
  name: 'ptImage',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image asset',
    },
    {
      name: 'align',
      title: 'Image alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'width',
      title: 'Image width',
      type: 'string',
      options: {
        list: [
          {title: 'Full', value: 'full'},
          {title: 'Large', value: 'large'},
          {title: 'Medium', value: 'medium'},
          {title: 'Small', value: 'small'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'wrap',
      title: 'Wrap content',
      description: 'wrap following content around this image?',
      type: 'boolean',
      title: 'Wrap content',
    },
  ],
};

export default ptImage;
