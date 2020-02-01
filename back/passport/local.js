const passport = require('passport');
const db = require('../models');
const bcrypt = require('bcrypt');
const { Strategy: LocalStrategy } = require('passport-local').Strategy;

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'id',
        passwordField: 'password',
      },
      async (username, password, done) => {
        try {
          const exUser = await db.User.findOne({ where: { id: username } });
          if (!exUser) {
            return done(null, false, {
              reason: '존재하지 않는 사용자입니다.',
            });
          }
          const result = bcrypt.compare(password, exUser.password);
          if (result) {
            return done(null, exUser);
          } else {
            return done(null, false, {
              reason: '비밀번호가 틀렸습니다.',
            });
          }
        } catch (err) {
          console.error(err);
          done(err);
        }
      },
    ),
  );
};
