/**
 * Created by heureka on 30/08/16.
 */
var express = require('express');
var readFile= require('../services/readfile');
var Response= require('../dto/Response');

var router = express.Router();

router.post('/analyzeHosts', function(req, res) {

    var path = req.body.path;

    var cb = function (data, t) {

        if(t)
            res.send(new Response(data));
        else
            res.send(new Response(data, 1000, 'Respuesta Correcta'))
    };

    readFile.read(path, cb);
});

module.exports = router;
