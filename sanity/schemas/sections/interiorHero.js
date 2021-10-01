import {RiWindowFill} from 'react-icons/ri';

const interiorHero = {
  name: 'interiorHero',
  type: 'object',
  title: 'Interior Hero Block',
  icon: RiWindowFill,
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'interiorHero',
    },
    {
      name: 'header',
      type: 'string',
      title: 'Interior Hero Header',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Interior Hero Caption',
    },
    {
      name: 'desktopImage',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile Image',
      description:
        'Optional alternate image to use for smaller(mobile) layouts',
    },
    {
      name: 'videoSrc',
      type: 'link',
      title: 'Interior Hero Video Source',
    },
  ],
};

export default interiorHero;
