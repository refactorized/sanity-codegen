import {RiLayoutColumnLine} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const textAndImageBlock = {
  name: 'textAndImageBlock',
  type: 'object',
  title: 'Text & Image Block',
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Main Header',
      description:
        'Optional large main header, renders across the top of this component',
    },
    {
      name: 'subHeader',
      type: 'string',
      title: 'Content Header',
      description: 'Optional sub-header, renders above the body text',
    },
    {
      name: 'body',
      type: 'basicText',
      title: 'Body Copy',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'desktopImage',
      type: 'image',
      title: 'Image',
      codegen: {required: true},
      options: {
        hotspot: true,
      },
      validation: _required,
    },
    {
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile Image',
      options: {
        hotspot: true,
      },
      description:
        'Optional alternate image to use for smaller(mobile) layouts',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'CTA Button Text',
    },
    {
      name: 'buttonLink',
      type: 'link',
      title: 'CTA Button Link',
    },
    {
      name: 'reverse',
      type: 'boolean',
      title: 'Toggle to set image placement',
      description:
        'Default (gray) to set image left; toggle (green) to set image right',
    },
  ],
  preview: {
    select: {
      header: 'header',
      subHeader: 'subHeader',
    },
    prepare(selection) {
      const {header, subHeader} = selection;
      return {
        title: header || subHeader,
        subtitle: header ? subHeader : null,
      };
    },
  },
};

export default textAndImageBlock;
