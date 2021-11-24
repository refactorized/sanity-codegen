import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const stickyCta = {
  name: 'stickyCta',
  type: 'object',
  title: 'Sticky CTA',
  icon: RiWindowFill,
  fields: [
    {
      name: 'visible',
      type: 'boolean',
      title: 'Display if CTA is visible or not',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Sticky CTA label',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'url',
      type: 'link',
      title: 'Sticky CTA url',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'source',
      type: 'string',
      title: 'Sticky CTA Source',
    },
  ],
};

export default stickyCta;
