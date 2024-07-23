const Blog = require('./src/collections/blog');
const Media = require('./src/collections/media');
const Users = require('./src/collections/users');

module.exports = {
    collections: [
        Blog,
        Media,
        Users,
    ],
    globals: [],
    graphQL: {
        disable: false,
    },
    admin: {
        user: 'users',
    },
    serverURL: 'http://localhost:3000',
    cors: {
        credentials: true,
        origin: '*',
    },
};
