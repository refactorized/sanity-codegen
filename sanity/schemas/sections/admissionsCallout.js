import {RiLayoutColumnLine} from 'react-icons/ri';
const _required = (Rule) => Rule.required();

const admissionsCallout = {
  name: 'admissionsCallout',
  type: 'object',
  title: 'Admissions Callout Block',
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: 'contactHeader',
      type: 'string',
      title: 'Admissions Callout Contact Header',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'contactDescription',
      type: 'string',
      title: 'Admissions Callout Contact Description',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'admissionHeader',
      type: 'string',
      title: 'Admissions Callout Header',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'admissionDescription',
      type: 'string',
      title: 'Admissions Callout Description',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Admissions Callout Button Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'btnUrl',
      type: 'link',
      title: 'Admissions Callout Button Url',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'boxlessbtnText',
      type: 'string',
      title: 'Admissions Callout Boxless Button Text',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'boxlessbtnUrl',
      type: 'link',
      title: 'Admissions Callout Boxless Button Url',
      codegen: {required: true},
      validation: _required,
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Admissions Callout Phone Number',
      codegen: {required: true},
      validation: _required,
    },
  ],
};

export default admissionsCallout;
