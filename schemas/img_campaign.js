const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const img_CampaignSchema = new Schema({
    campaign: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign',
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    isdeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Img_Campaign', img_CampaignSchema);