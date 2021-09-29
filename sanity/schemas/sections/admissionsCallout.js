const admissionsCallout = {
  name: 'admissionsCallout',
  type: 'object',
  title: 'Admissions Callout Block',
  fields: [
    {
      name: 'blockType',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: 'admissionsCallout',
    },
    {
      name: 'contactHeader',
      type: 'string',
      title: 'Admissions Callout Contact Header',
    },
    {
      name: 'contactDescription',
      type: 'string',
      title: 'Admissions Callout Contact Description',
    },
    {
      name: 'admissionHeader',
      type: 'string',
      title: 'Admissions Callout Header',
    },
    {
      name: 'admissionDescription',
      type: 'string',
      title: 'Admissions Callout Description',
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Admissions Callout Button Text',
    },
    {
      name: 'btnUrl',
      type: 'link',
      title: 'Admissions Callout Button Url',
    },
    {
      name: 'boxlessbtnText',
      type: 'string',
      title: 'Admissions Callout Boxless Button Text',
    },
    {
      name: 'boxlessbtnUrl',
      type: 'link',
      title: 'Admissions Callout Boxless Button Url',
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Admissions Callout Phone Number',
    },
  ],
};

export default admissionsCallout;
