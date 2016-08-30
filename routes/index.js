var express = require('express');
var readFile= require('../services/readfile');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home', { title: 'Machine Management' });
});

router.get('/mgt', function(req, res, next) {

    var render = function (domains, pathHosts) {
        res.render('management', { title: 'Machine Management' , domains: domains, pathHosts: pathHosts });
    };

    readFile.read(render);

});

module.exports = router;
