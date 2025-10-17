import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'onboardItem',
  title: 'Onboard Item',
  type: 'document',
  fields: [
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      readOnly: true,
    }),
  ],
})
