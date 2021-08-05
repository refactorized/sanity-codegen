import {RiLayoutColumnLine} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const textAndImageBlock = {
  name: 'textAndImageBlock',
  type: 'document',
  title: 'Text & Image Block',
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'textAndImageBlock',
    },
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
      title: 'Secondary Header',
      description: 'Optional sub-header, renders above the body text',
    },
    {
      name: 'body',
      type: 'basicText',
      title: 'Body Copy',
      validation: _required,
    },
    {
      name: 'desktopImage',
      type: 'image',
      title: 'Image',
      validation: _required,
    },
    {
      name: 'mobileImage',
      type: 'image',
      title: 'Mobile Image',
      description:
        'Optional alternate image to use for smaller(mobile) layouts',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'CTA Button Text',
      validation: _required,
    },
    {
      name: 'buttonLink',
      type: 'link',
      title: 'CTA Button Link',
      validation: _required,
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
