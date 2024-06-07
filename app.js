// if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
// }

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override')
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const MongoDBStore = require('connect-mongo');

const User = require('./models/user');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');


// const dbUrl = 'mongodb://127.0.0.1:27017/yelp-camp';
// mongoose.connect(dbUrl);
mongoose.connect(process.env.DB_URL);

// Handling connection events
const db = mongoose.connection;
db.on('error',console.error.bind(console, "connection error"));
db.once('open',() => {
    console.log("Database connected");
})


const app = express();

app.engine('ejs', ejsMate);//for layouts
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(mongoSanitize());
app.use( helmet({ contentSecurityPolicy: false }) );

const store = MongoDBStore.create({
    // mongoUrl: dbUrl,
    mongoUrl: process.env.DB_URL,
    touchAfter: 24 * 60 * 60, //If the session data is not modified don't update it till 24 hours
    crypto: {
        secret: process.env.SECRET
    }
});

store.on("error", function(e) {
    console.log("SESSION STORE ERROR", e);
})

const sessionConfig = {
    store,
    name: 'session',
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, //means can only be accessed thru http and not javascript
        // secure: true, //this will break things for now as localhost is not https and we won't have session thus won't be able to authenticate and log user using passport. But we want this in production
        expires: Date.now() + 1000*60*60*24*7,
        maxAge: 1000*60*60*24*7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session()); //should be placed after app.use(session())
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser()); //Basically how to stor user and un-store user for authentication
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.currUser = req.user;
    res.locals.success = req.flash('success');// Recap: whatever this is we won't need to pass it thru we'll have access to it in our templates
    res.locals.error = req.flash('error');
    next();
})

app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes); //to get access to :id param in routes file set mergeParams: true for router object
app.use('/', userRoutes);


const catchAsync = require('./utils/catchAsync');
const Campground = require('./models/campground');
const campground = require('./models/campground');
app.get('/', catchAsync(async (req,res) => {
    const campgrounds = await Campground.find({});
    if(!campgrounds) throw new ExpressError('No Campgrounds Available', 500);
    res.render('campgrounds/home',{campgrounds});
}))

app.all('*', (req,res,next) => { // all -> for all types of request, '*' -> for any path 
    next(new ExpressError('Page Not Found', 404));
})

app.use((err,req,res,next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!';
    console.log(err.message);
    res.status(status).render('error',{err});
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
    // console.log("Serving on CampSite Cluster");
})