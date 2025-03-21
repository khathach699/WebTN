const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeTagSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('TypeTag', typeTagSchema);