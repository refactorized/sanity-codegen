import {IoPersonCircleOutline} from 'react-icons/io5';

export default {
  name: 'staff',
  title: 'Staff',
  type: 'document',
  icon: IoPersonCircleOutline,
  fieldsets: [
    {
      name: 'nameAndCredentials',
      title: 'Staff Name & Credentials',
      options: {
        columns: 3,
      },
    },
    {
      name: 'departmentAndTeam',
      title: 'Department and (optional) Team',
      options: {
        columns: 2,
      },
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      fieldset: 'nameAndCredentials',
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().error('Staff member must have a first name'),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      fieldset: 'nameAndCredentials',
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().error('Staff member must have a last name'),
    },
    {
      name: 'credentials',
      title: 'Academic Credentials',
      fieldset: 'nameAndCredentials',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      description: 'e.g. CEO, Medical Director',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().error('Staff member must have a title'),
    },
    {
      name: 'departments',
      title: 'Departments',
      fieldset: 'departmentAndTeam',
      description: 'Please select one or more departments',
      type: 'array',
      of: [{type: 'reference', to: {type: 'department'}}],
      codegen: {required: true},
      validation: (Rule) =>
        Rule.required().error('Staff member must have a department'),
    },
    {
      name: 'team',
      title: 'Team(s)',
      description: 'Please select one or more team',
      fieldset: 'departmentAndTeam',
      type: 'array',
      of: [{type: 'reference', to: {type: 'departmentTeam'}}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Write a custom slug here, or click “Generate” to auto-populate.',
      options: {
        source: (doc) =>
          `${doc.firstName} ${doc.lastName} ${
            typeof doc.credentials == 'undefined' ? '' : doc.credentials
          }`,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        'If available, this should be a photo of the staff member.  If none is available, a default image will be used',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'telephone',
      title: 'Telephone',
      fieldset: 'contactInfo',
      description: '(optional) in the form of (xxx) xxx-xxxx',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      fieldset: 'contactInfo',
      description: '(optional)',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      description: '(optional) staff biography',
      type: 'basicText',
    },
    {
      name: 'articleCarousel',
      title: 'Article Carousel',
      type: 'articleCarousel',
    },
  ],
  orderings: [
    {
      title: 'Last Name, A-Z',
      name: 'lastName',
      by: [{field: 'lastName', direction: 'asc'}],
    },
    {
      title: 'Last Name, Z-A',
      name: 'lastName',
      by: [{field: 'lastName', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'image',
      subtitle: 'departments.0.name',
      credentials: 'credentials',
    },
    prepare(selection) {
      const {firstName, lastName, media, subtitle, credentials} = selection;
      return {
        title: `${lastName}, ${firstName} ${
          typeof credentials == 'undefined' ? '' : credentials
        }`,
        subtitle,
        media,
      };
    },
  },
};
