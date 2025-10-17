import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'auth',
  title: 'Authentication Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Auth Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
      initialValue: 'Welcome to Cirqah',
    }),

    defineField({
      name: 'subheading',
      title: 'Auth Subheading',
      type: 'string',
      validation: (Rule) => Rule.max(120),
      initialValue:
        'Sign in to explore events, create, shop merch, and connect with creators, and fans shaping culture.',
    }),
    defineField({
      name: 'placeholder',
      title: 'Input Placeholder',
      type: 'string',
      validation: (Rule) => Rule.max(120),
      initialValue: 'Email Address',
    }),
    defineField({
      name: 'submit',
      title: 'Submit Button',
      type: 'text',
      validation: (Rule) => Rule.max(200),
      initialValue: 'Continue with Email',
    }),
    defineField({
      name: 'google',
      title: 'Google Button',
      type: 'string',
      validation: (Rule) => Rule.max(200),
      initialValue: 'Continue with Google',
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'string',
      validation: (Rule) => Rule.max(200),
      initialValue:
        'By signing up, you’re joining a community that celebrates creators, empowers fans, and fuels culture. You agree to our Terms and Privacy Policy.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subheading: 'subheading',
      placeholder: 'placeholder',
      submit: 'submit',
      google: 'google',
    },
    prepare(selection) {
      const {title, subheading, placeholder, submit, google} = selection
      return {
        title: title,
        subtitle: subheading,
        items: placeholder,
        submit: submit,
        google: google,
      }
    },
  },
})
