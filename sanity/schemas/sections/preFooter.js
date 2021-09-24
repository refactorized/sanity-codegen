import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const preFooter = {
  name: 'preFooter',
  type: 'object',
  title: 'Pre-Footer',
  icon: RiWindowFill,
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'preFooter',
    },
    {
      name: 'header',
      type: 'string',
      title: 'Pre-Footer Header',
      //title if for UI in sanity
    },
    {
      name: 'description',
      type: 'string',
      title: 'Pre-Footer Description',
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Pre-Footer Button Text',
    },
    {
      name: 'btnUrl',
      type: 'link',
      title: 'Pre-Footer Button Url',
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Pre-Footer Phone Number',
    },
  ],
};

export default preFooter;
