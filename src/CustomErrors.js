class InvalidIPError extends Error {
    constructor(ip) {
        super('The given IP \'' + ip + '\' is invalid. Please try again.');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class InvalidObjectType extends Error {
    constructor(value) {
        super('The given IP ' + JSON.stringify(value) + ' is not a string. Please try again.');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { InvalidIPError, InvalidObjectType };