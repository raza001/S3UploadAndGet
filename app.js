var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
require('dotenv').config()

var GetUrlS3 = require('./routes/index');
var PutUrlS3 = require('./routes/users');

var app = express();
app.use(fileUpload());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', GetUrlS3);
app.use('/uploadFile', PutUrlS3);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(9000, () => {
  console.log(`app listening on port ${9000}`)
})

module.exports = app;
