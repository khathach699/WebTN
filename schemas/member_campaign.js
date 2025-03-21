const mongoose = require('mongoose');
const { on } = require('./campaign');

const Schema = mongoose.Schema;

const memberCampaignSchema = new Schema({
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
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: true,
        min: 0
    },
    
    isdeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('DonateCampaign', memberCampaignSchema);