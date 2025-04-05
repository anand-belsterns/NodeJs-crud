const request = require('supertest');
const app = require('../server');

describe('Server Tests', () => {
  it('should respond with a 200 status code on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should respond with JSON data on GET /api/data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});