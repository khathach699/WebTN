const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSocialSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    social_type: {
        type: Schema.Types.ObjectId,
        ref: 'SocialType',
        required: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    isdelete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const UserSocial = mongoose.model('UserSocial', userSocialSchema);

module.exports = UserSocial;