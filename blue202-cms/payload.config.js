const path = require('path');
const cors = require('cors');
const Blog = require('./src/collections/blog');
const Media = require('./src/collections/media');
const Users = require('./src/collections/users');
const mongoose = require('mongoose');
const adminAuth = require('./src/middleware/adminAuth'); 

module.exports = {
  collections: [
    Blog,
    Media,
    Users,
  ],
  globals: [],
  graphQL: {
    schemaOutputFile: './generated-schema.graphql',
    disablePlaygroundInProduction: false,
  },
  
  express: {
    preMiddleware: [
      cors({
        origin: '*',
        credentials: true,
      }),
      (req, res, next) => {
        next();
      },
      (req, res, next) => {
        if (req.path.startsWith('/admin')) {
          return adminAuth(req, res, next);
        }
        next();
      }
    ],
  },
  editor: {
    type: 'text',
    required: true,
    validate: (value) => {
      return true;
    },
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
  db: () => mongoose.connect('mongodb://0.0.0.0:27017/payroll'),
};
