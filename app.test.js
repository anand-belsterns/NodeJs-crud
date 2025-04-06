const request = require('supertest');
const app = require('./app');

describe('UserController', () => {
  it('should respond to GET requests on /users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });

  it('should respond to POST requests on /users', async () => {
    const response = await request(app).post('/users').send({});
    expect(response.status).toBe(201);
  });
});