import {CodeSquare} from '@styled-icons/bootstrap/';

const genericEmbed = {
  name: 'genericEmbed',
  type: 'object',
  title: 'Generic embedded object',
  icon: CodeSquare,
  fields: [
    {
      name: 'markup',
      type: 'text',
      title: 'Embed HTML',
      description:
        'Paste code provided by third party here. Make sure you trust the source of this code.',
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Embedded content',
    }),
  },
};

export default genericEmbed;
