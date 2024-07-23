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
    express: {
        postmiddleware: [
            (req, res, next) => {
                next();
            }
        ]
    },
    rateLimit: {
        window: 15 * 60 * 1000,
        max: 100,
    },
    admin: {
        user: 'users',
        disable: false,
    },
    routes: {
        admin: '/admin',
    },
    serverURL: 'http://localhost:3000',
    cors: {
        origin: '*',
        credentials: true,
    }
};