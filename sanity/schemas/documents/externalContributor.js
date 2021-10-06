import {IoPeopleCircleSharp} from 'react-icons/io5';

export default {
  name: 'externalContributor',
  title: 'External Contributor',
  type: 'document',
  icon: IoPeopleCircleSharp,
  fieldsets: [
    {
      name: 'contributorNames',
      title: 'Contributor Name & Credentials',
      options: {
        columns: 3,
      },
    },
  ],
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      fieldset: 'contributorNames',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) => Rule.required().error('Last name is required'),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      fieldset: 'contributorNames',
      type: 'string',
      codegen: {required: true},
      validation: (Rule) => Rule.required().error('Last name is required'),
    },
    {
      name: 'credentials',
      title: 'Credentials',
      fieldset: 'contributorNames',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      description: '(optional) if left empty will use default image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'Name, A-Z',
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
      image: 'image',
      credentials: 'credentials',
    },
    prepare(selection) {
      const {firstName, lastName, image, credentials} = selection;
      return {
        title: `${lastName}, ${firstName} ${credentials}`,
        media: image,
      };
    },
  },
};
