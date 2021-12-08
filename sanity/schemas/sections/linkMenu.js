import {RiLayoutColumnLine} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

export const linkMenuLink = {
  title: 'Link List',
  type: 'object',
  name: 'linkMenuLink',
  // ^^this determines the type name
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Link Title',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'url',
      type: 'link',
      title: 'Link Url',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

const linkMenu = {
  name: 'linkMenu',
  type: 'object',
  title: 'Link Menu Block',
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: 'imgUrl',
      type: 'image',
      title: 'Image Desktop / Tablet',
      description: 'Tall image to side of list. (640x1080p 16:27)',
      validation: _required,
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imgMobile',
      type: 'image',
      title: 'Mobile Image',
      description: 'Landscape image atop of list. (1080x420 18:7)',
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
      name: 'header',
      type: 'string',
      title: 'Link Menu Header',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'description',
      type: 'text',
      title: 'Link Menu Description',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Link Menu Button Text',
    },
    {
      name: 'btnUrl',
      type: 'link',
      title: 'Link Menu Button Url',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Link Menu Link List',
      of: [{type: 'linkMenuLink'}],
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default linkMenu;
