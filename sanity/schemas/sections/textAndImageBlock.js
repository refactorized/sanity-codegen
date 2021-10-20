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
      codegen: {required: true},
      validation: _required,
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
    },
    {
      name: 'buttonLink',
      type: 'link',
      title: 'CTA Button Link',
    },
    {
      name: 'reverse',
      type: 'boolean',
      title: 'Define Image to be Left or Right',
      description:
        'Default (and color grey) is Image to the Left. Green is Image to the Right',
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
