const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
    name: { type: String },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, { timestamp: true });

exports.Skill = mongoose.model('Skill', skillSchema);