import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Main Navigation',
    }),
    defineField({
      name: 'navButton',
      title: 'Nav Button',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'items',
      title: 'navigation Items',
      type: 'array',
      of: [{type: 'navItem'}],
      initialValue: [
        {
          heading: '',
          links: [
            {
              url: 'home',
              label: 'Home',
            },
            {
              url: 'events',
              label: 'Events',
            },
            {url: '/creators', label: 'Creators'},
            {
              url: 'projects',
              label: 'Projects',
              children: [
                {url: '/about', label: 'About Cirqah'},
                {url: '/academy', label: "Cirqah's Academy"},
              ],
            },
          ],
        },
        {
          heading: 'About Cirqah',
          links: [
            {url: 'story', label: 'Our story'},
            {url: 'mission', label: 'Mission and Vision'},
            {url: 'careers', label: 'Careers'},
          ],
        },
        {
          heading: 'Support',
          links: [
            {url: 'help', label: 'Help Center'},
            {url: 'faq', label: 'FAQs'},
            {url: 'contact', label: 'Contact Us'},
          ],
        },
        {
          heading: 'Legal',
          links: [
            {url: 'terms', label: 'Terms and Conditions'},
            {url: 'privacy', label: 'Privacy Policy'},
          ],
        },
        {
          heading: 'Resources',
          links: [
            {url: 'partnership', label: 'Partnership'},
            {url: 'update', label: 'Updates'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      return {title: title, items: items?.map((i: any) => i.label).join(', ')}
    },
  },
})
