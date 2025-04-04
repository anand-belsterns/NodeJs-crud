// app.test.js
const request = require('supertest'); // Import supertest for testing express applications
const app = require('./app'); // Import the express app

// Mock UserController
jest.mock('./user/UserController', () => {
    const express = require('express');
    const router = express.Router();

    // Mocking a simple GET route
    router.get('/', (req, res) => {
        res.status(200).json({ message: 'User list' });
    });

    // You can mock additional routes as needed
    router.post('/', (req, res) => {
        res.status(201).json({ message: 'User created', user: req.body });
    });

    return router; // Return the mock router
});

describe('GET /users', () => {
    it('should return user list', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'User list' });
    });
});

describe('POST /users', () => {
    it('should create a new user', async () => {
        const newUser = { name: 'John Doe', email: 'john@example.com' }; // Example input
        const response = await request(app).post('/users').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'User created', user: newUser });
    });
});

// You can add more tests for other routes and functionalities as needed