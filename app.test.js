const request = require('supertest');
const app = require('./app');

describe('UserController', () => {
  it('should respond to GET /users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });
});