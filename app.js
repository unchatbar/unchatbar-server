var bodyParser = require('body-parser'),
  compress = require('compression'),
  config = require('./config/config'),
  cookieParser = require('cookie-parser'),
  express = require('express'),
  favicon = require('serve-favicon'),
  glob = require('glob'),
  http = require('http'),
  logger = require('morgan'),
  methodOverride = require('method-override'),
  peer = require('peer');

var app = express(),
  server = http.createServer(app),
  peerServer = peer.ExpressPeerServer(server, config.peer);

app.set('views', config.root + '/app/views');
app.set('view engine', 'jade');

// app.use(favicon(config.root + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compress());
app.use(express.static(config.root + '/public'));
app.use(methodOverride());

glob.sync(config.root + '/app/controllers/*.js').forEach(function (controller) {
  require(controller)(app);
});

app.use('/peerjs', peerServer);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error'
    });
  });
}

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error'
  });
});

server.listen(config.port);
