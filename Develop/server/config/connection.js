const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
