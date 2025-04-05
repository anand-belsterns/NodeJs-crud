const request = require('supertest');
const app = require('../server');

describe('Server Tests', () => {
  it('should respond with 200 on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should respond with JSON on GET /api', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
  });
});