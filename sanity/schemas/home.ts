import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Home Title',
      type: 'string',
    }),
    defineField({
      name: 'home',
      title: 'Home Image',
      type: 'image',
    }),
  ],

  preview: {
    select: {
      home: 'home',
    },
    prepare(selection) {
      const {home} = selection
      return {
        title: 'Home Page',
        media: home,
      }
    },
  },
})
