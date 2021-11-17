const ptFloatBreak = {
  type: 'object',
  name: 'ptFloatBreak',
  title: 'Float break',
  fields: [{type: 'string', name: 'stub', hidden: true, readOnly: true}],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Float break',
      subtitle: 'Stop wrapping text around componets here',
    }),
  },
};

export default ptFloatBreak;
