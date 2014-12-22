var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {

  development: {
    root: rootPath,
    app: {
      name: 'unchatbar-server'
    },
    port: 8181,
    peer: {
      debug: true,
      timeout: 5000,
      key: 'peerjs',
      ip_limit: 5000,
      concurrent_limit: 5000,
      allow_discovery: false,
      proxied: false
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'unchatbar-server'
    },
    port: 8181,
    peer: {
      debug: false,
      timeout: 5000,
      key: 'peerjs',
      ip_limit: 5000,
      concurrent_limit: 5000,
      allow_discovery: false,
      proxied: false
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'unchatbar-server'
    },
    port: 8181,
    peer: {
      debug: false,
      timeout: 5000,
      key: 'peerjs',
      ip_limit: 5000,
      concurrent_limit: 5000,
      allow_discovery: false,
      proxied: false
    }
  }

};

module.exports = config[env];
