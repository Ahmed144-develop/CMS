const cors = require('cors');
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
    preMiddleware: [
      cors({
        origin: '*',
        credentials: true,
      }),
      (req, res, next) => {
        next();
      }
    ],
  },
  rateLimit: {
    window: 15 * 60 * 1000,
    max: 100,
  },
  admin: {
    user: 'users',
    disable: false,
    bundler: {
      dev: (config) => config,
    },
  },
  routes: {
    admin: '/admin',
  },
  serverURL: 'http://localhost:3000',
};
