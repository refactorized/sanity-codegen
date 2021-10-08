import {RiLayoutColumnLine} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

export const comboCardCards = {
  title: 'Each Card',
  type: 'object',
  name: 'comboCardCards',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Combo Card Icon',
      description: 'Icon is Optional',
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Combo Card Headline',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'description',
      type: 'string',
      title: 'Combo Card Description',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

const comboCard = {
  name: 'comboCard',
  type: 'object',
  title: 'Combo Card Block',
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'comboCard',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Combo Card Title',
    },
    {
      name: 'body',
      type: 'string',
      title: 'Combo Card Body',
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Combo Card List',
      of: [{type: 'comboCardCards'}],
    },
  ],
};

export default comboCard;
