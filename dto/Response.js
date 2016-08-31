/**
 * Created by heureka on 30/08/16.
 */

var Response = function (data, code, message) {

    this.data = data;
    this.code = undefined === code ? 5000: code;
    this.message = undefined === message ? 'Error Interno' : message;

    return {
        code: this.code,
        message: this.message,
        payload: this.data
    };
};

module.exports = Response;