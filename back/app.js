const express = require('express');
const morgan = require('morgan');
const cookie = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');
const db = require('./models');
const cors = require('cors');

const app = express();
db.sequelize.sync({ force: true });
passportConfig();

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

app.use(morgan('dev'));
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	}),
);
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

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('postRouter', postRouter);

app.listen(8080, () => {
	console.log('8080 listening');
});
