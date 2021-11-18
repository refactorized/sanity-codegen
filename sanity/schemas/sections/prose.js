export default {
  type: 'object',
  name: 'prose',
  title: 'Rich Text Content',
  fields: [
    {
      name: 'content',
      type: 'proseContent',
    },
  ],
  preview: {
    select: {
      firstLine: 'content[0].children[0].text',
    },
    prepare: ({firstLine}) => {
      return {title: firstLine};
    },
  },
};
