const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  token: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
