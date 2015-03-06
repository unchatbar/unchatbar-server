var config = require('./config/config'),
    peer = require('peer').PeerServer,
    redis = require('redis'),
    passwordHash = require('password-hash'),
    client = redis.createClient();
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
