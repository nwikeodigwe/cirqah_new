import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'navLink',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      hidden: ({parent}) => !!parent?.page,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'children',
      title: 'Sub-items (Dropdown)',
      type: 'array',
      of: [{type: 'navLink'}],
      description: 'Optional submenu items for dropdown navigation',
    }),
  ],
})
