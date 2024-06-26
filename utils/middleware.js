const {campgroundSchema, reviewSchema} = require('../schemas'); //JOI schema
const Campground = require('../models/campground');
const Review = require('../models/review');
const ExpressError = require('./ExpressError');

module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in!!');
        return res.redirect('/login');
    }
    next();
}

module.exports.storeReturnTo = (req,res,next) => {
    if(req.session.returnTo){
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

module.exports.validateCampground = (req,res,next) => {
    const {error} = campgroundSchema.validate(req.body);
    if(error){
        const msg = error.details.map(elm => elm.message).join(',');
        throw new ExpressError(msg,400)
    } else{
        next();
    }
}
module.exports.isAuthor = async (req,res,next) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground){
        return next(new ExpressError('Campground Not Found', 404));
    } 
    if(!campground.author.equals(req.user._id)){
        req.flash('error', 'Unauthorised access, you do not have permissions to do that!!');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}

module.exports.validateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body);
    if(error){
        const msg = error.details.map(elm => elm.message).join(',');
        throw new ExpressError(msg,400)
    } else{
        next();
    }
}
module.exports.isReviewAuthor = async (req,res,next) => {
    const {id, reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if(!review){
        return next(new ExpressError("Review doesn't exsist!!", 404));
    } 
    if(!review.author.equals(req.user._id)){
        req.flash('error', 'Unauthorised access, you do not have permissions to do that!!');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}