var config = require('./config/config'),
    peer = require('peer').PeerServer;
var server = peer(config.peer);



