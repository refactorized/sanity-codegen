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
      //^^ This Informs Codegen that it's required
      //^^Validation is done as a lambda
      validation: _required,
      //^^^ This is the Sanity Validation
      //^^ This is where we can create function and be specific about validation
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
      name: 'title',
      type: 'string',
      title: 'Combo Card Title',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'body',
      type: 'text',
      title: 'Combo Card Body',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'ctaText',
      type: 'string',
      title: 'Combo Card Cta Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'ctaLink',
      type: 'link',
      title: 'Combo Card Cta Link',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Combo Card List',
      of: [{type: 'comboCardCards'}],
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default comboCard;
