// app.test.js
const express = require('express');
const { expect } = require('chai');
const sinon = require('sinon');

const app = require('./app'); // Adjust the path to your app.js file
const UserController = require('./user/UserController');

describe('Express App', () => {
    let userControllerMock;

    beforeEach(() => {
        // Create a mock for UserController
        userControllerMock = sinon.stub();
        app.use('/users', userControllerMock);
    });

    it('should use UserController at /users endpoint', () => {
        const routePath = app._router.stack.find(layer => layer.route && layer.route.path === '/users');
        
        // Check if the UserController is being used at the /users endpoint
        expect(routePath).to.exist;
        expect(routePath.handle).to.equal(userControllerMock);
    });
});