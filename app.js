var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Car = require("./models/car");
const connectionString = 'mongodb+srv://Admin:Kumar@493@cluster0.jdmuv.mongodb.net/project0?retryWrites=true&w=majority'
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var car = require('./models/car');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');
var starsRouter = require('./routes/stars');
var smRouter = require('./routes/slot');
var resourceRouter = require('./routes/resource');

// We can seed the collection if needed on server start
async function recreateDB() {
    // Delete everything
    await car.deleteMany();
    let instance1 = new car({
        Name: "Rouge",
        Company: "Nissan",
        Price: "$24000"
    });

    instance1.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("First object saved")
    });
    let instance2 = new car({
        Name: "Tahoe",
        Company: "Chevrolet",
        Price: "$49000"
    });
    instance2.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Second object saved")
    });
    let instance3 = new car({
        Name: "Santa Fe",
        Company: "Hyundai",
        Price: "$28000"
    });
    instance3.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Third object saved")
    });
}
let reseed = true;
if (reseed) { recreateDB(); }



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/car', carRouter);
app.use('/stars', starsRouter);
app.use('/sm', smRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
        console.log("Connection to DB succeeded");
    }) //Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
    console.log("Connection to DB succeeded");
})

module.exports = app