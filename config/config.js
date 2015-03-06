var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {

    development: {
        root: rootPath,
        cleanTable: true,
        app: {
            name: 'unchatbar-server'
        },
        peer: {
            port: process.env.PORT || 9000,
            debug: false,
            timeout: 5000,
            key: 'peerjs',
            max_pings_missed: 5,
            ping_timeout: 20000,
            ip_limit: 5000,
            concurrent_limit: 5000,
            allow_discovery: false

        }
    },

    test: {
        root: rootPath,
        cleanTable: false,
        app: {
            name: 'unchatbar-server'
        },
        peer: {
            port: process.env.PORT || 9000,
            debug: false,
            timeout: 5000,
            key: 'peerjs',
            max_pings_missed: 5,
            ping_timeout: 5000,
            ip_limit: 20000,
            concurrent_limit: 5000,
            allow_discovery: false
        }
    },

    production: {
        cleanTable: false,
        root: rootPath,
        app: {
            name: 'unchatbar-server'
        },
        peer: {
            port: process.env.PORT || 9000,
            debug: false,
            timeout: 5000,
            key: 'peerjs',
            max_pings_missed: 5,
            ping_timeout: 20000,
            ip_limit: 5000,
            concurrent_limit: 5000,
            allow_discovery: false
        }
    }

};

module.exports = config[env];
