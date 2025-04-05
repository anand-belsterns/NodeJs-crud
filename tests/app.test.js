const request = require('supertest');
const app = require('../app');

describe('App', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return JSON data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });
});