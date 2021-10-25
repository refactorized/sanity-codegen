import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const calloutBand = {
  name: 'calloutBand',
  type: 'object',
  title: 'Callout Block',
  icon: RiWindowFill,
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Callout Header',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'description',
      type: 'text',
      title: 'Callout Description',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Callout Button Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'btnUrl',
      type: 'link',
      title: 'Callout Button Url',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default calloutBand;
