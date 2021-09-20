export default {
  name: 'externalContributor',
  title: 'External Contributor',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: Rule => Rule.required().error('Last name is required')
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: Rule => Rule.required().error('Last name is required')
    },
    {
      name: 'credentials',
      title: 'Credentials (e.g. MD, PhD, PsyD, CSW)',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
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
