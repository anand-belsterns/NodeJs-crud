// app.test.js
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('./app'); // Adjust the path to where your app.js is located

describe('User API', function() {
    it('should respond with a 200 status code for GET /users', function(done) {
        request(app)
            .get('/users')
            .expect(200, done);
    });

    // Add more tests as needed

    // Example to check for an invalid route
    it('should respond with a 404 status code for an invalid route', function(done) {
        request(app)
            .get('/invalid-route')
            .expect(404, done);
    });
});