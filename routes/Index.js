const express = require('express');
const router = express.Router();

const homeRoute = require('../controllers/Home');
const userRoute = require('../controllers/User');

router.use(function (req, res, next) {
  next()
})

router.use('/', homeRoute);
router.use('/user', userRoute);

module.exports = router;