// app.test.js
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('./app');

describe('User API', () => {

  it('should respond with a 200 status code on /users', (done) => {
    request(app)
      .get('/users') // You can replace this with the actual method and endpoint you want to test
      .expect(200, done);
  });

  // You can add more tests here to cover other endpoints or scenarios related to UserController
});