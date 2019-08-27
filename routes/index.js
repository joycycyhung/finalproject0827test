var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/hotelandweather', function(req, res, next) {
  res.render('hotelandweather', { title: 'Search Hotel Then Weather' });
});

router.get('/randompick', function(req, res, next) {
  res.render('randompick', { title: 'Talk To Our Agents!' });
});

router.get('/weatherandhotel', function(req, res, next) {
  res.render('weatherandhotel', { title: 'Search Weather and Hotel' });
});



module.exports = router;
