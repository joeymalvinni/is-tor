const isIP = require('./src/is-ip');
const { InvalidIPError, InvalidObjectType } = require('./src/CustomErrors');
const fileData = require('./data/exit-nodes.json');

function isTor(ip) {
    if (typeof ip === 'string') {
        if (isIP(ip)) {
            if (fileData.indexOf(ip.toString()) !== -1) {
                return true;
            } else {
                return false;
            }   
        } else {
            throw new InvalidIPError(ip);
        }
    } else {
        throw new InvalidObjectType(ip);
    };
};

module.exports = isTor;
module.exports.exitNodes = fileData;