const express = require('express');
const db = require('../models');
const passport = require('passport');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async (req, res, next) => {
  // req.body.id ...
  try {
    console.log(req.body.id);
    const exUser = await db.User.findOne({ where: { id: req.body.id } });
    if (exUser) {
      return res.status(401).json({
        errorCode: 1,
        message: '이미 가입된 회원입니다.',
      });
    }
    console.log('password', req.body.password);
    console.log('nickname', req.body.nickname);
    const hash = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      id: req.body.id,
      password: hash,
      email: req.body.email,
      name: req.body.name,
      studentId: req.body.studentId,
      nickname: req.body.nickname,
    });
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (info) {
        return res.status(401).json(info.reason);
      }
      req.login(user, err => {
        if (err) {
          console.error(err);
          next(err);
        }
        return res.json(user);
      });
    })(req, res, next);
  } catch (err) {
    console.error(err);
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (info) {
      return res.status(401).json(info.reason);
    }
    req.login(user, err => {
      if (err) {
        console.error(err);
        next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {});
module.exports = router;
