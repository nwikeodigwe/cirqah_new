import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'onboard',
  title: 'Onboarding Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Flow Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
      initialValue: 'Your Journey Into Culture Starts Here',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.max(500),
      initialValue:
        'Tell us who you are, and we’ll connect you with the experiences and creators that matter most. This isn’t just sign-up, it’s your gateway into Cirqah.',
    }),
    defineField({
      name: 'items',
      title: 'Onboarding ',
      type: 'array',
      of: [{type: 'onboardItem'}],
      initialValue: [
        {
          subheading: 'Discover, Experience, Connect',
          title: "I'm a fan",
          description:
            'Join a community of fans exploring concerts, festivals, sports cultural events. Save favorites, shop exclusive merch, and be part of unforgettable moments.',
        },
        {
          subheading: 'Host, Sell, Grow',
          title: "I'm a creator",
          description:
            'Bring your vision to life with Cirqah. Host events, drop merchandise, and build your audience, all from one powerful dashboard designed for creators like you.',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subheading: 'subheading',
      description: 'description',
      items: 'items',
    },
    prepare(selection) {
      const {title, subheading, description, items} = selection
      return {
        title: title,
        subheading: subheading,
        items: items,
        description: description,
      }
    },
  },
})
