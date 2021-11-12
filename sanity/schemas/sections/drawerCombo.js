import {RiLayoutColumnLine} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

export const drawerComboDrawer = {
  title: 'Drawer Combo Drawer',
  type: 'object',
  name: 'drawerComboDrawer',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Drawer Combo Icon',
      description: 'Icon is Optional',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Drawer Combo Title',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'details',
      type: 'text',
      title: 'Drawer Combo details',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

const drawerCombo = {
  name: 'drawerCombo',
  type: 'object',
  title: 'Drawer Combo Block',
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Drawer Combo Title',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'copy',
      type: 'string',
      title: 'Drawer Combo Copy',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'url',
      type: 'link',
      title: 'Drawer Combo Url',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Drawer Combo Label',
    },
    {
      name: 'drawers',
      type: 'array',
      title: 'Drawer Combo Drawer List',
      of: [{type: 'drawerComboDrawer'}],
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default drawerCombo;
