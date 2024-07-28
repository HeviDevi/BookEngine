const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/googlebooks');

module.exports = mongoose.connection;
