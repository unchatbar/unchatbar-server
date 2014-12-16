var express = require('express'),
  config = require('./config/config'),
  peer = require('peer');

var app = express();

require('./config/express')(app, config);

var server = app.listen(config.port),
  options = require('./config/peer');

app.use('/peer', peer.ExpressPeerServer(server, options));
