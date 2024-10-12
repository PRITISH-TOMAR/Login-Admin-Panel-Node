const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    social_media_handle: {
        type: String,
        required: true
    },
    images:
    {
        type:[String],
        required: true,
    }
}, { timestamps: true });

// Create the Anime model
const User = model('user_data', userSchema);
module.exports = { User };
