const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donateCampaignSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    campaign: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign',
        required: true
    },
    money: {
        type: Number,
        required: true,
        min: 0
    },
    content: {
        type: String,
        default: ''
    },
    time: {
        type: Date,
        default: Date.now
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('DonateCampaign', donateCampaignSchema);