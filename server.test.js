// server.test.js
const request = require('supertest');
const app = require('./server'); // Import the app from server.js

describe('GET /api/message', () => {
    it('should return a message', async () => {
        const response = await request(app).get('/api/message');
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, World!' });
    });
});