const mongoose = require('mongoose');
const {Schema} = mongoose;

const reviewSchema = new Schema({
    body: {
        type: String,
        required: [true, 'Review cannot be empty']
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Review', reviewSchema);