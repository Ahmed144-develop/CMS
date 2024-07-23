const Blog = {
    slug: 'blog',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'hero',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'subheading',
                    type: 'text',
                },
                {
                    name: 'featuredImage',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'tags',
                    type: 'array',
                    fields: [
                        {
                            name: 'tag',
                            type: 'text',
                        }
                    ]
                }
            ]
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        }
    ],
    endpoints: [],
};

module.exports = Blog;
