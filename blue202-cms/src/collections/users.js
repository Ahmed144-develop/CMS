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
            name: 'role',
            type: 'select',
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'User',
                    value: 'user',
                }
            ],
            required: true,
            defaultValue: 'user',
        },
    ],
    endpoints: [],
};

module.exports = Users;
