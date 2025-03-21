const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('State', stateSchema);