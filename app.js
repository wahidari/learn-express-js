// Module depedencies
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Define router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Define express app
const app = express();

// Default Express Config
// enable all CORS requests
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// log
app.use(logger('dev'));
// create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse Cookie header
app.use(cookieParser());
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// use the route
app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
