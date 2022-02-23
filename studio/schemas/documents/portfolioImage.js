import { getCount } from '../helpers';

export default {
  title: 'Portfolio',
  name: 'portfolio',
  type: 'document',
  fields: [
    {
      title: 'Front Page',
      name: 'onLanding',
      type: 'boolean',
      description: 'If checked, portfolio image will appear on the front page.',
      validation: (Rule) =>
        Rule.required().custom(async (value, context) => {
          const limit = 4;
          const type = context.document._type;
          const count = await getCount(type, { onLanding: true });

          if (value && count === limit) {
            return `Limit of ${limit} ${type} images on the front page has been reached. Please uncheck another one first.`;
          }

          return true;
        }),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      required: true,
    },
  ],
  initialValue: {
    onLanding: false,
  },
  preview: {
    select: {
      media: 'image',
      title: 'title',
      onLanding: 'onLanding',
    },
    prepare(selection) {
      const { media, title, onLanding } = selection;
      return {
        title,
        subtitle: onLanding ? 'Front page 🎉' : '',
        media,
      };
    },
  },
};
