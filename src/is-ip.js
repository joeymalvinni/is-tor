let ipv4Regex = require('./ipv4Regex');

function isIP(ip) {
    return ipv4Regex.test(ip);
};

module.exports = isIP;