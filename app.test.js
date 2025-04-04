// Jest test case starts here
const request = require('supertest');
const express = require('express');
const app = require('./app'); // Path to the app code
const db = require('./db');

jest.mock('./db'); // Mocking the db module

describe('UserController', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear any previous mock calls
    });

    it('should respond with a list of users', async () => {
        // Mock the db function that retrieves users
        db.getUsers = jest.fn().mockResolvedValue([{ id: 1, name: 'John Doe' }]);

        const response = await request(app).get('/users');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ id: 1, name: 'John Doe' }]);
        expect(db.getUsers).toHaveBeenCalledTimes(1); // Ensure our mock was called once
    });

    it('should handle error when getting users', async () => {
        // Mock db to throw an error
        db.getUsers = jest.fn().mockRejectedValue(new Error('Database error'));

        const response = await request(app).get('/users');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Database error' });
        expect(db.getUsers).toHaveBeenCalledTimes(1); // Ensure our mock was called once
    });
});
// Jest test case ends here