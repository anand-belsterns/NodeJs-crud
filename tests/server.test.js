const request = require('supertest');
const app = require('../server');

describe('Server Tests', () => {
  it('should respond with 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return JSON', async () => {
    const response = await request(app).get('/api');
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });
});