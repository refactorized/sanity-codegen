export default {
  name: 'externalContributor',
  title: 'External Contributor',
  type: 'document',
  fieldsets: [
    {
      name: 'contributorNames',
      title: 'Contributor Name & Credentials',
      options: {
        columns: 3
      },
    },
  ],
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      description: 'Can also hold middle initial or name',
      fieldset: 'contributorNames',
      type: 'string',
      validation: Rule => Rule.required().error('Last name is required')
    },
    {
      name: 'lastName',
      title: 'Last Name',
      description: 'Contributor\'s Last Name',
      fieldset: 'contributorNames',
      type: 'string',
      validation: Rule => Rule.required().error('Last name is required')
    },
    {
      name: 'credentials',
      title: 'Credentials',
      description: '(optional) e.g. MD, PhD, PsyD, CSW',
      fieldset: 'contributorNames',
      type: 'string'
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
      by: [
        {field: 'lastName', direction: 'asc'}
      ]
    },
    {
      title: 'Last Name, Z-A',
      name: 'lastName',
      by: [
        {field: 'lastName', direction: 'desc'}
      ]
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      image: 'image',
      credentials: 'credentials'
    },
    prepare(selection) {
      const {firstName, lastName, image, credentials} = selection
      return {
        title: `${lastName}, ${firstName} ${credentials}`,
        media: image,
      }
    },
  },
}
