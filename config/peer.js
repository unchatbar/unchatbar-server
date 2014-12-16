var env = process.env.NODE_ENV || 'development';

var options = {
  development: {
    debug: true
  },

  test: {
    debug: false
  },

  production: {
    debug: false
  }
};

module.exports = options[env];
