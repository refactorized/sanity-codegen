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
      type: 'string',
      title: 'Interior Hero Caption',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'desktopImage',
      type: 'image',
      title: 'Image',
      description: 'Image is optional',
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
      title: 'Toggle to set image placement',
      description:
        'Default (gray) to set image left; toggle (green) to set image right',
    },
  ],
};

export default interiorHero;
