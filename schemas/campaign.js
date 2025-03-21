const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
    content: {
        type: String
    },
    numberOfPeople: {
        type: Number,
        default: 0
    },
    amountOfMoney: {
        type: Number,
        default: 0
    },
    donate: {
        type: Number,
        default: 0
    },
    isAccepted: {
        type: Boolean,
        default: false
    },
    isdeleted: {
        type: Boolean,
        default: false
    },
    dayStart: {
        type: Date,
        required: true
    },
    numberOfDay: {
        type: Number,
        required: true
    },
    participated: {
        type: Number,
        default: 0
    },
    img: {
        type: String
    },
    statusId: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Campaign', campaignSchema);