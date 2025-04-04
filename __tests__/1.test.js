const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../app'); // Adjust the path if necessary

describe('App', () => {
    it('should respond with 200 OK to GET /users', (done) => {
        request(app)
            .get('/users')
            .expect(200, done); // Adjust the status code expected as per your UserController implementation
    });

    // You can add more tests here to check other routes in UserController
});