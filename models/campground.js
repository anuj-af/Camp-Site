const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;


// https://res.cloudinary.com/camp-site/image/upload/w_300/v1717389481/Camp-Site/zi7rasmhrdtzoinfx3b4.jpg
const ImageSchema = new Schema({
    url: String,
    filename: String
});
ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_250');
});

const opts = { toJSON: { virtuals: true } }; //to include virtuals in JSON as mongoose by default doesn't do that
const campgroundSchema = new Schema({
    title: String,
    image: String,
    images: [
        // {
        //     url: String,
        //     filename: String
        // }
        ImageSchema
    ],
    geometry: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
}, opts);

campgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `<h6><b>${this.title}</b></h6>${this.location}`;
})

campgroundSchema.post('findOneAndDelete', async function(doc) { //If any campground is deleted it will be passed to this post middleware
    if(doc){
        await Review.deleteMany({
            _id: {$in: doc.reviews}
        })
    }
})

module.exports = mongoose.model('Campground',campgroundSchema);