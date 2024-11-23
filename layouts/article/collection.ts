export const Collection = {
  label: 'Articles',
  name: 'articles',
  i18n: {
    structure: 'multiple_files',
  },
  folder: 'content/newsroom/articles',
  create: true,
  slug: '{{slug}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      i18n: true,
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime',
      format: 'YYYY-MM-DDTHH:mm:ssZ',
    },
    {
      label: 'Author(s)',
      name: 'author',
      widget: 'relation',
      collection: 'people',
      value_field: '/who-we-are/team/people/{{slug}}',
      display_fields: ['title'],
      search_fields: ['title'],
      required: false,
      multiple: true,
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'select',
      options: ['case', 'news', 'updates', 'culture'],
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'text',
      i18n: true,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      public_folder: '/images/articles',
      media_folder: '/assets/images/articles',
      required: false,
    },
    {
      label: 'alt',
      name: 'Alt tag for image',
      widget: 'string',
      i18n: true,
      required: false,
    },
    {
      label: 'case',
      required: false,
      name: 'case',
      widget: 'object',
      collapsed: true,
      fields: [
        {
          label: 'Case ID',
          name: 'caseid',
          widget: 'string',
          required: false,
        },
        {
          label: 'Case closed',
          name: 'closed',
          widget: 'boolean',
          required: false,
        },
        {
          label: 'Case link',
          name: 'link',
          widget: 'string',
          required: false,
        },
        {
          label: 'Case lead',
          name: 'lead',
          widget: 'string',
          required: false,
        },
        {
          label: 'Case lead Link',
          name: 'leadlink',
          widget: 'string',
          required: false,
        },
        {
          label: 'Researchers',
          name: 'researchers',
          widget: 'list',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
            },
            {
              label: 'Link',
              name: 'link',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          label: 'Researchers (linked)',
          name: 'researchers_people',
          widget: 'relation',
          collection: 'people',
          value_field: '/who-we-are/team/people/{{slug}}',
          display_fields: ['title'],
          search_fields: ['title'],
          multiple: true,
          required: false,
        },
      ],
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      i18n: true,
    },
    {
      label: 'Enable FAQ',
      name: 'faq_enabled',
      widget: 'boolean',
      default: false,
    },
    {
      label: 'FAQ',
      required: false,
      name: 'faq',
      widget: 'object',
      collapsed: true,
      fields: [
        {
          label: 'FAQ Title',
          name: 'title',
          widget: 'string',
          default: 'faq',
          required: false,
          i18n: true,
        },
        {
          label: 'FAQ Opener',
          name: 'opener',
          widget: 'string',
          required: false,
          i18n: true,
        },
        {
          label: 'FAQ Intro',
          name: 'intro',
          widget: 'text',
          required: false,
          i18n: true,
        },
        {
          label: "FAQ 'All FAQ' Url",
          name: 'url',
          widget: 'string',
          required: false,
          i18n: true,
        },
        {
          label: 'FAQ groups',
          name: 'faqgroups',
          widget: 'list',
          i18n: true,
          required: false,
          fields: [
            {
              label: 'heading',
              name: 'heading',
              widget: 'string',
              required: false,
              i18n: true,
            },
            {
              label: 'FAQs',
              name: 'faqs',
              widget: 'list',
              i18n: true,
              required: false,
              fields: [
                {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  required: false,
                  i18n: true,
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'markdown',
                  required: false,
                  i18n: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
