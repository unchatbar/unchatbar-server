var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {

  development: {
    root: rootPath,
    app: {
      name: 'unchatbar-server'
    },
    peer: {
      port: process.env.PORT || 9000,
      debug: true,
      timeout: 5000,
      key: 'peerjs',
      max_pings_missed: 5,
      ping_timeout: 5000,
      ip_limit: 5000,
      concurrent_limit: 5000,
      allow_discovery: false

    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'unchatbar-server'
    },
    peer: {
      port: process.env.PORT || 9000,
      debug: true,
      timeout: 5000,
      key: 'peerjs',
      max_pings_missed: 5,
      ping_timeout: 5000,
      ip_limit: 5000,
      concurrent_limit: 5000,
      allow_discovery: false
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'unchatbar-server'
    },
    peer: {
      port: process.env.PORT || 9000,
      debug: true,
      timeout: 5000,
      key: 'peerjs',
      max_pings_missed: 5,
      ping_timeout: 5000,
      ip_limit: 5000,
      concurrent_limit: 5000,
      allow_discovery: false
    }
  }

};

module.exports = config[env];
