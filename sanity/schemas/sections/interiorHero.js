import {RiWindowFill} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const interiorHero = {
  name: 'interiorHero',
  type: 'object',
  title: 'Interior Hero Block',
  icon: RiWindowFill,
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Interior Hero Header',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'caption',
      type: 'text',
      title: 'Interior Hero Caption',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'desktopImage',
      type: 'image',
      title: 'Image',
      description: 'Image is optional',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile Image',
      description:
        'Optional alternate image to use for smaller(mobile) layouts',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Alt Text',
    },
    {
      name: 'videoSrc',
      type: 'file',
      title: 'Interior Hero Video Source',
      accept: 'mp4',
      description: 'Video is optional: upload video file in mp4 format',
    },
  ],
};

export default interiorHero;
