import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Company',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
