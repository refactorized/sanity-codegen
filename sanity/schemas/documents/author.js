export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  validation: Rule => Rule.custom(fields => {
    if (fields.staff.length == 0 && (fields.lastName == "" && fields.firstName == "")) return "You must have a staff member selected or manually enter an author"
    return true
  }),
  fields: [
    {
      name: 'staff',
      title: 'Staff Member(s)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'staff'}}],
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
      title: 'firstName',
      lastName: 'lastName',
      media: 'image',
    },
    prepare(selection) {
      const {title, lastName, media} = selection
      return {
        title: `${lastName}, ${title}`,
        media
      }
    },
  },
}
