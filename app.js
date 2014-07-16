var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var routes = require('./routes/index');
// var MongoStore = require('connect-mongo')(express)
// var passport = require('./auth')

var app = express();

var server = require('http').createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(cookieParser('my-cookie-secret'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.session({
//     secret:'tymothee',
//     store: new MongoStore({
//         mongoose_connection:db
//     })
// }))
// app.use(passport.initialize())
// app.use(passport.session())
app.use('/', routes);
app.use('/login', routes)

// app.param('_id', function(req,res, next, _id){
//     console.log('_id is '+_id)
//     req._id = _id
//     next();
// });

// app.param('_rev', function(req,res, next, _rev){
//     console.log('_rev is '+_rev)
//     req._rev = _rev
//     next();
// });


/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

/// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         console.log('req error is '+error)
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

server.listen(3000, function () {
  console.log('Express server listening on port ' + 3000);
});

module.exports = app;
