export default {
  title: 'Review',
  name: 'review',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      title: 'Displayed',
      name: 'isDisplayed',
      type: 'boolean',
      description: 'If checked, review will appear on the website.',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      description: 'Name of the reviewer.',
      readOnly: true,
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      readOnly: true,
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
      description: 'A rating out of 5.',
      readOnly: true,
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'text',
      readOnly: true,
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  initialValue: {
    isDisplayed: false,
  },
};
