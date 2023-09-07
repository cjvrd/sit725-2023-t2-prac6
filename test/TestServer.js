const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cats'
let cat = {
    title: '',
    subtitle: '',
    description: '',
    path: '',
};

describe('test GET api', function () {
    it('returns statusCode of 200', function (done) {
        //test logic goes here
        request(url, function (err, response, bodyString) {
            //asserts here
            let bodyObj = JSON.parse(bodyString); //converts string to obj
            expect(bodyObj.statusCode).to.equal(200);
            done();
        });
    });
});

describe('test POST api', function () {
    it('returns post success message', function (done) {
        //test logic goes here
        request.post({ url, form: cat }, function (err, response, bodyString2) {
            //asserts here
            let bodyObj2 = JSON.parse(bodyString2); //converts string to obj
            expect(bodyObj2.message).to.equal('success');
            done();
        });
    });
});

describe('test DELETE api', function () {
    it('delete a cat', function (done) {
        request.delete({ url: url, form: cat }, function (err, response, bodyString3) {
            //asserts here
            let bodyObj3 = JSON.parse(bodyString3); //converts string to obj
            expect(bodyObj3.message).to.equal('kitty deleted');
            done();
        });
    });
});