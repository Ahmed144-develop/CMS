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
        {
            name: 'password',
            type: 'password',
            required: true,
        },
    ],
};

module.exports = Users;
