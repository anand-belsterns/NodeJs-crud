const request = require('supertest');
const app = require('../server');

describe('Server Tests', () => {
  it('should respond with a 200 status for the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should return JSON data from /api endpoint', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});