import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const calloutBand = {
  name: 'calloutBand',
  type: 'object',
  title: 'Callout Block',
  icon: RiWindowFill,
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'calloutBand',
    },
    {
      name: 'header',
      type: 'string',
      title: 'Callout Header',
      //title if for UI in sanity
    },
    {
      name: 'description',
      type: 'string',
      title: 'Callout Description',
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Callout Button Text',
    },
    {
      name: 'btnUrl',
      type: 'link',
      title: 'Callout Button Url',
    },
  ],
};

export default calloutBand;
