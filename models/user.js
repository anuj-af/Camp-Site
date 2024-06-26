const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);