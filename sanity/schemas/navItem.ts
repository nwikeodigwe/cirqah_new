import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'navItem',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'navLink'}],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      links: 'links',
    },
    prepare(selection) {
      const {heading, links} = selection
      const count = Array.isArray(links) ? links.length : 0
      return {
        title: heading || 'Navigation Group',
        links: `${count} link${count === 1 ? '' : 's'}`,
      }
    },
  },
})
