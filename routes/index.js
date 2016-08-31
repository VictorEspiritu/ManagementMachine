var express = require('express');
var readFile= require('../services/readfile');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: 'Machine Management' });
});

router.get('/mgt', function(req, res, next) {

  res.render('management', { title: 'Machine Management' , domains: [], pathHosts: '' });

});

module.exports = router;
