const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  isdeleted: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model('Role', roleSchema);