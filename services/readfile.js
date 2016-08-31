/**
 * Created by heureka on 30/08/16.
 */

var fs       = require('fs'),
    Domain   = require('../model/domain'),
    readFile = {};

var pathFile='/etc/hostsx';

readFile.read = function (pathFile, cb) {

    if(undefined === pathFile || null === pathFile)
        return cb('Path Incorrecto', 1);

    var domains = [];
    fs.readFile(pathFile, 'utf8', function(err, data) {
       if(err) {
           cb(err, 1);
           return console.log(err, 1);
       }
       cb(readFile.processFile(data));
    });

    return domains;
};

readFile.processFile = function (data) {
    var lines = readFile.parse(data);
    var domains = [];

    lines.forEach(function (e, i) {
        var data = readFile.line(e);

        if(null !== data) {
            domains.push(data);
        }
    });

    return domains;
};

readFile.parse = function (data) {
    if(undefined === data || null === data || '' === data.trim()) {
        return []
    }

    return data.split('\n');
};

readFile.line = function (line) {

    if(undefined === line || null === line || '' === line.trim()) {
        return null;
    }

    var row = line.split('\t');

    if( row.length != 2) {
        return null;
    }

    return new Domain(row[1], row[0]);
};

module.exports = readFile;