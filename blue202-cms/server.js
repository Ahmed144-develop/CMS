const express = require('express');
const mongoose = require('mongoose');
const payload = require('payload');
const { collections, globals } = require('./payload.config.js');
const app = express();
const config = require('./payload.config.js');


require('dotenv').config();


const mongoURI = process.env.MONGO_URL;

const payloadSecret = process.env.PAYLOAD_SECRET;

console.log('mongoURI', mongoURI);
console.log('payloadSecret', payloadSecret);

mongoose.connect(mongoURI)
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

payload.init({
    secret: payloadSecret,
    mongoURL: mongoURI,
    express: app,
    collections,
    globals,
    onInit: () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});