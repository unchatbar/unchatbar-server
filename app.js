var config = require('./config/config'),
    peer = require('peer').PeerServer,
//redis = require('redis'),
//client = redis.createClient(),
    passwordHash = require('password-hash');
//no free redis on heroku
var client = {
    clients: {},
    get: function (id, cb) {
        cb(null, this.clients[id] || null);
    },
    set: function (key, value) {
        this.clients[key] = value;
    },
    flushall: function () {
        this.clients = {};
    }
};
var redis = {
    print : ''
};
if (config.cleanTable === true) {
    client.flushall();
}
config.peer.preprocess = function (req, res, next) {
    var clientId = req.params.id,
        pass = req.body.pass;
    if (pass) {
        client.get(clientId, function (err, clientPass) {
            if (clientPass === null) {
                client.set(clientId, passwordHash.generate(pass), redis.print);
                return next();
            } else if (passwordHash.verify(pass, clientPass)) {
                return next();
            } else {
                res.sendStatus(401);
            }
        });
    } else {
        res.sendStatus(400);
    }

};
peer(config.peer);
