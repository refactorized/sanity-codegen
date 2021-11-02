import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const preFooter = {
  name: 'preFooter',
  type: 'object',
  title: 'Pre-Footer',
  icon: RiWindowFill,
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Pre-Footer Header',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'description',
      type: 'string',
      title: 'Pre-Footer Description',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Pre-Footer Button Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'btnUrl',
      type: 'link',
      title: 'Pre-Footer Button Url',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Pre-Footer Phone Number',
    },
  ],
};

export default preFooter;
