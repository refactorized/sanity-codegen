import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

export const heroCard = {
  title: 'Hero Card',
  type: 'object',
  name: 'heroCard',
  fields: [
    {
      name: 'card_eyebrow',
      type: 'string',
      title: 'Eyebrow',
      description: 'Text on top of card',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'card_copy',
      type: 'text',
      title: 'Copy',
      description: 'Main copy on card',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'card_link',
      type: 'link',
      title: 'Card URL',
      description: 'Destination page or URL after clicking on card',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

const heroBlock = {
  name: 'heroBlock',
  type: 'object',
  title: 'Hero Block',
  icon: RiWindowFill,
  fields: [
    {
      name: 'bgImage',
      type: 'image',
      title: 'Hero Background Image',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'title',
      type: 'string',
      title: 'Hero Title',
      codegen: {required: true},
      validation: _required,
    },

    {
      name: 'hero_cards',
      type: 'array',
      title: 'Hero Cards',
      description: 'Adds clickable cards to the hero',
      of: [{type: 'heroCard'}],
      codegen: {required: true},
      validation: (Rule) => Rule.min(1).max(2).required(),
      // .required() is added to make it + required
    },
  ],
};

export default heroBlock;
