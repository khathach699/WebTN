const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    email: { type: String, required: true, unique: true },
    point: { type: Number, default: 0 },
    isdisable: { type: Boolean, default: false },
    role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
    isdeleted: { type: Boolean, default: false }
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);