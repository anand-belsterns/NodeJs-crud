const express = require('express');
const request = require('supertest'); // For making requests to the express app
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const app = require('./app'); // Import the application

// Mock UserController
const UserController = require('./user/UserController');
const mockUserController = sinon.stub();
app.use('/users', mockUserController); // Replace actual UserController with the mock

describe('App Tests', () => {
    it('should mount UserController at /users', (done) => {
        // Ensure UserController is mounted correctly
        request(app)
            .get('/users') // Assuming UserController supports GET requests
            .expect(200) // Expect a 200 status code
            .end((err, res) => {
                expect(res.status).to.equal(200); // Check response status
                expect(mockUserController.called).to.be.true; // Ensure the mock was called
                done(err);
            });
    });

    it('should return a 404 for undefined routes', (done) => {
        request(app)
            .get('/undefined-route') // Test an undefined route
            .expect(404, done); // Expect a 404 status
    });
});