const Campground = require('../models/campground');

module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find({}).populate('images');
    if (campgrounds.length === 0) throw new ExpressError('Sorry No Campgrounds Available');
    res.render('campgrounds/index', { campgrounds });
}

module.exports.createCampground = async (req, res) => {
    // if(!req.body) throw new ExpressError('Invalid Campground Data',400);
    // This is schema has nothing to do with mongoose schema we even define this before defining mongoose schema
    // const campgroundSchema = Joi.object({
    //     // campground: Joi.object({
    //     //     //schema
    //     // }).required()
    //     title: Joi.string().required(),
    //     price: Joi.number().required().min(0),
    //     image: Joi.string().required(),
    //     location: Joi.string().required(),
    //     description: Joi.string().required()
    // })
    // const {error} = campgroundSchema.validate(req.body);
    // if(error){
    //     const msg = error.details.map(elm => elm.message).join(',');
    //     throw new ExpressError(msg,400)
    // }

    const campground = new Campground(req.body);
    campground.images = req.files.map(f => ({ url: f.path, filename: f.filename })); //Implicit return
    campground.author = req.user._id;
    await campground.save();
    console.log(campground);
    req.flash('success', 'Successfully made a new Campground');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
}

module.exports.showCampground = async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id).populate({ path: 'reviews', populate: { path: 'author' } }).populate('author').populate('images');//Nested populate
    console.log(campground);
    // if(!campground) throw new ExpressError('Campground Not Found',404);
    if (!campground) {
        req.flash('error', 'Cannot find that Found');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { campground });
}

module.exports.updateCampground = async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename })); //Implicit return
    campground.images.push(...imgs); //Spreading array as we want to push elements into an array not array into an array
    await campground.save();
    req.flash('success', 'Successfully updated the Campground');
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.deleteCampground = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted the Campground');
    res.redirect('/campgrounds');
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/edit', { campground });
}