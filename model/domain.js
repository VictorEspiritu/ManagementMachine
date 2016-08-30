/**
 * Created by heureka on 30/08/16.
 */

var Domain = function (domain, ip) {

    this.domain = domain;
    this.ip = ip;

    this.getDomain = function () {
        return this.domain;
    };

    this.getIP = function () {
        return this.ip;
    }

    return {
        domain: this.domain,
        ip: this.ip
    };
}

module.exports = Domain;