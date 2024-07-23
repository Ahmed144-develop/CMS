const Users = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'email',
            type: 'email',
            required: true,
        },
    ],
    endpoints: [],
};

module.exports = Users;
