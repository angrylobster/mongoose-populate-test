const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String },
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill"
    }],
}, { timestamp: true });

exports.User = mongoose.model('User', userSchema);