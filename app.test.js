// app.test.js
const express = require('express');
const request = require('supertest');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const app = require('./app');  // Import the app we want to test
const UserController = require('./user/UserController'); // Import the UserController

describe('App', () => {
    let userControllerStub;

    before(() => {
        // Stub UserController to prevent actual imports
        userControllerStub = sinon.stub(UserController, 'use').callsFake((route, handler) => {
            // Here you can define the behavior of the stub if necessary
        });
    });

    after(() => {
        userControllerStub.restore(); // Restore the original function
    });

    it('should use UserController at /users route', (done) => {
        // Here we can make a request to the app
        request(app)
            .get('/users') // Assuming your UserController has a route setup for GET /users
            .end((err, res) => {
                expect(res.status).to.equal(200); // Adjust based on your UserController implementation
                expect(userControllerStub.calledOnce).to.be.true; // Check if the UserController was used
                done();
            });
    });
});