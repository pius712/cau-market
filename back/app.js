const express = require('express');
const morgan = require('morgan');
const cookie = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie('pius712'));
app.use(
  session({
    secret: 'pius712',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.listen(8080, () => {
  console.log('8080 listening');
});
