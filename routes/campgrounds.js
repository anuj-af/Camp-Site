const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const {isLoggedIn, isAuthor, validateCampground} = require('../utils/middleware');
const Campground = require('../models/campground');
const campgrounds = require('../controllers/campgrounds'); // Campground Controller
const multer  = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({ storage })

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('images'), validateCampground, catchAsync(campgrounds.createCampground)); //'images' is name of input field in new.ejs
    
router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));

module.exports = router;

// Note: need to work on create campground path middleware order