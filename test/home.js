var assert = require('assert'),
  config = require('../config/config'),
  should = require('should'),
  supertest = require('supertest');

describe('Home', function () {
  var url = 'http://localhost:' + config.port;

  describe('should return home page', function(done) {
    supertest(url)
      .get('/')
      .send()
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        done();
      });
  });
});
