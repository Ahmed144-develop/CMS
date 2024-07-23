const Blog = require('./blog');
const Media = require('./media');
const Users = require('./users');

module.exports = {
    collections: [
        Blog,
        Media,
    ],
    graphQL: {
        disable: false,
    },
    admin: {
        user: 'users',
    },
    serverURL: 'http://localhost:3000',
    cors: {
        credentials: true,
        origin: true,
    },
};
