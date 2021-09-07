let isTor = require('../is-tor.js');
let { InvalidIPError, InvalidObjectType } = require('../src/CustomErrors');
let fetch = require('node-fetch');
let chai = require('chai');
var expect  = chai.expect;

describe('Is Tor:', function() {
    it('Should correctly verify Tor IPs', async function() {
        this.timeout(50000);
        let data = await fetch('https://check.torproject.org/torbulkexitlist').then(r => r.text());
        let randomVal = data.split('\n')[Math.floor(Math.random() * data.split('\n').length)];
        let output = isTor(randomVal);

        expect(output).to.eql(true);
    })
    it('Should be false for non-Tor IPs', function(done) {
        let output = isTor('192.0.1.2');

        expect(output).to.eql(false);
        done()
    })
    it('Should throw an error if the input is not a string', function(done) {
        try {
            isTor({})
        } catch (err) {
            expect(err.message).to.eql(new InvalidObjectType({}).message)
            done()
        }
    })
    it('Should throw an error if the inputted string is not an IPv4 address', function(done) {
        try {
            console.log(isTor('tor'))
        } catch (err) {
            expect(err.message).to.eql(new InvalidIPError('tor').message);
            done()
        }
    })
});