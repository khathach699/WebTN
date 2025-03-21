const mongoose = require('mongoose');

const { Schema } = mongoose;

const organizationSchema = new Schema({
    info: {
        type: String
    },
    certificate: {
        type: String
    },
    bankName: {
        type: String
    },
    bankNumber: {
        type: String
    },
    isdeleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true
});

module.exports = mongoose.model('Organization', organizationSchema);