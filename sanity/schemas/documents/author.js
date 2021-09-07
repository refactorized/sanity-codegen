export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  validation: Rule => Rule.custom(fields => {
    if (fields.staff == "" && (fields.lastName == "" && fields.firstName == "")) return "You must have a staff member selected or manually enter an author"
    return true
  }),
  fields: [
    {
      name: 'staff',
      title: 'Staff Member(s)',
      type: 'reference',
      to: { type: 'staff' },
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role (e.g. author, editor, reviewer, etc.)',
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
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      staffLastName: 'staff.lastName',
      staffFirstName: 'staff.firstName',
      staffMedia: 'staff.image',
      image: 'image',
      role: 'role'
    },
    prepare(selection) {
      const {firstName, lastName, staffFirstName,staffLastName, staffMedia, image} = selection
      return {
        title: (staffLastName != "") ? `${staffLastName}, ${staffFirstName}` : `${lastName}, ${firstName}`,
        subtitle: subtitle = (role) ? role : "",
        media: media = (staffMedia) ? staffMedia : image
      }
    },
  },
}
