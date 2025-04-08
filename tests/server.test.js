const request = require('supertest');
const app = require('../server');

describe('Server', () => {
    it('should respond with 200 status on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should respond with JSON', async () => {
        const response = await request(app).get('/api/data');
        expect(response.headers['content-type']).toMatch(/json/);
    });
});