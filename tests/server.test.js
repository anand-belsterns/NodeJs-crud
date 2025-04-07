const request = require('supertest');
const app = require('../server');

describe('Server API', () => {
    it('should respond with a 200 status code', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should return JSON data', async () => {
        const response = await request(app).get('/api/data');
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
});