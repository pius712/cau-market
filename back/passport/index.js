const passport = require('passport');
const db = require('../models');
const local = require('./local');
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.User.findOne(id, function(err, user) {
      done(err, user);
    });
  });
  local();
};
