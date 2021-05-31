// Copy this file as config.js in the same folder, with the proper database connection URI.
const mongoose = require("mongoose");

module.exports = {
  db: 'mongodb://username:password@url:port/db',
  db_dev: "mongodb://localhost:27017/flock"
};
