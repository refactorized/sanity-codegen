import {string} from 'prop-types';
const _required = (Rule) => Rule.required();

const introBlock = {
  name: 'introBlock',
  type: 'object',
  title: 'Intro Block',
  fields: [
    {
      name: 'body',
      type: 'text',
      title: 'Body Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'buttonLink',
      type: 'link',
      title: 'Button Link',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default introBlock;
