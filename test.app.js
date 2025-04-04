const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../app'); // Adjust path as necessary

describe('App', () => {
    it('should return 200 for the /users endpoint', (done) => {
        request(app)
            .get('/users')
            .expect(200, done);
    });

    it('should use UserController for /users route', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                if (err) return done(err);

                // Here you can check the response body or headers
                // For example, if UserController returns a specific JSON
                expect(res.body).to.be.an('object'); // Adjust according to expected response
                done();
            });
    });
});